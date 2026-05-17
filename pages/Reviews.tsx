
import React from 'react';
import { Star, MessageSquare, Quote, Users, MapPin } from 'lucide-react';
import { REVIEWS, CLINIC_INFO } from '../constants';

const Reviews: React.FC = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">Patient Stories</h1>
          <p className="text-sm text-slate-600">The trust of our patients is our greatest achievement. Here are all {REVIEWS.length} reviews from patients who have experienced our care.</p>
        </div>

        {/* Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
           {[
             { label: 'Overall Rating', val: '5.0/5.0', sub: 'Google, Practo, MediBuddy', icon: <Star size={18} className="text-amber-500" fill="currentColor" /> },
             { label: 'Patient Reviews', val: `${REVIEWS.length}`, sub: 'And Growing', icon: <MessageSquare size={18} className="text-sky-500" /> },
             { label: 'Patient Trust', val: '1000+', sub: 'Successful Consultations', icon: <Users size={18} className="text-emerald-500" /> }
           ].map((stat, idx) => (
             <div key={idx} className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm text-center">
                <div className="mx-auto w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-slate-900 mb-0.5">{stat.val}</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-0.5">{stat.label}</div>
                <div className="text-[8px] text-slate-400">{stat.sub}</div>
             </div>
           ))}
        </div>

        {/* Detailed Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
           {REVIEWS.map((review) => (
             <div key={review.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative overflow-hidden group hover:border-sky-100 hover:shadow-md transition-all">
                <Quote className="absolute -top-3 -right-3 text-slate-50 opacity-10 group-hover:scale-125 transition-transform duration-700" size={60} />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex text-amber-500 mb-3">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                    {[...Array(5 - review.rating)].map((_, i) => <Star key={i} size={12} className="text-slate-200" />)}
                  </div>
                  <p className="text-slate-700 text-xs leading-relaxed italic mb-4 flex-grow">&quot;{review.content}&quot;</p>
                  <div className="flex items-center space-x-2 pt-3 border-t border-slate-50">
                    <div className="w-8 h-8 rounded-lg bg-sky-100 flex items-center justify-center text-xs font-bold text-sky-600">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{review.author}</div>
                      <div className="flex items-center space-x-1.5 text-[8px] text-slate-500">
                        {review.role && <span className="bg-slate-100 px-1.5 py-0.5 rounded-full text-sky-600 font-semibold">{review.role}</span>}
                        <span>{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
             </div>
           ))}
        </div>

        <div className="bg-medical-gradient p-8 rounded-3xl text-center border border-sky-100 flex flex-col items-center">
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-4">Ready to visit us?</h2>
          <p className="text-xs text-slate-600 max-w-2xl mx-auto mb-8">Join our community of healthy, satisfied patients. Get direct navigation to our clinic in Banashankari.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href={CLINIC_INFO.googleMapsShareUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-sky-600 text-white px-8 py-3 rounded-xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-100 inline-flex items-center space-x-2 text-xs"
            >
              <MapPin size={16} />
              <span>Get Directions</span>
            </a>
            <a 
              href="https://www.google.com/maps/place/DR.+MANOJ+A+G+CLINIC/@12.90,77.5350,15z" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-slate-700 border-2 border-slate-100 px-8 py-3 rounded-xl font-bold hover:bg-slate-50 transition-all inline-flex items-center space-x-2 text-xs"
            >
              <Star size={16} className="text-amber-500" />
              <span>Write a Review</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
