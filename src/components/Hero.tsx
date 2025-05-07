
import React from 'react';
import { Button } from "@/components/ui/button";
import { MicIcon } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern -z-10"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Perfect Your Speech with <span className="gradient-text">AI-Powered</span> Optimization
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 md:mb-10">
            Record your voice and instantly transform your speech into polished, context-optimized text for interviews, sales calls, customer support, and more.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity text-white px-8 py-6 text-lg"
            >
              <MicIcon className="mr-2 h-5 w-5" />
              Start Recording
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="px-8 py-6 text-lg"
            >
              See How It Works
            </Button>
          </div>
          
          <div className="mt-12 md:mt-16">
            <div className="bg-white/50 backdrop-blur-sm border border-border/60 rounded-xl shadow-lg p-6 md:p-8 animate-float">
              <div className="flex items-center mb-4">
                <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
                <div className="ml-4 text-xs text-muted-foreground">SpeechCraft AI</div>
              </div>
              <div className="space-y-3">
                <div className="bg-muted/50 p-3 rounded-lg">
                  <p className="text-sm text-left">
                    "I believe I would be a good fit for this position because I have experience..."
                  </p>
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">Original</span>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 p-3 rounded-lg">
                  <p className="text-sm text-left font-medium">
                    "I'm confident I'm an excellent fit for this role, as my 5+ years of experience in similar environments has equipped me with the precise skills outlined in your job description..."
                  </p>
                  <div className="flex justify-end">
                    <span className="text-xs text-muted-foreground">Interview Optimized</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
