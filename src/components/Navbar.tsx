
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SC</span>
          </span>
          <span className="font-display font-bold text-xl text-white">SpeechCraft</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
          <Link to="/features" className="text-white/80 hover:text-white transition-colors">Features</Link>
          <Link to="/pricing" className="text-white/80 hover:text-white transition-colors">Pricing</Link>
          <Link to="/about" className="text-white/80 hover:text-white transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            className="hidden md:block text-white hover:bg-white/10"
          >
            Sign in
          </Button>
          <Button 
            className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity text-white"
            onClick={() => console.log("Get started clicked")}
            asChild
          >
            <Link to="/dashboard">Get Started</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
