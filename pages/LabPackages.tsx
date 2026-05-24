import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Search, 
  FlaskConical, 
  Check, 
  Plus, 
  Trash2, 
  ShoppingBag, 
  Calendar, 
  User, 
  Phone, 
  Mail, 
  MapPin, 
  CheckCircle2, 
  ShieldCheck, 
  X,
  AlertCircle,
  Activity,
  Microscope,
  Dna,
  Heart,
  Wind,
  Monitor,
  Package
} from 'lucide-react';
import { motion } from 'framer-motion';
import { CLINIC_INFO } from '../constants';

export const LAB_SPECTRUM = [
  {
    category: "Laboratory Investigations",
    icon: <Microscope size={20} className="text-sky-600" />,
    items: ["Complete Blood Count (CBC)", "Blood Sugar (FBS, PPBS, HbA1c)", "Lipid Profile", "Liver & Renal Function Tests", "Urine Analysis", "Electrolytes"]
  },
  {
    category: "Specialized & Hormonal Tests",
    icon: <Dna size={20} className="text-indigo-600" />,
    items: ["Thyroid Profile", "Hormonal Assays", "Vitamin B12 & D3", "Iron Studies", "Tumor Markers"]
  },
  {
    category: "Microbiology & Infectious Diseases",
    icon: <ShieldCheck size={20} className="text-emerald-600" />,
    items: ["Culture & Sensitivity", "Dengue, Malaria, Typhoid", "Tuberculosis testing", "Viral markers"]
  },
  {
    category: "Pathology Services",
    icon: <FlaskConical size={20} className="text-pink-600" />,
    items: ["FNAC (Fine Needle Aspiration)", "Cytology (Pap smear, fluids)", "Histopathology (Biopsy analysis)", "Slide review & second opinion"]
  },
  {
    category: "Cardiac Evaluation",
    icon: <Heart size={20} className="text-red-500" />,
    items: ["ECG (Electrocardiogram)", "2D Echo", "TMT (Treadmill Test)", "Cardiac Risk Markers"]
  },
  {
    category: "Pulmonary Function Testing",
    icon: <Wind size={20} className="text-cyan-600" />,
    items: ["PFT (Spirometry)", "Asthma & COPD assessment"]
  },
  {
    category: "Imaging Services",
    icon: <Monitor size={20} className="text-blue-600" />,
    items: ["Ultrasound (USG - Abdomen/Pelvis)", "Digital X-ray", "Basic diagnostic imaging"]
  },
  {
    category: "Preventive Health Checkups",
    icon: <Package size={20} className="text-amber-600" />,
    items: ["General Health Packages", "Executive Checkups", "Senior Citizen Packages", "Diabetes & Cardiac Packages"]
  }
];

export interface LabItem {
  id: string;
  name: string;
  category: 'package' | 'test';
  subcategory: string;
  price: number;
  description: string;
  testsIncluded?: string[];
  tag?: string;
  prepInstructions?: string;
}

