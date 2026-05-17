
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Phone, 
  Star, 
  ShieldCheck, 
  MapPin, 
  Clock, 
  ExternalLink, 
  Heart, 
  Activity, 
  Users, 
  Award,
  CheckCircle2,
  FlaskConical
} from 'lucide-react';
import { CLINIC_INFO, SERVICES, REVIEWS, IconMap } from '../constants';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="pt-20 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center bg-medical-gradient overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-sky-200/40 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/40 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-12 pb-16 md:pb-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs font-bold mb-6">
                <Award size={14} />
                <span>Top Rated Clinic in Banashankari</span>
              </motion.div>
              
              <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6">
                Your Health, Our <br />
                <span className="text-sky-600 italic font-serif">Priority.</span> Always.
              </motion.h1>
              
              <motion.p variants={itemVariants} className="text-base md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl">
                At Neela Healthcare, we blend clinical excellence with deep compassion. Led by <span className="text-sky-600 font-bold">{CLINIC_INFO.doctor}</span>.
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4 mb-12">
                <a
                  href={CLINIC_INFO.appointmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl shadow-slate-200 flex items-center justify-center space-x-2 hover:bg-slate-800 transition-all hover:-translate-y-1 active:scale-95"
                >
                  <Phone size={20} />
                  <span>Book Appointment</span>
                </a>
                <a
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-xl font-bold text-base shadow-sm flex items-center justify-center space-x-2 hover:bg-slate-50 transition-all hover:-translate-y-1 active:scale-95"
                >
                  <MapPin size={20} />
                  <span>Locate Clinic</span>
                </a>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center justify-center space-x-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white overflow-hidden bg-slate-200 shadow-md">
                      <img src={`https://picsum.photos/seed/patient${i}/100/100`} alt="Patient" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-sky-600 flex items-center justify-center text-white text-xs font-bold shadow-md">
                    +1k
                  </div>
                </div>
                <div className="text-left">
                  <div className="flex text-amber-500 mb-1">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} size={14} fill="currentColor" />)}
                  </div>
                  <div className="text-slate-500 font-bold text-sm">Trusted by 1000+ Patients</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2 cursor-pointer z-20"
          onClick={() => window.scrollTo({ top: window.innerHeight * 0.9, behavior: 'smooth' })}
        >
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">Scroll</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 border-2 border-slate-300 rounded-full flex justify-center p-1"
          >
            <div className="w-1 h-1.5 bg-sky-600 rounded-full"></div>
          </motion.div>
        </motion.div>
      </section>

      {/* Certified Clinic & Live Pharmacy Section (As per User Image) */}
      <section className="relative -mt-10 md:-mt-16 z-30 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-[40px] md:rounded-[60px] shadow-2xl border border-slate-100 p-6 md:p-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="flex items-center space-x-5">
                <div className="w-16 h-16 bg-sky-100 rounded-3xl flex items-center justify-center text-sky-600 shadow-inner">
                  <ShieldCheck size={36} />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-tight">Certified Clinic</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Quality Assured</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-5 justify-center md:border-x md:border-slate-100 px-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-3xl flex items-center justify-center text-emerald-600 shadow-inner">
                  <Activity size={36} />
                </div>
                <div>
                  <div className="text-xl font-black text-slate-900 leading-tight">Live Pharmacy</div>
                  <div className="text-xs text-slate-400 font-bold uppercase tracking-widest">Now Operational</div>
                </div>
              </div>

              <div className="flex justify-center md:justify-end">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-md">
                      <img src={`https://picsum.photos/seed/trust${i}/100/100`} alt="Trust" className="w-full h-full object-cover" />
                    </div>
                  ))}
                  <div className="w-12 h-12 rounded-full border-4 border-white bg-sky-600 flex items-center justify-center text-xs font-black text-white shadow-md">
                    +1k
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 pt-10 border-t border-slate-50">
              {[
                { label: 'Experience', val: '13+', icon: <Award className="text-sky-500" size={24} /> },
                { label: 'Patients', val: '1000+', icon: <Users className="text-emerald-500" size={24} /> },
                { label: 'Rating', val: '5.0/5', icon: <Star className="text-amber-500" fill="currentColor" size={24} /> }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-slate-50/50 rounded-2xl sm:bg-transparent">
                  <div className="mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-4xl font-black text-slate-900">{stat.val}</div>
                  <div className="text-[10px] md:text-xs font-black text-slate-400 uppercase tracking-widest">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Bento Grid */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">Why Neela Healthcare?</h2>
            <p className="text-slate-600 text-sm md:text-base">Clinic & Diagnostics Under One Roof – Accurate & Affordable Care</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/2">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Physician-Led Care</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  Led by MD & DNB specialists in Geriatric Medicine and Diabetology.
                </p>
                <ul className="space-y-2">
                  {[
                    'Experienced physician-led care',
                    'Accurate diagnostic reports',
                    'Patient-friendly approach'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3 text-slate-700 text-xs font-bold">
                      <CheckCircle2 size={16} className="text-sky-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-1/2 h-48 rounded-xl overflow-hidden shadow-md">
                <img src="https://picsum.photos/seed/care1/600/600" alt="Care" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="bg-emerald-100 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Local Accessibility</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Located in Banashankari 5th Stage, serving the local community daily.
                </p>
              </div>
              <div className="mt-6 text-slate-400 font-bold text-[10px] uppercase tracking-widest">Uttarahalli • RR Nagar • BSK</div>
            </div>

            <div className="md:col-span-3 bg-slate-900 p-6 md:p-8 rounded-2xl shadow-lg text-white flex flex-col md:flex-row items-center gap-6">
              <div className="md:w-1/4 h-32 rounded-xl overflow-hidden shadow-md">
                <img src="https://picsum.photos/seed/pharmacy-v2/600/600" alt="Pharmacy" className="w-full h-full object-cover grayscale" />
              </div>
              <div className="md:w-3/4">
                <h3 className="text-xl font-bold mb-2">All Services Under One Roof</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">
                  Consultation, pharmacy, diagnostics, and upcoming day care services.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-emerald-500/30">Pharmacy</span>
                  <span className="bg-sky-500/20 text-sky-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-sky-500/30">Lab</span>
                  <span className="bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-sky-500/30">Day Care Soon</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lab & Diagnostics Section */}
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-white rounded-2xl p-4 md:p-6 shadow-lg border border-slate-100 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-50/50 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-6">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full text-[8px] font-bold uppercase tracking-widest mb-2">
                  <FlaskConical size={10} />
                  <span>Now Open</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2 leading-tight">
                  Advanced <span className="text-sky-600">Diagnostics</span> Lab
                </h2>
                <p className="text-xs text-slate-600 mb-3 leading-relaxed">
                  Fully operational facility for routine and specialized tests with accuracy and speed.
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {[
                    { title: 'Pathology', desc: 'Expert analysis' },
                    { title: 'Biochemistry', desc: 'Metabolic panels' },
                    { title: 'Hematology', desc: 'Blood analysis' },
                    { title: 'Microbiology', desc: 'Infection diagnostics' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start space-x-1.5">
                      <div className="mt-0.5 bg-sky-100 text-sky-600 p-0.5 rounded-full">
                        <CheckCircle2 size={10} />
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-[10px]">{item.title}</div>
                        <div className="text-[8px] text-slate-500">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link to="/services" className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-[10px] hover:bg-slate-800 transition-all shadow-lg shadow-slate-200">
                  <span>View Details</span>
                  <ArrowRight size={12} />
                </Link>
              </div>
              
              <div className="lg:w-1/2 relative">
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl h-48 md:h-64">
                  <img src="https://picsum.photos/seed/lab-tech/800/1000" alt="Laboratory" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div className="max-w-2xl">
              <div className="text-sky-600 font-bold tracking-widest uppercase text-[10px] mb-2">Our Expertise</div>
              <h2 className="text-2xl md:text-4xl font-bold text-slate-900">Comprehensive Care</h2>
            </div>
            <Link
              to="/services"
              className="mt-4 md:mt-0 text-sky-600 font-bold text-xs flex items-center space-x-2 hover:underline"
            >
              <span>View all services</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICES.filter(s => !s.isComingSoon).slice(0, 3).map((service, idx) => {
              const Icon = IconMap[service.icon];
              return (
                <motion.div 
                  key={service.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-xl hover:border-sky-100 transition-all duration-500"
                >
                  <div className="bg-white text-sky-600 w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all duration-500">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed line-clamp-3">{service.description}</p>
                  <Link to="/services" className="inline-flex items-center space-x-3 text-slate-900 text-xs font-bold group/btn">
                    <span>Learn More</span>
                    <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center group-hover/btn:bg-sky-600 group-hover/btn:text-white transition-all">
                      <ArrowRight size={12} />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 bg-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-6">
            <div className="max-w-xl">
              <div className="text-sky-600 font-bold tracking-widest uppercase text-[8px] mb-1">Success Stories</div>
              <h2 className="text-xl md:text-2xl font-bold text-slate-900">What Patients Say</h2>
            </div>
            <div className="mt-2 md:mt-0 flex items-center space-x-2 bg-slate-50 p-1.5 rounded-lg border border-slate-100">
              <div className="text-xl font-bold text-slate-900">5.0</div>
              <div className="flex flex-col">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <span className="text-[7px] text-slate-500 font-bold uppercase">Google Rating</span>
              </div>
            </div>
          </div>

          <div className="flex overflow-hidden group">
            <div className="animate-infinite-scroll flex space-x-3 py-1">
              {[...REVIEWS, ...REVIEWS].map((review, index) => (
                <div key={`${review.id}-${index}`} className="w-[240px] md:w-[300px] bg-white p-4 md:p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col shrink-0 hover:shadow-md hover:border-sky-100 transition-all duration-500">
                  <div className="flex items-center space-x-1 mb-2 text-amber-500">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 text-[11px] font-medium italic mb-3 whitespace-normal leading-relaxed flex-grow">&quot;{review.content}&quot;</p>
                  <div className="flex items-center space-x-2">
                    <div className="w-7 h-7 rounded-lg bg-sky-100 flex items-center justify-center font-bold text-sky-700 text-[10px] uppercase">
                      {review.author[0]}
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-xs">{review.author}</div>
                      <div className="text-[9px] text-slate-500">{review.date}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Link to="/reviews" className="inline-flex items-center space-x-2 bg-slate-900 text-white px-4 py-2 rounded-lg font-bold text-[10px] hover:bg-slate-800 transition-all">
              <span>Read all {REVIEWS.length}+ Reviews</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 bg-sky-600 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-xl md:text-3xl font-bold text-white mb-3 leading-tight">Ready to prioritize your health?</h2>
            <p className="text-xs text-sky-100 mb-5 max-w-lg mx-auto">
              Book your consultation today and experience healthcare that truly cares about you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-2">
              <a 
                href={`tel:${CLINIC_INFO.phone.replace(/\s/g, '')}`}
                className="bg-white text-sky-600 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-sky-50 transition-all shadow-xl"
              >
                Call: {CLINIC_INFO.phone}
              </a>
              <Link 
                to="/contact"
                className="bg-sky-700 text-white border border-sky-500 px-5 py-2.5 rounded-lg font-bold text-sm hover:bg-sky-800 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-xl flex flex-col lg:flex-row">
            <div className="p-5 md:p-6 lg:w-1/2 space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">Find Us</h2>
                <p className="text-slate-400 text-[11px]">Located in Banashankari, accessible from RR Nagar and Uttarahalli.</p>
              </div>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="bg-white/10 text-sky-400 p-1.5 rounded-lg"><MapPin size={16} /></div>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5">Address</div>
                    <div className="text-slate-400 text-[10px]">{CLINIC_INFO.address}</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="bg-white/10 text-sky-400 p-1.5 rounded-lg"><Clock size={16} /></div>
                  <div>
                    <div className="font-bold text-white text-sm mb-0.5">Clinic Hours</div>
                    <div className="text-slate-400 text-[10px]">{CLINIC_INFO.hours}</div>
                  </div>
                </div>
              </div>
              <div className="pt-1">
                <a 
                  href={CLINIC_INFO.googleMapsShareUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-600 text-white px-5 py-2.5 rounded-lg font-bold inline-flex items-center justify-center space-x-2 text-[11px] hover:bg-sky-700 transition-all shadow-lg shadow-sky-900/20"
                >
                  <MapPin size={16} />
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 h-[200px] lg:h-auto relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.375253818318!2d77.5350!3d12.90!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzAwLjAiTiA3N8KwMzInMDYuMCJF!5e0!3m2!1sen!2sin!4v1634567890123!5m2!1sen!2sin" 
                className="w-full h-full border-0 grayscale invert opacity-80 hover:grayscale-0 hover:invert-0 hover:opacity-100 transition-all duration-1000"
                loading="lazy"
                title="Google Maps Location"
              ></iframe>
              <a 
                href={CLINIC_INFO.googleMapsShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-white text-slate-900 px-4 py-2 rounded-full text-[10px] font-bold flex items-center space-x-1.5 shadow-2xl hover:bg-slate-100 transition-all"
              >
                <ExternalLink size={14} />
                <span>Open Maps</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
