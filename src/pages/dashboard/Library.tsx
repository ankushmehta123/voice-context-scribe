
import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { toast } from 'sonner';

interface Speech {
  id: number;
  title: string;
  date: string;
  context: string;
  content: string;
  original?: string;
}

const Library = () => {
  const [speeches, setSpeeches] = useState<Speech[]>([]);
  const [selectedSpeech, setSelectedSpeech] = useState<Speech | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Load speeches from localStorage
  useEffect(() => {
    const savedSpeeches = localStorage.getItem('speeches');
    if (savedSpeeches) {
      setSpeeches(JSON.parse(savedSpeeches));
    }
  }, []);

  const handleEdit = (id: number) => {
    const speech = speeches.find(s => s.id === id);
    if (speech) {
      setSelectedSpeech(speech);
      setIsDialogOpen(true);
    }
  };

  const handleDelete = (id: number) => {
    const updatedSpeeches = speeches.filter(speech => speech.id !== id);
    setSpeeches(updatedSpeeches);
    localStorage.setItem('speeches', JSON.stringify(updatedSpeeches));
    toast.success("Speech deleted!");
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedSpeech(null);
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-8 text-white">Speech Library</h1>
      
      {speeches.length > 0 ? (
        <div className="rounded-md border border-white/10 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-white/5">
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Context</TableHead>
                <TableHead className="w-[100px]">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {speeches.map((speech) => (
                <TableRow key={speech.id} className="border-t border-white/10">
                  <TableCell className="font-medium text-white">{speech.title}</TableCell>
                  <TableCell>{speech.date}</TableCell>
                  <TableCell>{speech.context}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-white/70 hover:text-white hover:bg-white/10"
                        onClick={() => handleEdit(speech.id)}
                      >
                        <Edit size={16} />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-white/70 hover:text-destructive hover:bg-white/10"
                        onClick={() => handleDelete(speech.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-white/70">
          <p className="text-lg">Your speech library is empty</p>
          <p>Create your first speech to get started</p>
        </div>
      )}

      {/* Speech Viewing Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="bg-card border-white/10 text-white max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedSpeech && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedSpeech.title}</DialogTitle>
              </DialogHeader>
              <div className="py-4 space-y-4">
                <div>
                  <h3 className="font-medium text-white/90 mb-2">Enhanced Speech</h3>
                  <div className="p-4 rounded-md bg-white/10 border border-white/20 whitespace-pre-wrap">
                    {selectedSpeech.content}
                  </div>
                </div>
                
                {selectedSpeech.original && (
                  <div>
                    <h3 className="font-medium text-white/90 mb-2">Original Transcript</h3>
                    <div className="p-4 rounded-md bg-white/10 border border-white/20 whitespace-pre-wrap text-white/70">
                      {selectedSpeech.original}
                    </div>
                  </div>
                )}
              </div>
              <DialogFooter>
                <Button 
                  onClick={closeDialog}
                  className="bg-gradient-to-r from-brand-purple to-brand-blue"
                >
                  Close
                </Button>
              </DialogFooter>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Library;
