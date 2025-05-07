
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="h-8 w-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center">
            <span className="text-white font-bold">SC</span>
          </span>
          <span className="font-display font-bold text-xl">SpeechCraft</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition-colors">Home</Link>
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition-colors">About</Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button 
            variant="ghost" 
            className="hidden md:block"
            onClick={() => console.log("Sign in clicked")}
          >
            Sign in
          </Button>
          <Button 
            className="bg-gradient-to-r from-brand-purple to-brand-blue hover:opacity-90 transition-opacity"
            onClick={() => console.log("Get started clicked")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
