import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-bold text-white">
                Elite <span className="text-gradient">Fitness</span>
              </span>
            </div>
            <p className="text-muted-foreground mb-4">
              Transform your body, transform your life. Join the elite.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/showroom" className="text-muted-foreground hover:text-primary transition-colors">
                  Showroom
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Programs</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">CrossFit Training</li>
              <li className="text-muted-foreground">Cardio Blast</li>
              <li className="text-muted-foreground">Yoga & Wellness</li>
              <li className="text-muted-foreground">Strength Building</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>123 Fitness Street</li>
              <li>New York, NY 10001</li>
              <li className="pt-2">
                <a href="tel:+1234567890" className="hover:text-primary transition-colors">
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a href="mailto:info@elitefitness.com" className="hover:text-primary transition-colors">
                  info@elitefitness.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Elite Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
