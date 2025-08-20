import { Link } from "react-router-dom";
import { Leaf, Mail, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-forest text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 font-bold text-xl">
              <div className="p-1.5 bg-primary-foreground/20 rounded-full">
                <Leaf className="h-5 w-5" />
              </div>
              <span>Garden Guardians</span>
            </div>
            <p className="text-primary-foreground/80">
              Protecting food security through resilient community gardens and sustainable solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/problem" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                The Problem
              </Link>
              <Link to="/solutions" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Our Solutions
              </Link>
              <Link to="/weather" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Weather App
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4">Resources</h3>
            <div className="space-y-2">
              <Link to="/case-studies" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Case Studies
              </Link>
              <Link to="/education" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                Educational Content
              </Link>
              <Link to="/about" className="block text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="flex items-center space-x-2 text-primary-foreground/80">
              <Mail className="h-4 w-4" />
              <span>ICT Faculty Project</span>
            </div>
            <p className="text-sm text-primary-foreground/60 mt-4">
              Joint Group Assignment 2025<br />
              Community Engagement on Food Security
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2025 Garden Guardians. Created by ICT first-year students for community food security education.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;