
import React from 'react';
import { Button } from '@/components/ui/button';
import { Mic } from 'lucide-react';

const Create = () => {
  const handleRecordClick = () => {
    console.log('Record button clicked');
    // Recording functionality will be added later
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-3xl font-bold mb-8 text-white">Create New Speech</h1>
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
    </div>
  );
};

export default Create;
