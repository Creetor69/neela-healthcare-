
import React from 'react';
import { MapPin, Phone, Clock, Calendar, Send, ExternalLink } from 'lucide-react';
import { CLINIC_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">Contact & Appointments</h1>
          <p className="text-sm text-slate-600">We&apos;re here to help. Reach out to book a consultation or visit us during clinic hours.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
           {/* Contact Info Card */}
           <div className="space-y-4">
              <div className="bg-white p-5 md:p-6 rounded-2xl shadow-sm border border-slate-100">
                <h2 className="text-lg font-bold text-slate-900 mb-4">Reach Us Directly</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-50 text-sky-600 p-2 rounded-lg shrink-0"><MapPin size={18} /></div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5 text-xs">Clinic Location</div>
                      <div className="text-slate-600 leading-tight mb-2 text-[10px]">{CLINIC_INFO.address}</div>
                      <div className="flex gap-2">
                        <a 
                          href={CLINIC_INFO.googleMapsShareUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="bg-sky-600 text-white px-2.5 py-1 rounded-lg text-[8px] font-bold flex items-center space-x-1.5 hover:bg-sky-700 transition-all"
                        >
                          <MapPin size={10} />
                          <span>Get Directions</span>
                        </a>
                        <a 
                          href={CLINIC_INFO.googleMapsShareUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sky-600 text-[8px] font-bold flex items-center space-x-1.5 hover:underline"
                        >
                          <ExternalLink size={10} />
                          <span>View on Maps</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-50 text-sky-600 p-2 rounded-lg shrink-0"><Phone size={18} /></div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5 text-xs">Phone Number</div>
                      <div className="text-slate-600 text-base font-bold">{CLINIC_INFO.phone}</div>
                      <div className="text-slate-500 text-[10px]">Call for appointments or inquiries</div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="bg-sky-50 text-sky-600 p-2 rounded-lg shrink-0"><Clock size={18} /></div>
                    <div>
                      <div className="font-bold text-slate-900 mb-0.5 text-xs">Consultation Hours</div>
                      <div className="text-slate-600 text-[10px]">Mon - Sat: 5:00 PM - 9:00 PM</div>
                      <div className="text-rose-500 text-[10px] font-bold">Closed on Sundays</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden border border-slate-100 h-48 shadow-sm relative group">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375253818318!2d77.5350!3d12.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzInMDYuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                  title="Google Maps Location"
                ></iframe>
                <a 
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-sky-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <span className="bg-white text-slate-900 px-3 py-1.5 rounded-lg font-bold flex items-center space-x-2 text-xs">
                    <MapPin size={14} />
                    <span>Get Directions</span>
                  </span>
                </a>
           </div>
           </div>

           {/* Appointment Form */}
           <div className="bg-slate-900 text-white p-6 md:p-8 rounded-2xl shadow-xl">
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-white/10 p-1.5 rounded-lg text-sky-400"><Calendar size={18} /></div>
                <h2 className="text-xl font-bold">Book Appointment</h2>
              </div>
              <p className="text-slate-400 mb-6 text-xs">Please fill out the form below. Our clinic staff will call you to confirm your slot.</p>
              
              <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-300 ml-1 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-slate-300 ml-1 uppercase tracking-wider">Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="e.g. 9876543210"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all placeholder:text-slate-600"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-300 ml-1 uppercase tracking-wider">Purpose of Visit</label>
                  <select className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all appearance-none">
                    <option className="bg-slate-900">General Consultation</option>
                    <option className="bg-slate-900">Diabetes / BP Checkup</option>
                    <option className="bg-slate-900">Fever / Infection</option>
                    <option className="bg-slate-900">Senior Care</option>
                    <option className="bg-slate-900">Other</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-slate-300 ml-1 uppercase tracking-wider">Message (Optional)</label>
                  <textarea 
                    rows={2} 
                    placeholder="Briefly describe your symptoms..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs focus:ring-2 focus:ring-sky-500 focus:outline-none transition-all placeholder:text-slate-600"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-sky-600 text-white py-3 rounded-lg font-bold text-sm hover:bg-sky-500 transition-all flex items-center justify-center space-x-2 shadow-lg shadow-sky-900/40"
                >
                  <Send size={16} />
                  <span>Send Request</span>
                </button>
              </form>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
