
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Health Tips', path: '/health-tips' },
    { name: 'Our Staff', path: '/our-staff' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-1' : 'bg-white/90 backdrop-blur-sm py-2'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-center lg:justify-between items-center relative">
          <Link to="/" className="flex items-center">
            <img src="https://i.ibb.co/hxXdKKLT/full-lgogo.jpg" alt="Neela Healthcare and Diagnostics" className="h-14 md:h-20 transition-all duration-300" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-sky-600 ${location.pathname === link.path ? 'text-sky-600' : 'text-slate-600'}`}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={CLINIC_INFO.appointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold flex items-center space-x-2 hover:bg-sky-700 transition-all transform hover:scale-105 active:scale-95 shadow-sm"
            >
              <Phone size={16} />
              <span>Book Appointment</span>
            </a>
          </div>

          {/* Mobile Toggle - Positioned absolute to allow logo centering */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden absolute right-0 p-2 text-slate-600 hover:text-sky-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white border-b transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium ${location.pathname === link.path ? 'text-sky-600' : 'text-slate-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t flex flex-col space-y-4">
            <a
              href={CLINIC_INFO.appointmentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-600 text-white text-center py-3 rounded-xl font-bold flex items-center justify-center space-x-2"
            >
              <Phone size={18} />
              <span>Book Appointment</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
