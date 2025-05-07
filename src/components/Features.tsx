
import React from 'react';
import { MicIcon, MessageSquare, FileText, BookOpen } from 'lucide-react';

const features = [
  {
    icon: <MicIcon className="h-10 w-10 text-brand-purple" />,
    title: "Voice Recording",
    description: "Record your speech with our high-quality audio capture to ensure accurate transcription and optimization."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-brand-blue" />,
    title: "Context Optimization",
    description: "Specify your scenario—interviews, sales calls, customer support—and get perfectly tailored content."
  },
  {
    icon: <FileText className="h-10 w-10 text-brand-purple-light" />,
    title: "Library Access",
    description: "Access your entire history of optimized speech texts. Edit, delete, or reference past recordings anytime."
  },
  {
    icon: <BookOpen className="h-10 w-10 text-brand-blue-light" />,
    title: "AI Enhancement",
    description: "Our advanced AI corrects grammar, enhances vocabulary, and improves sentence structure to maximize impact."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-accent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Powerful Features</span> to Perfect Your Communication
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SpeechCraft combines cutting-edge speech recognition technology with advanced AI optimization to transform how you communicate.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white border border-border/60 rounded-xl p-6 text-center shadow-sm card-hover"
            >
              <div className="mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