const LAB_ITEMS: LabItem[] = [
  // HEALTH PACKAGES
  {
    id: 'pkg-physician-fitness',
    name: 'Physician Fitness Package',
    category: 'package',
    subcategory: 'Preventive Health',
    price: 1299,
    description: 'A comprehensive starter package curated by Dr. Manoj A G to evaluate overall health, metabolic function, and cardiac baseline.',
    tag: 'Doctor Curated',
    testsIncluded: [
      'Complete Blood Count (CBC)',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile (Cholesterol, HDL, LDL, Triglycerides)',
      'Electrocardiogram (ECG)',
      'Urine Routine & Microscopy',
      'Physician Consultation & Full Report Review'
    ],
    prepInstructions: 'Requires 8-10 hours of overnight fasting. Only plain water is allowed.'
  },
  {
    id: 'pkg-executive',
    name: 'Executive Health Checkup',
    category: 'package',
    subcategory: 'Comprehensive Care',
    price: 2499,
    description: 'A premium full-body screening designed to evaluate cardiac, liver, thyroid, kidney, and hematological health.',
    tag: 'Best Value',
    testsIncluded: [
      'Complete Blood Count (CBC) with ESR',
      'Diabetes Screen (Fasting, Post-Prandial, HbA1c)',
      'Thyroid Profile (T3, T4, TSH)',
      'Liver Function Test (LFT - 11 parameters)',
      'Kidney Function Test (KFT - Urea, Creatinine, Uric Acid)',
      'Lipid Profile (Complete Cholesterols)',
      'Urine Routine & Analysis',
      'Cardiology Evaluation (ECG)'
    ],
    prepInstructions: 'Requires strict 10-12 hours of overnight fasting.'
  },
  {
    id: 'pkg-senior-citizen',
    name: 'Comprehensive Senior Citizen Package',
    category: 'package',
    subcategory: 'Elderly & Geriatric',
    price: 1999,
    description: 'Tailored package for elderly patients to monitor joint health, bone strength, organ reserves, and geriatric wellness guidelines.',
    tag: 'Senior Wellness',
    testsIncluded: [
      'Complete Blood Count (CBC)',
      'HbA1c (3-Month Glycated Glucose)',
      'Kidney Function Test (Creatinine, Urea)',
      'Uric Acid (Gout assessment)',
      'Lipid Profile (Cardiovascular Risk)',
      'Liver Enzymes (SGOT, SGPT)',
      'Bone Health Markers (Serum Calcium)',
      'Vitamin D3 Level',
      'Urine Analysis',
      'ECG (Electrocardiography)'
    ],
    prepInstructions: 'Fasting of 10 hours required. Bring any daily medications.'
  },
  {
    id: 'pkg-diabetes-cardiac',
    name: 'Diabetes & Cardiac Risk Package',
    category: 'package',
    subcategory: 'Specialized Metabolic',
    price: 1899,
    description: 'Specially targeting individuals with a family history or diagnosed conditions of high BP, diabetes, or chest issues.',
    tag: 'Top Requested',
    testsIncluded: [
      'HbA1c (Average Blood Glucose)',
      'Fasting Blood Sugar (FBS)',
      'Lipid Profile (Complete Lipid Panel)',
      'ECG (Electrocardiography)',
      'Renal Screen (Serum Creatinine)',
      'Microalbumin (Early stage kidney wear detection)',
      'Detailed Blood Pressure & Cardiac risk charting'
    ],
    prepInstructions: '10-12 hours strict fasting. Take usual morning BP pills only with a sip of water.'
  },
  {
    id: 'pkg-women-wellness',
    name: 'Women’s Wellness Package',
    category: 'package',
    subcategory: 'Preventive Health',
    price: 1799,
    description: 'Specifically curated for womens endocrine, bone health, blood parameters, and screening needs.',
    tag: 'Women’s Health',
    testsIncluded: [
      'Complete Blood Count (CBC) & Haemoglobin',
      'Thyroid Profile (TSH)',
      'Random Blood Sugar (RBS)',
      'Urine Routine & Culture',
      'Iron Studies (Anemia Profile)',
      'Bone Markers (Serum Calcium)',
      'Vitamin D3 Assessment'
    ],
    prepInstructions: 'Fasting is optional but recommended.'
  },

  // INDIVIDUAL INVESTIGATIONS
  {
    id: 'test-cbc',
    name: 'Complete Blood Count (CBC)',
    category: 'test',
    subcategory: 'Blood Pathology',
    price: 299,
    description: 'Analyzes Red Blood Cells (RBC), White Blood Cells (WBC), Platelets, Haemoglobin levels, and detects anemia or infections.',
    prepInstructions: 'No fasting required. Can be done anytime.'
  },
  {
    id: 'test-hba1c',
    name: 'HbA1c (Glycated Haemoglobin)',
    category: 'test',
    subcategory: 'Diabetes Screen',
    price: 349,
    description: 'Gold standard measure of your average blood glucose levels over the past 3 months. Essential for diabetes tracking.',
    prepInstructions: 'No fasting required.'
  },
  {
    id: 'test-thyroid',
    name: 'Thyroid Profile (T3, T4, TSH)',
    category: 'test',
    subcategory: 'Hormonal Test',
    price: 499,
    description: 'Assesses thyroid gland activity. Helps detect hypothyroidism, hyperthyroidism, and metabolic speed issues.',
    prepInstructions: 'Morning sample preferred. Fasting is of benefit but not strict.'
  },
  {
    id: 'test-lipid',
    name: 'Lipid Profile (Cholesterol Panel)',
    category: 'test',
    subcategory: 'Biochemistry / Cardiac',
    price: 449,
    description: 'Tests Total Cholesterol, HDL (good), LDL (bad), and Triglycerides to check cardiovascular risk.',
    prepInstructions: 'Requires strict 10-12 hours fasting. Avoid drinking alcohol 24 hours prior.'
  },
  {
    id: 'test-kft',
    name: 'Kidney Function Test (KFT/RFT)',
    category: 'test',
    subcategory: 'Biochemistry',
    price: 549,
    description: 'Measures Blood Urea, Serum Creatinine, Uric Acid, and Electrolytes to check overall kidney health.',
    prepInstructions: 'No fasting required.'
  },
  {
    id: 'test-lft',
    name: 'Liver Function Test (LFT)',
    category: 'test',
    subcategory: 'Biochemistry',
    price: 599,
    description: 'Measures Bilirubin, SGOT, SGPT, Alkaline Phosphatase, and Albumin to check liver performance & health.',
    prepInstructions: 'Fasting of 8 hours recommended.'
  },
  {
    id: 'test-ecg',
    name: 'ECG (Electrocardiogram)',
    category: 'test',
    subcategory: 'Cardiac Evaluation',
    price: 250,
    description: 'Records electrical pathways of the heart to diagnose rhythm issues, muscle strain, or early cardiac warnings.',
    prepInstructions: 'Wear comfortable loose clothing. Walk-in at clinic facility.'
  },
  {
    id: 'test-tmt',
    name: 'TMT (Treadmill Test)',
    category: 'test',
    subcategory: 'Cardiac Evaluation',
    price: 999,
    description: 'Stress ECG performed under progressive physical exertion to detect coronary artery disease risks.',
    prepInstructions: 'Wear running shoes/sports clothes. Limit caffeine intake for 12 hours before test.'
  },
  {
    id: 'test-usg-abdomen',
    name: 'Ultrasound (USG) - Abdomen & Pelvis',
    category: 'test',
    subcategory: 'Imaging Services',
    price: 1199,
    description: 'In-depth diagnostic sound wave scan of liver, gall bladder, kidneys, pancreas, spleen, and pelvic organs.',
    prepInstructions: 'Fasting of 6 hours required. Drink 4-5 glasses of water 1hr prior to the scan; do not empty bladder.'
  },
  {
    id: 'test-vitamin-d3-b12',
    name: 'Vitamin D3 & B12 Duo Pack',
    category: 'test',
    subcategory: 'Specialized Hormonal',
    price: 899,
    description: 'Measures neuro-joint health elements. Deficiencies are highly common and cause fatigue, joint pains, and nerve wear.',
    prepInstructions: 'No fasting required.'
  },
  {
    id: 'test-urine',
    name: 'Urine Routine & Microscopy',
    category: 'test',
    subcategory: 'Pathology Services',
    price: 199,
    description: 'Urine screening to detect urinary tract infections (UTIs), kidney filtration issues, or early diabetes indicators.',
    prepInstructions: 'First morning mid-stream urine sample is ideal but random sample is accepted.'
  }
];

