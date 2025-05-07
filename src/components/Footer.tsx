
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-brand-dark border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-8">
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="h-8 w-8 bg-gradient-to-r from-brand-purple to-brand-blue rounded-md flex items-center justify-center">
                <span className="text-white font-bold">SC</span>
              </span>
              <span className="font-display font-bold text-xl text-white">SpeechCraft</span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Transform your speech into perfectly crafted, context-optimized text with our AI-powered speech enhancement platform.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-muted-foreground hover:text-white transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-white transition-colors">Pricing</Link></li>
              <li><Link to="/guides" className="text-muted-foreground hover:text-white transition-colors">Guides</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-muted-foreground hover:text-white transition-colors">About</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4 text-white">Legal</h4>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-white transition-colors">Privacy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-white transition-colors">Terms</Link></li>
              <li><Link to="/cookies" className="text-muted-foreground hover:text-white transition-colors">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} SpeechCraft. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              LinkedIn
            </a>
            <a href="#" className="text-muted-foreground hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
