
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Record Your Voice",
    description: "Use our intuitive recorder to capture your speech. Just click the record button and start talking."
  },
  {
    number: "02",
    title: "Select Your Context",
    description: "Choose whether this is for an interview, sales call, customer support, or other scenario."
  },
  {
    number: "03",
    title: "AI Optimization",
    description: "Our AI analyzes your speech and optimizes it based on your selected context."
  },
  {
    number: "04",
    title: "Review & Save",
    description: "Review your optimized text, make any additional edits, and save it to your library."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 blue-gradient-bg">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            How <span className="gradient-text">SpeechCraft</span> Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your spoken ideas into perfectly crafted text in just a few simple steps.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute top-0 bottom-0 left-12 md:left-16 w-0.5 bg-gradient-to-b from-brand-purple to-brand-blue hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-16">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-6">
                  <div className="flex-shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-brand-purple to-brand-blue flex items-center justify-center text-white font-display text-3xl md:text-4xl font-bold">
                    {step.number}
                  </div>
                  <div className="pt-2">
                    <h3 className="text-2xl font-semibold mb-3 text-white">{step.title}</h3>
                    <p className="text-lg text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
