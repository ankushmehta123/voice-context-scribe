
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Mic, StopCircle, RotateCcw, Save, Trash2 } from 'lucide-react';
import { useSpeechRecording } from '@/hooks/useSpeechRecording';
import { generateEnhancedSpeech } from '@/utils/groqApi';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';

// Define possible states for the speech creation process
type CreationStage = 'initial' | 'recording' | 'review' | 'processing' | 'enhanced';

// Interface for the enhanced speech data
interface EnhancedSpeech {
  original: string;
  enhanced: string;
  date: string;
  title: string;
}

const Create = () => {
  const [stage, setStage] = useState<CreationStage>('initial');
  const [enhancedSpeech, setEnhancedSpeech] = useState<EnhancedSpeech | null>(null);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [title, setTitle] = useState<string>('');
  
  const { 
    isRecording, 
    transcript, 
    audioBlob, 
    startRecording, 
    stopRecording, 
    resetRecording 
  } = useSpeechRecording();

  // Handle the record button click
  const handleRecordClick = async () => {
    if (isRecording) {
      stopRecording();
      setStage('review');
    } else {
      await startRecording();
      setStage('recording');
    }
  };

  // Handle re-recording
  const handleRerecord = () => {
    resetRecording();
    setStage('initial');
    setEnhancedSpeech(null);
  };

  // Handle generate pitch request
  const handleGeneratePitch = async () => {
    if (!transcript || transcript.trim() === '') {
      toast.error("No speech detected. Please record your speech first.");
      return;
    }

    setIsProcessing(true);
    setStage('processing');
    
    try {
      const enhanced = await generateEnhancedSpeech(transcript);
      
      setEnhancedSpeech({
        original: transcript,
        enhanced,
        date: new Date().toISOString().split('T')[0],
        title: title || 'Untitled Speech'
      });
      
      setStage('enhanced');
    } catch (error) {
      console.error('Error generating enhanced speech:', error);
      toast.error("Failed to generate enhanced speech. Please try again.");
      setStage('review');
    } finally {
      setIsProcessing(false);
    }
  };

  // Handle saving to library
  const handleSave = () => {
    if (!enhancedSpeech) return;
    
    // In a real application, this would be stored in a database
    // For this demo, we'll use localStorage
    const existingSpeeches = JSON.parse(localStorage.getItem('speeches') || '[]');
    const newSpeech = {
      id: Date.now(),
      title: enhancedSpeech.title,
      date: enhancedSpeech.date,
      context: 'AI Enhanced',
      content: enhancedSpeech.enhanced,
      original: enhancedSpeech.original
    };
    
    localStorage.setItem('speeches', JSON.stringify([...existingSpeeches, newSpeech]));
    toast.success("Speech saved to library!");
    
    // Reset everything
    handleRerecord();
  };

  // Handler for deleting the current speech
  const handleDelete = () => {
    handleRerecord();
    toast.info("Speech deleted");
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-8 text-white">Create New Speech</h1>
      
      {stage === 'initial' && (
        <div className="flex flex-col items-center space-y-8">
          <Button 
            onClick={handleRecordClick}
            size="lg"
            className="w-24 h-24 rounded-full bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90"
          >
            <Mic size={36} />
          </Button>
          <p className="text-white/70 text-lg">Click to start recording your speech</p>
        </div>
      )}
      
      {stage === 'recording' && (
        <div className="flex flex-col items-center space-y-8 w-full max-w-2xl">
          <Button 
            onClick={handleRecordClick}
            size="lg"
            className="w-24 h-24 rounded-full bg-red-500 hover:bg-red-600 animate-pulse"
          >
            <StopCircle size={36} />
          </Button>
          <p className="text-white/70 text-lg">Recording... Click to stop</p>
          <div className="w-full">
            <div className="mb-2 flex justify-between text-sm text-white/70">
              <span>Recording</span>
            </div>
            <Progress className="h-2" value={100} />
          </div>
          <div className="w-full p-4 bg-white/5 rounded-md border border-white/10">
            <p className="text-white/90 italic">"{transcript || 'Listening...'}"</p>
          </div>
        </div>
      )}
      
      {stage === 'review' && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
          <Card className="w-full bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>Speech Review</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <label htmlFor="title" className="block text-sm font-medium text-white/70 mb-1">
                  Title
                </label>
                <input
                  id="title"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full p-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/40"
                  placeholder="Enter a title for your speech"
                />
              </div>
              <div>
                <label htmlFor="transcript" className="block text-sm font-medium text-white/70 mb-1">
                  Transcript
                </label>
                <Textarea
                  id="transcript"
                  value={transcript}
                  readOnly
                  className="w-full h-48 p-3 rounded-md bg-white/10 border border-white/20 text-white resize-none"
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                onClick={handleRerecord} 
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RotateCcw size={16} className="mr-2" />
                Re-record
              </Button>
              <Button 
                onClick={handleGeneratePitch}
                className="bg-gradient-to-r from-brand-purple to-brand-blue"
              >
                Generate Pitch
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
      
      {stage === 'processing' && (
        <div className="flex flex-col items-center justify-center space-y-6 w-full max-w-2xl">
          <div className="w-full">
            <p className="text-white/70 text-center mb-4">Enhancing your speech...</p>
            <Progress value={isProcessing ? 90 : 100} className="w-full" />
          </div>
        </div>
      )}
      
      {stage === 'enhanced' && enhancedSpeech && (
        <div className="flex flex-col items-center space-y-6 w-full max-w-2xl">
          <Card className="w-full bg-white/5 border-white/10 text-white">
            <CardHeader>
              <CardTitle>{enhancedSpeech.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-white/90 mb-2">Enhanced Speech</h3>
                  <div className="p-4 rounded-md bg-white/10 border border-white/20 whitespace-pre-wrap">
                    {enhancedSpeech.enhanced}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button 
                onClick={handleDelete} 
                variant="outline"
                className="border-white/20 text-white hover:bg-red-500/20 hover:border-red-500/50"
              >
                <Trash2 size={16} className="mr-2" />
                Delete
              </Button>
              <Button 
                onClick={handleSave}
                className="bg-gradient-to-r from-brand-purple to-brand-blue"
              >
                <Save size={16} className="mr-2" />
                Save to Library
              </Button>
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Create;
