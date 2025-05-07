
import React from 'react';
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-purple to-brand-blue text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Perfect Your Communication?
        </h2>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto mb-8">
          Join thousands of professionals using SpeechCraft to enhance their verbal communication for interviews, sales, customer service, and more.
        </p>
        <Button 
          variant="secondary" 
          size="lg"
          className="px-8 py-6 text-lg bg-white text-brand-purple hover:bg-white/90"
        >
          Get Started For Free
        </Button>
      </div>
    </section>
  );
};

export default CTA;
