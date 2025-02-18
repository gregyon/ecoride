import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Car, LogIn, Mail, Menu, X, UserPlus, Search } from 'lucide-react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-eco-green-600 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Car className="h-8 w-8" />
            <span className="font-bold text-xl">EcoRide</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" icon={<Home className="h-5 w-5" />} text="Accueil" />
            <NavLink to="/rides" icon={<Car className="h-5 w-5" />} text="Trajets" />
            <NavLink to="/contact" icon={<Mail className="h-5 w-5" />} text="Contact" />
            <div className="flex items-center space-x-4 pl-4 border-l border-eco-green-500">
              <NavLink to="/login" icon={<LogIn className="h-5 w-5" />} text="Connexion" />
              <Link
                to="/register"
                className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white text-eco-green-600 hover:bg-eco-green-50 transition-colors"
              >
                <UserPlus className="h-5 w-5" />
                <span>S'inscrire</span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md hover:bg-eco-green-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden",
        isMenuOpen ? "block" : "hidden"
      )}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-eco-green-600 shadow-lg">
          <MobileNavLink to="/" icon={<Home className="h-5 w-5" />} text="Accueil" />
          <MobileNavLink to="/rides" icon={<Car className="h-5 w-5" />} text="Trajets" />
          <MobileNavLink to="/contact" icon={<Mail className="h-5 w-5" />} text="Contact" />
          <MobileNavLink to="/login" icon={<LogIn className="h-5 w-5" />} text="Connexion" />
          <Link
            to="/register"
            className="flex items-center space-x-2 px-4 py-2 rounded-md bg-white text-eco-green-600 hover:bg-eco-green-50 transition-colors mx-2"
          >
            <UserPlus className="h-5 w-5" />
            <span>S'inscrire</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center space-x-2 hover:text-eco-green-100 transition-colors",
        "px-3 py-2 rounded-md text-sm font-medium"
      )}
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}

function MobileNavLink({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) {
  return (
    <Link
      to={to}
      className="flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium text-white hover:bg-eco-green-500 mx-2"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
}