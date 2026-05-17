
import React from 'react';
import { Link } from 'react-router-dom';
import { FlaskConical, CheckCircle2, Clock, ShieldCheck, ArrowLeft } from 'lucide-react';

const LabDetails: React.FC = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <Link to="/services" className="inline-flex items-center space-x-2 text-slate-500 hover:text-sky-600 mb-6 font-medium text-xs">
          <ArrowLeft size={14} />
          <span>Back to Services</span>
        </Link>
        
        <div className="bg-white rounded-3xl p-6 md:p-10 border border-slate-100 shadow-xl">
          <div className="bg-sky-100 text-sky-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <FlaskConical size={32} />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Diagnostic Lab – <span className="text-sky-600">Coming Soon</span></h1>
          <p className="text-base text-slate-600 mb-8 leading-relaxed">
            We are building a state-of-the-art diagnostic facility to serve you better. Our goal is to bring precision testing and faster medical reports directly within our clinic premises.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Planned Features</h3>
              <ul className="space-y-3">
                {[
                  { title: 'Accurate Testing', desc: 'Modern equipment for precise results.', icon: <CheckCircle2 size={18} className="text-sky-500" /> },
                  { title: 'Faster Reports', desc: 'Same-day or next-day digital delivery.', icon: <Clock size={18} className="text-sky-500" /> },
                  { title: 'Convenience', desc: 'No need to visit external labs.', icon: <ShieldCheck size={18} className="text-sky-500" /> }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <div className="mt-0.5">{item.icon}</div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">{item.title}</div>
                      <div className="text-slate-500 text-xs">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-slate-900">Tests Planned</h3>
              <div className="bg-slate-50 p-5 rounded-2xl">
                <ul className="space-y-2">
                  {['Complete Blood Count (CBC)', 'Diabetes Profile (HbA1c)', 'Thyroid Panel', 'Lipid Profile', 'Urine Analysis', 'Vitamin D & B12'].map((test, i) => (
                    <li key={i} className="flex items-center space-x-2 text-slate-700 font-medium text-xs">
                      <div className="w-1.5 h-1.5 rounded-full bg-sky-400"></div>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-sky-600 text-white p-6 rounded-2xl text-center">
            <h3 className="text-lg font-bold mb-2">Quality Care, Simplified.</h3>
            <p className="opacity-90 mb-0 text-xs">We are building this facility to serve you better. Updates will be announced across our community channels soon.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LabDetails;