interface BookingReceipt {
  appointmentId: string;
  patientName: string;
  phone: string;
  email: string;
  date: string;
  slot: string;
  serviceMode: 'walkin' | 'home';
  address: string;
  items: LabItem[];
  total: number;
  timestamp: string;
  instructions?: string;
}

const constructWhatsAppMessage = (booking: BookingReceipt) => {
  const itemsListText = booking.items
    .map((item) => `- ${item.name} (₹${item.price.toLocaleString('en-IN')})`)
    .join('\n');
    
  const text = `Hello Neela Healthcare & Diagnostics,

I would like to book a laboratory diagnostics appointment:

📝 *Booking ID:* ${booking.appointmentId}
👤 *Patient Name:* ${booking.patientName}
📞 *Mobile:* ${booking.phone}
${booking.email ? `📧 *Email:* ${booking.email}\n` : ''}📅 *Appointment Date:* ${booking.date}
⏰ *Time Slot:* ${booking.slot}
📍 *Preference:* ${booking.serviceMode === 'home' ? '🏠 Home Sample Collection' : '🏢 Clinic Walk-In'}
${booking.serviceMode === 'home' ? `📌 *Collection Address:* ${booking.address}\n` : ''}${booking.instructions ? `💬 *Instructions:* ${booking.instructions}\n` : ''}
🧪 *Selected Test(s) / Package(s):*
${itemsListText}

💰 *Total Amount Payable:* ₹${booking.total.toLocaleString('en-IN')}

Kindly review and confirm my booking request. Thank you!`;

  return encodeURIComponent(text);
};

