
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Edit, Trash2 } from 'lucide-react';

// Mock data for demonstration purposes
const mockSpeeches: { id: number; title: string; date: string; context: string }[] = [];

const Library = () => {
  const handleEdit = (id: number) => {
    console.log(`Edit speech ${id}`);
    // Edit functionality will be added later
  };

  const handleDelete = (id: number) => {
    console.log(`Delete speech ${id}`);
    // Delete functionality will be added later
  };

  return (
    <div className="flex flex-col h-full">
      <h1 className="text-3xl font-bold mb-8 text-white">Speech Library</h1>
      
      {mockSpeeches.length > 0 ? (
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
              {mockSpeeches.map((speech) => (
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
    </div>
  );
};

export default Library;
