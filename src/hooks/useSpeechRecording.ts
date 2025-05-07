
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'sonner';

export interface SpeechRecordingState {
  isRecording: boolean;
  isPaused: boolean;
  transcript: string;
  audioBlob: Blob | null;
}

export const useSpeechRecording = () => {
  const [state, setState] = useState<SpeechRecordingState>({
    isRecording: false,
    isPaused: false,
    transcript: '',
    audioBlob: null,
  });

  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [audioChunks, setAudioChunks] = useState<Blob[]>([]);
  const [recognitionInstance, setRecognitionInstance] = useState<SpeechRecognition | null>(null);

  // Initialize speech recognition
  useEffect(() => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast.error("Speech recognition is not supported in this browser");
      return;
    }
    
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';
    
    recognition.onresult = (event) => {
      let transcript = '';
      for (let i = 0; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }
      
      setState(prev => ({ ...prev, transcript }));
    };
    
    recognition.onerror = (event) => {
      console.error('Speech recognition error', event.error);
      toast.error(`Speech recognition error: ${event.error}`);
      stopRecording();
    };
    
    setRecognitionInstance(recognition);
    
    return () => {
      recognition.abort();
    };
  }, []);

  const startRecording = useCallback(async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const recorder = new MediaRecorder(stream);
      setMediaRecorder(recorder);
      
      const chunks: Blob[] = [];
      setAudioChunks(chunks);
      
      recorder.ondataavailable = (e) => {
        chunks.push(e.data);
      };
      
      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: 'audio/wav' });
        setState(prev => ({ ...prev, audioBlob, isRecording: false }));
      };
      
      recorder.start();
      recognitionInstance?.start();
      setState(prev => ({ ...prev, isRecording: true, isPaused: false, transcript: '' }));
      toast.info("Recording started");
    } catch (error) {
      console.error('Error starting recording', error);
      toast.error("Could not access microphone. Please check permissions.");
    }
  }, [recognitionInstance]);

  const stopRecording = useCallback(() => {
    if (mediaRecorder && state.isRecording) {
      mediaRecorder.stop();
      recognitionInstance?.stop();
      
      const tracks = mediaRecorder.stream.getTracks();
      tracks.forEach(track => track.stop());
      
      toast.info("Recording stopped");
    }
  }, [mediaRecorder, state.isRecording, recognitionInstance]);

  const resetRecording = useCallback(() => {
    setState({
      isRecording: false,
      isPaused: false,
      transcript: '',
      audioBlob: null,
    });
    setAudioChunks([]);
  }, []);

  return {
    ...state,
    startRecording,
    stopRecording,
    resetRecording,
  };
};

// TypeScript definitions for the Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}
