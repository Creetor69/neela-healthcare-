
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Clock } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-10 pb-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="space-y-3">
            <h3 className="text-white text-xl font-bold tracking-tight">{CLINIC_INFO.name}</h3>
            <p className="text-xs leading-relaxed opacity-80">
              Your trusted partner in health. Providing comprehensive medical care and diagnostic services with a focus on compassionate care and clinical excellence.
            </p>
            <div className="flex items-center space-x-2 text-sky-400 font-semibold">
              <span className="text-xl">{CLINIC_INFO.googleRating.toFixed(1)}</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                ))}
              </div>
              <span className="text-[10px] text-slate-400">({CLINIC_INFO.reviewCount}+ Reviews)</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/lab-packages" className="hover:text-white transition-colors">Lab & Packages</Link></li>
              <li><Link to="/health-tips" className="hover:text-white transition-colors">Health Tips</Link></li>
              <li><Link to="/our-staff" className="hover:text-white transition-colors">Our Staff</Link></li>
              <li><Link to="/reviews" className="hover:text-white transition-colors">Reviews</Link></li>
              <li><a href={CLINIC_INFO.appointmentLink} target="_blank" rel="noopener noreferrer" className="text-sky-400 font-bold hover:text-sky-300 transition-colors">Book Appointment</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Contact Info</h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start space-x-2">
                <MapPin className="text-sky-500 shrink-0 mt-0.5" size={14} />
                <span>{CLINIC_INFO.address}</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="text-sky-500 shrink-0" size={14} />
                <span>{CLINIC_INFO.phone}</span>
              </li>
              <li className="flex items-start space-x-2">
                <Clock className="text-sky-500 shrink-0 mt-0.5" size={14} />
                <span>{CLINIC_INFO.hours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4 text-sm">Visit Us</h4>
            <div className="rounded-lg overflow-hidden h-32 relative group">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375253818318!2d77.5350!3d12.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzInMDYuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
