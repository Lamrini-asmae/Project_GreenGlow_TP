import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary-950 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="GreenGlow" className="h-14 bg-white rounded-full p-1" />
            </Link>
            <p className="text-neutral-200 mb-6">
              Eco-friendly, natural skincare products that nourish your skin and the planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-accent-400 transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-neutral-200 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Facial Cleansers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Moisturizers
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Serums
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-neutral-200 hover:text-white transition-colors">
                  Body Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-primary-300 flex-shrink-0 mt-1" />
                <span className="text-neutral-200">
                  123 Green Street, Eco City, EC 12345
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-neutral-200">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-primary-300 flex-shrink-0" />
                <span className="text-neutral-200">info@greenglow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-300 text-sm">
              &copy; {new Date().getFullYear()} GreenGlow. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-neutral-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;