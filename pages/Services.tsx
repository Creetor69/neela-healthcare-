
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  Package, 
  Camera,
  Users,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES, IconMap } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const activeServices = SERVICES.filter(s => !s.isComingSoon);
  const comingSoonServices = SERVICES.filter(s => s.isComingSoon);
  const [showPhotos, setShowPhotos] = useState(false);

  const communityInitiatives = [
    "Regular diabetes screening camps including HbA1c testing and risk assessment",
    "Hypertension screening with blood pressure monitoring and free ambulatory BP evaluation",
    "Cardiac screening including ECG for early detection of heart disease",
    "Thyroid disorder screening for early diagnosis and management",
    "Screening for Vitamin D & Vitamin B12 deficiency",
    "Uric acid screening for metabolic and joint-related disorders",
    "Comprehensive diabetic complication screening including retinopathy and neuropathy",
    "Dietician consultation and lifestyle counselling for preventive care",
    "Health awareness and early detection programs in the community"
  ];

  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Medical Services</h1>
          <p className="text-sm text-slate-600">Comprehensive medical services to support your health and well-being.</p>
        </div>

        {/* Active Clinic Services */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-3">
            <div className="flex items-center space-x-3">
              <h2 className="text-lg font-bold text-slate-900">Clinic Consultations</h2>
              <div className="h-px bg-slate-200 w-12"></div>
            </div>
            <div className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-[10px] font-bold flex items-center space-x-2 border border-emerald-200">
              <div className="w-1 h-1 bg-emerald-500 rounded-full animate-pulse"></div>
              <span>Diagnostic Lab Now Open</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {activeServices.map((service) => {
              const Icon = IconMap[service.icon];
              return (
                <div key={service.id} className="group bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:border-sky-100 transition-all flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-6 relative overflow-hidden">
                  {service.id === 'pharmacy' && (
                    <div className="absolute top-0 right-0 bg-emerald-500 text-white px-4 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest">
                      Live
                    </div>
                  )}
                  {service.id === 'lab-services' && (
                    <div className="absolute top-0 right-0 bg-sky-600 text-white px-4 py-1 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest">
                      New
                    </div>
                  )}
                  <div className="bg-sky-50 text-sky-600 w-12 h-12 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{service.description}</p>
                    {service.id === 'lab-services' ? (
                      <Link to="/lab-packages" className="inline-flex items-center space-x-2 text-sky-600 font-bold text-xs hover:underline mt-2">
                        <span>View All Tests & Book Online</span>
                        <ArrowRight size={14} />
                      </Link>
                    ) : (
                      <ul className="grid grid-cols-2 gap-2">
                        {['Diagnosis', 'Follow-up', 'Digital Reports', 'Affordable'].map((feat, i) => (
                          <li key={i} className="flex items-center space-x-2 text-xs text-slate-500">
                            <CheckCircle2 size={12} className="text-sky-500" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              );
            })}
            
            {/* Packages Card */}
            <div className="group bg-medical-gradient p-5 md:p-6 rounded-2xl border border-sky-100 shadow-sm hover:shadow-lg transition-all flex flex-col md:flex-row items-start space-y-3 md:space-y-0 md:space-x-4 relative overflow-hidden">
              <div className="bg-white text-sky-600 w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                <Package size={20} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1">Health Packages</h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  Comprehensive screening packages including Digital X-Ray, TMT + ECHO, Ultrasonography (USG), and customized tests tailored to your individual health needs.
                </p>
                <Link to="/lab-packages" className="inline-flex items-center space-x-2 text-sky-600 font-bold text-xs hover:underline">
                  <span>View & Book Packages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>


        {/* Community Initiatives Section */}
        <div className="mb-10">
          <div className="bg-white rounded-3xl p-5 md:p-8 shadow-lg border border-slate-100">
            <div className="flex flex-col lg:flex-row gap-6">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 bg-sky-100 text-sky-600 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest mb-3">
                  <Users size={10} />
                  <span>Community Impact</span>
                </div>
                <h2 className="text-xl md:text-3xl font-bold text-slate-900 mb-4">Community Health Camps</h2>
                <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                  Outreach programs conducted periodically, reinforcing our commitment to preventive healthcare.
                </p>
                
                <div className="space-y-2 mb-6">
                  {communityInitiatives.slice(0, 6).map((item, i) => (
                    <div key={i} className="flex items-start space-x-2">
                      <div className="mt-0.5 bg-sky-100 text-sky-600 p-0.5 rounded-full shrink-0">
                        <CheckCircle2 size={12} />
                      </div>
                      <span className="text-slate-700 text-xs font-medium">{item}</span>
                    </div>
                  ))}
                </div>

                <button 
                  onClick={() => setShowPhotos(!showPhotos)}
                  className="inline-flex items-center space-x-2 bg-slate-900 text-white px-5 py-2.5 rounded-lg font-bold text-xs hover:bg-slate-800 transition-all"
                >
                  <Camera size={16} />
                  <span>{showPhotos ? 'Hide Photos' : 'View Photos'}</span>
                  {showPhotos ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
              </div>
              
              <div className="lg:w-1/2">
                <AnimatePresence>
                  {showPhotos ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="grid grid-cols-2 gap-2 h-full"
                    >
                      <div className="space-y-2">
                        <img src="https://picsum.photos/seed/camp-p1/400/600" alt="Camp Photo" className="w-full h-32 object-cover rounded-xl shadow-md" />
                        <img src="https://picsum.photos/seed/camp-p2/400/400" alt="Camp Photo" className="w-full h-24 object-cover rounded-xl shadow-md" />
                      </div>
                      <div className="space-y-2 pt-4">
                        <img src="https://picsum.photos/seed/camp-p3/400/400" alt="Camp Photo" className="w-full h-24 object-cover rounded-xl shadow-md" />
                        <img src="https://picsum.photos/seed/camp-p4/400/600" alt="Camp Photo" className="w-full h-32 object-cover rounded-xl shadow-md" />
                      </div>
                    </motion.div>
                  ) : (
                    <div className="relative h-full min-h-[200px] rounded-2xl overflow-hidden group">
                      <img src="https://picsum.photos/seed/community-hero/800/1000" alt="Community Initiatives" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-5">
                        <div className="text-white text-base font-bold mb-1 italic">“Serving the community with care.”</div>
                        <div className="text-sky-400 font-bold uppercase tracking-widest text-[8px]">Neela Healthcare Outreach</div>
                      </div>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>

        {/* Coming Soon Sections */}
        <div className="space-y-6">
           <div className="flex items-center space-x-3 mb-1">
            <h2 className="text-lg font-bold text-slate-900">Expansion & Growth</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {comingSoonServices.map((service) => {
              const Icon = IconMap[service.icon];
              return (
                <div key={service.id} className="relative overflow-hidden bg-slate-900 rounded-2xl p-5 md:p-6 text-white">
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex justify-between items-start mb-4">
                       <div className="bg-white/10 backdrop-blur-md p-2 rounded-lg">
                        <Icon size={20} className="text-sky-400" />
                       </div>
                       <span className="bg-sky-500/20 text-sky-400 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest border border-sky-500/30">Coming Soon</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-slate-400 text-xs leading-relaxed mb-4 max-w-md">
                      {service.description}
                    </p>
                    <div className="mt-auto">
                      <div className="flex items-center space-x-1.5 text-sky-400 font-semibold mb-3 text-[10px]">
                        <Info size={14} />
                        <span>Plans are in progress</span>
                      </div>
                      <Link 
                        to="/contact" 
                        className="inline-flex items-center space-x-2 bg-white text-slate-900 px-4 py-2 rounded-lg font-bold text-[10px] hover:bg-slate-100 transition-all"
                      >
                        <span>Get Updates</span>
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                  {/* Decorative mesh */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