const LabPackages: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'package' | 'test'>('all');
  const [cart, setCart] = useState<LabItem[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<BookingReceipt | null>(null);
  
  // Checkout Form State
  const [patientName, setPatientName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [slot, setSlot] = useState('08:00 AM - 11:00 AM');
  const [serviceMode, setServiceMode] = useState<'walkin' | 'home'>('walkin');
  const [address, setAddress] = useState('');
  const [instructions, setInstructions] = useState('');
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  // Sync cart from LocalStorage on mount
  useEffect(() => {
    const storedCart = localStorage.getItem('neela_lab_cart');
    if (storedCart) {
      try {
        setCart(JSON.parse(storedCart));
      } catch (e) {
        console.error("Failed to parse cart storage", e);
      }
    }
  }, []);

  const saveCartToStorage = (updatedCart: LabItem[]) => {
    setCart(updatedCart);
    localStorage.setItem('neela_lab_cart', JSON.stringify(updatedCart));
  };

  const handleAddToCart = (item: LabItem) => {
    if (cart.some(cartItem => cartItem.id === item.id)) {
      return; // Already added
    }
    const updated = [...cart, item];
    saveCartToStorage(updated);
  };

  const handleRemoveFromCart = (itemId: string) => {
    const updated = cart.filter(item => item.id !== itemId);
    saveCartToStorage(updated);
  };

  const handleClearCart = () => {
    saveCartToStorage([]);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate Form
    const errors: Record<string, string> = {};
    if (!patientName.trim()) errors.patientName = 'Patient list name is required';
    if (!phone.match(/^\d{10}$/)) errors.phone = 'Please enter a valid 10-digit phone number';
    if (!date) errors.date = 'Appointment date is required';
    if (serviceMode === 'home' && !address.trim()) errors.address = 'Home collection address is required';

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});

    // Generate appointment code
    const appointmentId = `NL-${Math.floor(100000 + Math.random() * 900000)}`;

    const booking = {
      appointmentId,
      patientName,
      phone,
      email,
      date,
      slot,
      serviceMode,
      address: serviceMode === 'home' ? address : CLINIC_INFO.address,
      items: [...cart],
      total: totalCost,
      timestamp: new Date().toLocaleString(),
      instructions
    };

    setBookingDetails(booking);
    setIsSubmitted(true);
    
    // Auto-redirect to WhatsApp
    const whatsappUrl = `https://wa.me/91${CLINIC_INFO.phone}?text=${constructWhatsAppMessage(booking)}`;
    try {
      window.open(whatsappUrl, '_blank');
    } catch (err) {
      console.warn("Direct pop-up blocked by browser sandbox", err);
    }

    // Clear cart both in State and LocalStorage
    saveCartToStorage([]);
  };

  // Cost calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
  const homeCollectionFee = serviceMode === 'home' ? 150 : 0;
  const totalCost = subtotal + homeCollectionFee;

  // Filter items
  const filteredItems = LAB_ITEMS.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          item.subcategory.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Check if fasting is required for any cart items
  const isFastingRequired = cart.some(item => 
    item.prepInstructions?.toLowerCase().includes('fasting') || 
    item.testsIncluded?.some(t => t.toLowerCase().includes('fasting'))
  );

  return (
    <div className="pt-20 pb-16 bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Back Link & Header */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <Link to="/services" className="inline-flex items-center space-x-2 text-slate-500 hover:text-sky-600 font-semibold text-xs transition-colors">
            <ArrowLeft size={16} />
            <span>Back to Services</span>
          </Link>
          <div className="flex items-center space-x-2 bg-emerald-100/80 text-emerald-800 px-3 py-1 rounded-full text-[11px] font-bold border border-emerald-200">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>Pathologist & Physician-Led Diagnostics Now Live</span>
          </div>
        </div>

        {!isSubmitted ? (
          <div>
            {/* Main Page Title */}
            <div className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-100 mb-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/20 rounded-full blur-3xl"></div>
              <div className="relative z-10 max-w-3xl">
                <h1 className="text-2xl md:text-4xl font-black text-slate-900 leading-tight mb-2">
                  Diagnostic Lab & Health Packages
                </h1>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Book premium health checkups and individual laboratory investigations designed by clinical MD & DNB specialists. Opt for a highly convenient <span className="font-bold text-sky-600">Home Sample Collection</span> or visit our modern clinic centre.
                </p>
              </div>
            </div>

            {/* Main Interactive Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* Left Column: Listings & Filters (Span 2) */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* Search & Category Tabs */}
                <div className="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
                  {/* Category Buttons */}
                  <div className="flex bg-slate-100 p-1 rounded-xl w-full sm:w-auto shrink-0">
                    {([
                      { id: 'all', name: 'All Services' },
                      { id: 'package', name: 'Health Packages' },
                      { id: 'test', name: 'Individual Tests' }
                    ] as const).map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveCategory(tab.id)}
                        className={`flex-1 sm:flex-initial text-xs font-bold px-3 py-2 rounded-lg transition-all ${activeCategory === tab.id ? 'bg-white text-sky-600 shadow-sm' : 'text-slate-500 hover:text-slate-900'}`}
                      >
                        {tab.name}
                      </button>
                    ))}
                  </div>

                  {/* Search Bar */}
                  <div className="relative w-full">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                      <Search size={16} />
                    </span>
                    <input
                      type="text"
                      placeholder="Search investigations, packages, lipid profiles..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-slate-50 rounded-xl pl-9 pr-4 py-2.5 text-xs text-slate-800 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                    />
                    {searchTerm && (
                      <button 
                        onClick={() => setSearchTerm('')} 
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-slate-400 hover:text-slate-600"
                        title="Clear Search"
                      >
                        <X size={14} />
                      </button>
                    )}
                  </div>
                </div>

                {/* Items List */}
                <div className="space-y-4">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => {
                      const isInCart = cart.some(cartItem => cartItem.id === item.id);
                      return (
                        <div 
                          key={item.id} 
                          id={item.id}
                          className={`bg-white rounded-2xl p-5 md:p-6 border border-slate-100 transition-all hover:shadow-md relative overflow-hidden ${isInCart ? 'ring-2 ring-sky-500/30' : ''}`}
                        >
                          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                            <div className="space-y-2 flex-grow">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${item.category === 'package' ? 'bg-sky-100 text-sky-800' : 'bg-emerald-100 text-emerald-800'}`}>
                                  {item.category === 'package' ? 'Health Package' : 'Individual Test'}
                                </span>
                                <span className="text-[10px] text-slate-400 font-bold tracking-tight">
                                  {item.subcategory}
                                </span>
                                {item.tag && (
                                  <span className="bg-amber-100 text-amber-900 border border-amber-200 text-[9px] font-bold px-1.5 py-0.5 rounded">
                                    {item.tag}
                                  </span>
                                )}
                              </div>
                              
                              <h3 className="text-base md:text-lg font-black text-slate-900 leading-tight">
                                {item.name}
                              </h3>
                              
                              <p className="text-xs text-slate-500 leading-relaxed max-w-2xl">
                                {item.description}
                              </p>

                              {/* Included Tests List for Packages */}
                              {item.testsIncluded && (
                                <div className="mt-3 pt-3 border-t border-slate-50">
                                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1.5">Includes {item.testsIncluded.length} investigations:</span>
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1">
                                    {item.testsIncluded.map((test, index) => (
                                      <div key={index} className="flex items-center space-x-1.5 text-xs text-slate-700">
                                        <CheckCircle2 size={12} className="text-sky-500 shrink-0" />
                                        <span className="truncate">{test}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              )}

                              {/* Prep notes */}
                              {item.prepInstructions && (
                                <div className="flex items-start space-x-1.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100 text-[10px] text-slate-600 mt-2">
                                  <AlertCircle size={12} className="text-amber-500 shrink-0 mt-0.5" />
                                  <span><span className="font-bold underline">Prep:</span> {item.prepInstructions}</span>
                                </div>
                              )}
                            </div>

                            {/* Price / Booking Action Column */}
                            <div className="sm:text-right shrink-0 flex sm:flex-col justify-between sm:justify-center items-center gap-3 sm:border-l sm:border-slate-100 sm:pl-6 sm:min-w-40 bg-slate-50 sm:bg-transparent -mx-5 -mb-5 sm:mx-0 sm:mb-0 p-3 sm:p-0 rounded-b-2xl sm:rounded-none">
                              <div>
                                <span className="text-xs text-slate-400 block sm:mb-0.5">Price</span>
                                <span className="text-xl md:text-2xl font-black text-slate-900">₹{item.price.toLocaleString('en-IN')}</span>
                              </div>
                              
                              {isInCart ? (
                                <button 
                                  onClick={() => handleRemoveFromCart(item.id)}
                                  className="bg-sky-50 text-sky-600 border border-sky-200 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 hover:bg-red-50 hover:text-red-600 hover:border-red-200 transition-colors w-full sm:w-auto justify-center"
                                  title="Remove from booking list"
                                >
                                  <Check size={14} />
                                  <span>Selected</span>
                                </button>
                              ) : (
                                <button 
                                  onClick={() => handleAddToCart(item)}
                                  className="bg-sky-600 text-white hover:bg-sky-700 px-4 py-2 rounded-xl text-xs font-bold flex items-center space-x-1 transition-all hover:scale-[1.02] w-full sm:w-auto justify-center shadow-sm"
                                >
                                  <Plus size={14} />
                                  <span>Add To Booking</span>
                                </button>
                              )}
                            </div>

                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="bg-white rounded-3xl p-12 border border-slate-100 text-center">
                      <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto mb-4">
                        <FlaskConical size={28} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-800 mb-1">No services found</h3>
                      <p className="text-slate-500 text-xs max-w-sm mx-auto leading-relaxed">
                        We could not find any package or test matching &quot;{searchTerm}&quot;. Try refining your keyword search.
                      </p>
                    </div>
                  )}
                </div>

              </div>
              
              {/* Right Column: Checkout Cart Panel (Span 1) */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-6 sticky top-24 space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                    <div className="flex items-center space-x-2">
                      <ShoppingBag size={20} className="text-sky-600" />
                      <h2 className="text-lg font-black text-slate-900">Your Booking Box</h2>
                    </div>
                    {cart.length > 0 && (
                      <button 
                        onClick={handleClearCart}
                        className="text-xs text-red-500 hover:text-red-700 font-bold hover:underline py-1 px-2 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        Clear All
                      </button>
                    )}
                  </div>

                  {cart.length > 0 ? (
                    <div className="space-y-6">
                      
                      {/* Cart Items List */}
                      <div className="space-y-3 max-h-48 overflow-y-auto pr-1">
                        {cart.map((cartItem) => (
                          <div key={cartItem.id} className="flex justify-between items-center text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100/50">
                            <div className="pr-2 truncate">
                              <p className="font-bold text-slate-800 truncate">{cartItem.name}</p>
                              <p className="text-[10px] text-slate-400">{cartItem.subcategory}</p>
                            </div>
                            <div className="flex items-center space-x-2 shrink-0">
                              <span className="font-bold text-slate-900">₹{cartItem.price}</span>
                              <button 
                                onClick={() => handleRemoveFromCart(cartItem.id)}
                                className="text-slate-400 hover:text-red-500 p-1 rounded-md hover:bg-white transition-colors"
                                title="Remove item"
                              >
                                <Trash2 size={13} />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Fasting Notice Banner */}
                      {isFastingRequired && (
                        <div className="bg-amber-50 text-amber-800 p-3 rounded-xl border border-amber-100 text-[11px] flex items-start space-x-2">
                          <AlertCircle size={15} className="text-amber-500 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-bold">Fasting Check:</span> Overnight fasting of 10-12 hours is recommended for blood sugar, lipids, or health packages in your cart. Drink water freely.
                          </div>
                        </div>
                      )}

                      {/* Service Mode Preference */}
                      <div className="space-y-2 border-t border-slate-100 pt-4">
                        <label className="text-[11px] font-black text-slate-400 uppercase tracking-wider block">Service Preference</label>
                        <div className="grid grid-cols-2 gap-2">
                          <button
                            type="button"
                            onClick={() => setServiceMode('walkin')}
                            className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1.5 transition-all ${serviceMode === 'walkin' ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-500/20' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                          >
                            <MapPin size={16} />
                            <span>Clinic Walk-In</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              setServiceMode('home');
                              if (formErrors.address) {
                                const e = { ...formErrors };
                                delete e.address;
                                setFormErrors(e);
                              }
                            }}
                            className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center justify-center space-y-1.5 transition-all ${serviceMode === 'home' ? 'border-sky-500 bg-sky-50 text-sky-700 ring-2 ring-sky-500/20' : 'border-slate-200 text-slate-600 hover:bg-slate-50'}`}
                          >
                            <FlaskConical size={16} />
                            <span>Home Collection</span>
                          </button>
                        </div>
                      </div>

                      {/* Pricing Summary */}
                      <div className="border-t border-slate-100 pt-4 space-y-1.5 text-xs text-slate-600">
                        <div className="flex justify-between">
                          <span>Selected Test(s) Subtotal</span>
                          <span className="font-bold text-slate-900">₹{subtotal.toLocaleString('en-IN')}</span>
                        </div>
                        {serviceMode === 'home' && (
                          <div className="flex justify-between">
                            <span>Home Sample Collection Fee</span>
                            <span className="font-bold text-slate-900">₹150</span>
                          </div>
                        )}
                        <div className="flex justify-between border-t border-slate-100 pt-2 text-sm font-black text-slate-900">
                          <span>Total Estimated Cost</span>
                          <span>₹{totalCost.toLocaleString('en-IN')}</span>
                        </div>
                      </div>

                      {/* Checkout Booking Form */}
                      <form onSubmit={handleBookingSubmit} className="space-y-4 border-t border-slate-100 pt-4">
                        <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest">Patient Appointment form</h3>
                        
                        {/* Name Input */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">Patient Name *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                              <User size={14} />
                            </span>
                            <input
                              type="text"
                              required
                              placeholder="e.g. Ramesh Kumar"
                              value={patientName}
                              onChange={(e) => setPatientName(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                            />
                          </div>
                          {formErrors.patientName && (
                            <p className="text-[10px] text-red-500 mt-1 font-bold">{formErrors.patientName}</p>
                          )}
                        </div>

                        {/* Phone Input */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">Mobile number *</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                              <Phone size={14} />
                            </span>
                            <input
                              type="tel"
                              required
                              maxLength={10}
                              placeholder="10-digit mobile number"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                            />
                          </div>
                          {formErrors.phone && (
                            <p className="text-[10px] text-red-500 mt-1 font-bold">{formErrors.phone}</p>
                          )}
                        </div>

                        {/* Email Input */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">Email address (Optional)</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                              <Mail size={14} />
                            </span>
                            <input
                              type="email"
                              placeholder="name@example.com"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                            />
                          </div>
                        </div>

                        {/* Date & Time Slot Row */}
                        <div className="grid grid-cols-2 gap-2">
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">Booking Date *</label>
                            <input
                              type="date"
                              required
                              min={new Date().toISOString().split('T')[0]}
                              value={date}
                              onChange={(e) => setDate(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white font-sans"
                            />
                            {formErrors.date && (
                              <p className="text-[10px] text-red-500 mt-1 font-bold">{formErrors.date}</p>
                            )}
                          </div>
                          <div>
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">Time Slot *</label>
                            <select
                              value={slot}
                              onChange={(e) => setSlot(e.target.value)}
                              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-2 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                            >
                              <option>08:00 AM - 11:00 AM</option>
                              <option>11:00 AM - 02:00 PM</option>
                              <option>02:00 PM - 05:00 PM</option>
                              <option>05:00 PM - 08:00 PM</option>
                            </select>
                          </div>
                        </div>

                        {/* Home Collection Address */}
                        {serviceMode === 'home' && (
                          <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            className="space-y-1"
                          >
                            <label className="block text-[11px] font-bold text-slate-600 mb-1">Full Delivery Address *</label>
                            <div className="relative">
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400">
                                <MapPin size={14} />
                              </span>
                              <textarea
                                required
                                rows={2}
                                placeholder="Enter your full home or office address..."
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-200 rounded-xl pl-8 pr-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                              />
                            </div>
                            {formErrors.address && (
                              <p className="text-[10px] text-red-500 mt-1 font-bold">{formErrors.address}</p>
                            )}
                          </motion.div>
                        )}

                        {/* Addon instruction */}
                        <div>
                          <label className="block text-[11px] font-bold text-slate-600 mb-1">Additional Instructions (Optional)</label>
                          <textarea
                            rows={2}
                            placeholder="e.g., Any prior medical condition, call before reaching, etc."
                            value={instructions}
                            onChange={(e) => setInstructions(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                          />
                        </div>

                        {/* Submit button */}
                        <button
                          type="submit"
                          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-xl font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-[0.98]"
                        >
                          <Activity size={16} className="shrink-0" />
                          <span>Book & Confirm on WhatsApp</span>
                        </button>
                        
                        <p className="text-[10px] text-slate-400 text-center">
                          Secured request. We will pre-fill your WhatsApp message. Simply send it to complete your booking! No pre-payment required.
                        </p>
                      </form>

                    </div>
                  ) : (
                    <div className="text-center py-10 space-y-3">
                      <div className="w-12 h-12 bg-slate-50 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                        <ShoppingBag size={20} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-700">Your Booking Box is empty</p>
                        <p className="text-[10px] text-slate-400 max-w-[200px] mx-auto leading-relaxed mt-1">
                          Browse our health packages or list of individual investigations on the left to add items.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

            </div>

            {/* Advanced Diagnostic & Specialist Investigations Spectrum */}
            <div className="mt-16 bg-slate-900 rounded-3xl p-6 md:p-10 text-white relative overflow-hidden shadow-xl">
              <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-500/5 -skew-x-12 translate-x-1/4 pointer-events-none"></div>
              
              <div className="relative z-10">
                <div className="max-w-3xl mb-10">
                  <span className="text-sky-400 font-extrabold tracking-widest uppercase text-[10px] bg-sky-500/10 px-2.5 py-1 rounded-full border border-sky-500/20">
                    Clinical Excellence & Precision
                  </span>
                  <h2 className="text-2xl md:text-3xl font-black mt-3 mb-2 text-white">
                    Our Complete Diagnostics & Pathology Spectrum
                  </h2>
                  <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                    In addition to our key health packages, Neela Healthcare offers a comprehensive suite of specialist diagnostic services. Run under strict clinical supervision of MD Pathology and DNB internal medicine specialists, getting you correct and reliable reports.
                  </p>
                </div>

                {/* Grid of All categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {LAB_SPECTRUM.map((section, idx) => (
                    <div key={idx} className="bg-white/5 backdrop-blur-sm p-5 rounded-2xl border border-white/10 hover:bg-white/10 transition-all hover:border-sky-500/40 group">
                      <div className="mb-3 flex items-center justify-between">
                        <div className="bg-white/10 p-2.5 rounded-xl group-hover:scale-110 transition-transform">
                          {section.icon}
                        </div>
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest bg-white/5 px-2 py-0.5 rounded">
                          Verified
                        </span>
                      </div>
                      <h3 className="text-sm font-black mb-3 text-white tracking-tight border-b border-white/10 pb-1.5">{section.category}</h3>
                      <ul className="space-y-1.5">
                        {section.items.map((item, i) => (
                          <li key={i} className="flex items-start space-x-1.5 text-xs text-slate-300">
                            <div className="mt-1.5 w-1  h-1 bg-sky-400 rounded-full shrink-0"></div>
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-400">
                  <div className="flex items-start space-x-2">
                    <div className="bg-sky-500/20 p-1.5 rounded-lg text-sky-400 shrink-0"><Activity size={16} /></div>
                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wide">Doctor-Integrated Correlation</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">All diagnostic findings are clinically cross-referenced with your active symptoms by internal medicine experts.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-emerald-500/20 p-1.5 rounded-lg text-emerald-400 shrink-0"><ShieldCheck size={16} /></div>
                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wide">Quality Assured</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">High precision analyzer machines, fully integrated control checks, and professional pathologists verify every sample.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="bg-amber-500/20 p-1.5 rounded-lg text-amber-500 shrink-0"><AlertCircle size={16} /></div>
                    <div>
                      <h4 className="font-extrabold text-white text-[11px] uppercase tracking-wide">Home Collection Support</h4>
                      <p className="text-[10px] text-slate-400 mt-0.5 leading-relaxed">Need any test that is not listed in individual checkouts? Reach our coordinators to add any specific requisition directly.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        ) : (
          /* Confirmation Success Screen */
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto bg-white rounded-3xl border border-slate-100 shadow-xl p-6 md:p-10 text-center space-y-6"
          >
            {/* Green Check Animation Wrapper */}
            <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto text-3xl shadow-inner">
              <CheckCircle2 size={44} className="animate-bounce" />
            </div>

            <div className="space-y-2">
              <span className="bg-emerald-100 text-emerald-800 border border-emerald-200 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full">
                Booking Registered Successfully
              </span>
              <h2 className="text-2xl md:text-3xl font-black text-slate-900">
                Your Appointment is Scheduled!
              </h2>
              <p className="text-xs text-slate-500">
                A request has been recorded. Our medical representative is reviewing your requirements and will reach out shortly for confirmation.
              </p>
            </div>

            {/* Structured Card Receipt */}
            <div className="bg-slate-50 rounded-2xl border border-slate-200/60 p-5 text-left text-xs space-y-4">
              <div className="flex justify-between items-center pb-2 border-b border-slate-200">
                <span className="font-bold text-slate-800 uppercase tracking-widest text-[10px]">Booking Specs</span>
                <span className="font-bold text-sky-600 font-mono tracking-tight text-sm">
                  {bookingDetails?.appointmentId}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] text-slate-600">
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Patient Name</span>
                  <span className="font-bold text-slate-800 text-xs">{bookingDetails?.patientName}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Mobile Number</span>
                  <span className="font-bold text-slate-800 text-xs">{bookingDetails?.phone}</span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Date & Time Slot</span>
                  <span className="font-bold text-slate-800 text-xs flex items-center space-x-1">
                    <Calendar size={12} className="text-slate-400 mr-0.5" />
                    <span>{bookingDetails?.date}  |  {bookingDetails?.slot}</span>
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Service Mode</span>
                  <span className="font-bold text-emerald-600 text-xs capitalize">
                    {bookingDetails?.serviceMode === 'home' ? 'Home Sample Collection' : 'Clinic Walk-In'}
                  </span>
                </div>
              </div>

              {/* Items Summary list */}
              <div className="border-t border-slate-200 pt-3">
                <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold mb-1.5">Selected Items ({bookingDetails?.items.length})</span>
                <div className="space-y-1.5 max-h-36 overflow-y-auto">
                  {bookingDetails?.items.map((item: LabItem) => (
                    <div key={item.id} className="flex justify-between text-slate-700 bg-white/60 p-2 rounded-lg border border-slate-200/30">
                      <span>{item.name}</span>
                      <span className="font-bold">₹{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Address */}
              <div className="border-t border-slate-200 pt-3">
                <span className="text-slate-400 block uppercase tracking-wider text-[9px] font-bold">Location Details</span>
                <span className="text-[11px] text-slate-600 block mt-0.5 leading-relaxed">
                  {bookingDetails?.address}
                </span>
              </div>

              {/* Total Payable Summary */}
              <div className="border-t border-slate-200 pt-3 flex justify-between items-center text-sm font-black text-slate-900">
                <span>Total Amount Due (At walk-in or collection)</span>
                <span className="text-lg text-sky-600">₹{bookingDetails?.total.toLocaleString('en-IN')}</span>
              </div>
            </div>

            {/* Medical Prep Guides */}
            <div className="bg-amber-50 rounded-2xl border border-amber-200/50 p-4 text-left text-xs text-amber-900 space-y-2">
              <div className="flex items-center space-x-1.5 font-bold">
                <ShieldCheck size={16} className="text-amber-600 shrink-0" />
                <span>Important Medical Preparation Steps:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-amber-800 text-[11px]">
                {bookingDetails?.items.some((item: LabItem) => item.prepInstructions?.toLowerCase().includes('fasting')) && (
                  <li><strong>Fasting Notice:</strong> Please fast overnight (8 to 12 hours) prior to appointment time. Water is allowed during fast. Avoid coffee, tea, and tobacco.</li>
                )}
                {bookingDetails?.items.some((item: LabItem) => item.id.toLowerCase().includes('usg') || item.name.toLowerCase().includes('ultrasound')) && (
                  <li><strong>USG Preparation:</strong> Drink 4-5 glasses of water 1 hour before scheduled time scan. Please do not empty or pass urine before the search, a full bladder is required.</li>
                )}
                <li>Keep details of previous diagnostics or consultations handy.</li>
                <li>Reach out to our coordinators at any time at <strong>+91 {CLINIC_INFO.phone}</strong> for instant assistance.</li>
              </ul>
            </div>

            {/* Post booking buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
              <button
                onClick={() => {
                  setPatientName('');
                  setPhone('');
                  setEmail('');
                  setDate('');
                  setAddress('');
                  setInstructions('');
                  setIsSubmitted(false);
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold px-6 py-3 rounded-xl text-xs transition-colors"
              >
                Book Another Health Package
              </button>
              
              <a
                href={`https://wa.me/91${CLINIC_INFO.phone}?text=${bookingDetails ? constructWhatsAppMessage(bookingDetails) : ''}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-[0.98]"
              >
                <Activity size={16} />
                <span>Notify Clinic via WhatsApp</span>
              </a>
            </div>

          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LabPackages;
