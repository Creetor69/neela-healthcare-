
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Info, 
  CheckCircle2, 
  FlaskConical, 
  Microscope, 
  Dna, 
  Heart, 
  Wind, 
  Monitor, 
  Package, 
  Camera,
  ShieldCheck,
  Activity,
  Users,
  Clock,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { SERVICES, IconMap } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';

const Services: React.FC = () => {
  const activeServices = SERVICES.filter(s => !s.isComingSoon);
  const comingSoonServices = SERVICES.filter(s => s.isComingSoon);
  const [showPhotos, setShowPhotos] = useState(false);

  const [isLabExpanded, setIsLabExpanded] = useState(true);

  const labServices = [
    {
      category: "Laboratory Investigations",
      icon: <Microscope size={20} />,
      items: ["Complete Blood Count (CBC)", "Blood Sugar (FBS, PPBS, HbA1c)", "Lipid Profile", "Liver & Renal Function Tests", "Urine Analysis", "Electrolytes"]
    },
    {
      category: "Specialized & Hormonal Tests",
      icon: <Dna size={20} />,
      items: ["Thyroid Profile", "Hormonal Assays", "Vitamin B12 & D3", "Iron Studies", "Tumor Markers"]
    },
    {
      category: "Microbiology & Infectious Diseases",
      icon: <ShieldCheck size={20} />,
      items: ["Culture & Sensitivity", "Dengue, Malaria, Typhoid", "Tuberculosis testing", "Viral markers"]
    },
    {
      category: "Pathology Services",
      icon: <FlaskConical size={20} />,
      items: ["FNAC (Fine Needle Aspiration Cytology)", "Cytology (Body fluids, Pap smear)", "Histopathology (Biopsy analysis)", "Slide review & second opinion"]
    },
    {
      category: "Cardiac Evaluation",
      icon: <Heart size={20} />,
      items: ["ECG (Electrocardiogram)", "2D Echo", "TMT (Treadmill Test)", "Cardiac Risk Markers"]
    },
    {
      category: "Pulmonary Function Testing",
      icon: <Wind size={20} />,
      items: ["PFT (Spirometry)", "Asthma & COPD assessment"]
    },
    {
      category: "Imaging Services",
      icon: <Monitor size={20} />,
      items: ["Ultrasound (USG – Abdomen, Pelvis, Obstetric scans)", "Digital X-ray", "Basic diagnostic imaging"]
    },
    {
      category: "Preventive Health Checkups",
      icon: <Package size={20} />,
      items: ["General Health Packages", "Executive Checkups", "Senior Citizen Packages", "Women’s Health Packages", "Diabetes & Cardiac Packages"]
    }
  ];

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
                    <ul className="grid grid-cols-2 gap-2">
                       {['Diagnosis', 'Follow-up', 'Digital Reports', 'Affordable'].map((feat, i) => (
                         <li key={i} className="flex items-center space-x-2 text-xs text-slate-500">
                           <CheckCircle2 size={12} className="text-sky-500" />
                           <span>{feat}</span>
                         </li>
                       ))}
                    </ul>
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
                <p className="text-xs text-slate-600 leading-relaxed mb-3">Customized health packages available based on individual needs. Comprehensive screening.</p>
                <Link to="/contact" className="inline-flex items-center space-x-2 text-sky-600 font-bold text-xs hover:underline">
                  <span>Inquire about packages</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Lab Section */}
        <div className="mb-10 bg-slate-900 rounded-3xl p-5 md:p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
          
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-8 gap-4">
              <div className="max-w-2xl">
                <div className="text-sky-400 font-bold tracking-widest uppercase text-[10px] mb-2">Advanced Diagnostics</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-3">Laboratory Investigations</h2>
                <p className="text-slate-400 text-sm">Advanced Diagnostics with Clinical Expertise – Lab Tests, Imaging & Pathology.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => setIsLabExpanded(!isLabExpanded)}
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2 transition-all"
                >
                  <div className="bg-sky-500/20 text-sky-400 p-1 rounded-lg">
                    {isLabExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                  </div>
                  <span className="text-xs font-bold">{isLabExpanded ? 'Minimize' : 'Expand Services'}</span>
                </button>
                <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center space-x-2">
                  <div className="bg-emerald-500/20 text-emerald-400 p-1 rounded-lg"><Clock size={16} /></div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-wider">Fast Reporting</div>
                    <div className="text-xs font-bold">Same-day Results</div>
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {isLabExpanded && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {labServices.map((section, idx) => (
                      <div key={idx} className="bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all">
                        <div className="text-sky-400 mb-3">
                          {React.cloneElement(section.icon as React.ReactElement, { size: 24 })}
                        </div>
                        <h3 className="text-lg font-bold mb-3 text-white">{section.category}</h3>
                        <ul className="space-y-2">
                          {section.items.map((item, i) => (
                            <li key={i} className="flex items-start space-x-2 text-xs text-slate-400">
                              <div className="mt-1.5 w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0"></div>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 pt-8 border-t border-white/10">
              <div className="flex items-start space-x-2">
                <div className="bg-sky-500/20 p-1.5 rounded-lg text-sky-400"><Activity size={16} /></div>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">Doctor-Integrated Care</h4>
                  <p className="text-[10px] text-slate-400">Clinically correlated reports with expert guidance.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400"><ShieldCheck size={16} /></div>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">Quality Controlled</h4>
                  <p className="text-[10px] text-slate-400">Accurate diagnostics using state-of-the-art equipment.</p>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <div className="bg-amber-500/20 p-1.5 rounded-lg text-amber-400"><Info size={16} /></div>
                <div>
                  <h4 className="font-bold text-xs mb-0.5">One-Stop Care</h4>
                  <p className="text-[10px] text-slate-400">Consultation + Diagnostics + Pharmacy.</p>
                </div>
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
