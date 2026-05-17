import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Award, GraduationCap, Microscope, Users, BookOpen } from 'lucide-react';

interface AccordionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, icon, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 bg-sky-50 rounded-xl hover:bg-sky-100 transition-all border border-sky-100/50"
      >
        <div className="flex items-center space-x-3">
          <div className="text-sky-600">{icon}</div>
          <span className="text-base font-bold text-slate-800">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={18} className="text-slate-400" /> : <ChevronDown size={18} className="text-slate-400" />}
      </button>
      {isOpen && (
        <div className="p-4 bg-white border-x border-b border-sky-50 rounded-b-xl animate-in fade-in slide-in-from-top-2 duration-300">
          {children}
        </div>
      )}
    </div>
  );
};

const OurStaff: React.FC = () => {
  const doctors = [
    {
      name: "DR. MANOJ A G",
      role: "Consultant Physician & Specialist",
      image: "https://picsum.photos/seed/dr-manoj-staff/600/800",
      qualifications: [
        "MBBS - Mysore Medical College & Research Institute",
        "MD General Medicine - SDUMC under SDUAHER",
        "DNB General Medicine - NBE",
        "PGDGM (Geriatric Medicine) - IGNOU",
        "CCCDM (Diabetology)"
      ],
      achievements: [
        "Over 13 years of clinical excellence in internal medicine",
        "Recipient of the ICMR Thesis Grant for academic excellence",
        "Awarded Best Poster at national conferences (KAPICON & APICON)",
        "Gold Medalist in Paediatrics (MMCRI)",
        "Published multiple research papers with 15+ citations",
        "Best Outgoing Student (Cultural & Sports) – MMCRI",
        "Assistant Professor at ESIC MC PGIMSR, Rajajinagar"
      ],
      expertise: [
        "Diabetes management & metabolic disorders",
        "Hypertension and cardiovascular risk management",
        "Geriatric care (elderly health & chronic disease management)",
        "Infectious diseases (dengue, COVID-19, fever cases)",
        "Respiratory disorders (COPD, asthma)",
        "Acute & emergency medical care",
        "Preventive health check-ups & lifestyle disease management",
        "Comprehensive internal medicine consultation"
      ],
      memberships: [
        "Karnataka Medical Council (KMC Registration No: 98987)",
        "Association of Physicians of India (API)",
        "Indian Medical Association (IMA)"
      ],
      publications: [
        "Research papers in Geriatric Medicine",
        "Clinical studies on Diabetes management in elderly"
      ]
    },
    {
      name: "DR. PRIYANKA K M",
      role: "Chief Pathologist",
      image: "https://i.ibb.co/v4Z0v7vP/priyanka.jpg",
      qualifications: [
        "MBBS",
        "MD Pathology - BGSGIMS",
        "DNB Pathology"
      ],
      achievements: [
        "Expertise in advanced diagnostic pathology",
        "Dedicated to accurate and clinically correlated reporting"
      ],
      expertise: [
        "Advanced Cytology & FNAC Reporting",
        "Histopathology & Tissue Diagnosis",
        "Hematology with Peripheral Smear Expertise",
        "Clinical Correlation of Laboratory Findings",
        "Preventive & Diagnostic Health Screening",
        "Infection Diagnostics & Culture Interpretation"
      ],
      memberships: [
        "Karnataka Medical Council",
        "Relevant Pathology Associations"
      ],
      publications: [
        "Clinical case studies in Pathology",
        "Medical research contributions"
      ]
    },
    {
      name: "DR. CHANDRASHEKARA C M",
      role: "Consultant, Orthopaedic Surgery",
      image: "https://picsum.photos/seed/dr-chandrashekara/600/800",
      bio: "Dr. Chandrasheker is a highly esteemed Orthopaedic Surgeon with over 23 years of experience in the field. Recognized as one of the Best Orthopaedic Surgeons in Bangalore, he is renowned for his exceptional skill in managing complex orthopedic cases, particularly in hip and knee joint replacements. With a distinguished career spanning India, the Middle East, and the United Kingdom, Dr. Chandrasheker brings a wealth of knowledge and a global perspective to his practice. His commitment to patient care is matched by his dedication to staying at the forefront of orthopedic advancements, ensuring his patients receive the best possible outcomes.",
      qualifications: [
        "MBBS – Mysore Medical College",
        "D.Ortho – JJMMC, Davangere",
        "DNB.Ortho",
        "MRCS – Royal College of Surgeons, Edinburgh, UK",
        "FEBOT – Fellow of European Board of Orthopaedics and Traumatology, Switzerland",
        "FRCS (Tr & Ortho) – Intercollegiate Board, UK"
      ],
      achievements: [
        "23+ Years of Practice",
        "Recognized as one of the Best Orthopaedic Surgeons in Bangalore",
        "Extensive global experience across India, Middle East, and UK",
        "Expertise in complex hip and knee joint replacements",
        "Dedicated to staying at the forefront of orthopedic advancements"
      ],
      expertise: [
        "Orthopaedic Surgery",
        "Joint Replacement",
        "Arthroscopy",
        "Fracture Management",
        "Ligament injuries"
      ],
      memberships: [
        "Royal College of Surgeons of Edinburgh (RCSEd)",
        "European Board of Orthopaedics and Traumatology (EBOT)",
        "Indian Orthopaedic Association, India",
        "ISKSAA, India",
        "British orthopaedic Association, UK",
        "CAOS International, EU"
      ],
      publications: [
        "Subclavian artery and vein injury following clavicle fracture - Injury Extra 2009",
        "Comparison of early and delayed ACL reconstruction - JBJS 2010",
        "Neglected Foreign body in paediatric foot - JOCR 2013",
        "Popliteal Vein Thrombosis in paediatric patient - JOCR 2016",
        "Influence of BMI on Radiation Dose in Hip Injections - ABJS",
        "Outcome analysis of adult distal radius fractures during Covid-19 - JOCR 2023"
      ]
    }
  ];

  return (
    <div className="pt-16 pb-12 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900 text-center mb-10">Meet Our Expert Team</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {doctors.map((doctor, idx) => (
            <div key={idx} className="bg-white shadow-lg rounded-3xl overflow-hidden border border-slate-100 p-6 flex flex-col items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden mb-4 border-4 border-sky-100 shadow-inner">
                <img 
                  src={doctor.image} 
                  alt={doctor.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-xl font-bold text-slate-900 mb-0.5">{doctor.name}</h2>
              <p className="text-slate-500 font-medium mb-6 uppercase tracking-wider text-[10px]">{doctor.role}</p>

              <div className="w-full space-y-1.5">
                {doctor.bio && (
                  <Accordion title="Biography" icon={<BookOpen size={18} />}>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {doctor.bio}
                    </p>
                  </Accordion>
                )}
                <Accordion title="Education" icon={<GraduationCap size={18} />}>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 space-y-1">
                    {doctor.qualifications.map((q, i) => <li key={i}>{q}</li>)}
                  </ul>
                </Accordion>

                <Accordion title="Achievements" icon={<Award size={18} />}>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 space-y-1">
                    {doctor.achievements.map((a, i) => <li key={i}>{a}</li>)}
                  </ul>
                </Accordion>

                <Accordion title="Expertise" icon={<Microscope size={18} />}>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 space-y-1">
                    {doctor.expertise.map((e, i) => <li key={i}>{e}</li>)}
                  </ul>
                </Accordion>

                <Accordion title="Memberships" icon={<Users size={18} />}>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 space-y-1">
                    {doctor.memberships.map((m, i) => <li key={i}>{m}</li>)}
                  </ul>
                </Accordion>

                <Accordion title="Publications" icon={<BookOpen size={18} />}>
                  <ul className="list-disc list-inside text-[10px] text-slate-600 space-y-1">
                    {doctor.publications.map((p, i) => <li key={i}>{p}</li>)}
                  </ul>
                </Accordion>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurStaff;