import React from 'react';
import { Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-eco-green-800 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Mail className="h-5 w-5" />
            <a href="mailto:contact@ecovoiturage.fr" className="hover:text-eco-green-200">
              contact@ecovoiturage.fr
            </a>
          </div>
          
          <div className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <Link to="/legal" className="hover:text-eco-green-200">
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}