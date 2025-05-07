
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-4xl bg-white/5 backdrop-blur-lg rounded-2xl p-10 border border-white/10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">Ready to Transform Your Speech?</h2>
        <p className="text-white/70 mb-8 max-w-2xl mx-auto">
          Start enhancing your communication skills today with our AI-powered speech optimization platform. Perfect for interviews, sales calls, and customer interactions.
        </p>
        <Button 
          size="lg" 
          className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity text-white"
          asChild
        >
          <Link to="/dashboard">Get Started For Free</Link>
        </Button>
      </div>
    </section>
  );
};

export default CTA;
