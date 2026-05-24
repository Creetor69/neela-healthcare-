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
      bio: "Dr. Manoj A G is a highly distinguished Consultant Physician and Internal Medicine Specialist with over 13 years of stellar clinical experience. He excels in managing complex metabolic disorders, particularly Diabetes and Hypertension, and is highly recognized for his advanced specialized expertise in Geriatric Care and Diabetology. Currently serving as an Associate Professor of General Medicine at PESUIMSR, he has also served as an Assistant Professor at ESIC MC PGIMSR. Dr. Manoj combines extensive academic research, with multiple indexed publications and ICMR grants, with a compassionate, patient-first approach to delivering comprehensive adult healthcare.",
      qualifications: [
        "MBBS - Mysore Medical College & Research Institute",
        "MD General Medicine - SDUMC under SDUAHER",
        "DNB General Medicine - NBE",
        "PGDGM (Geriatric Medicine) - IGNOU",
        "CCCDM (Diabetology)"
      ],
      achievements: [
        "Over 13 years of clinical excellence in internal medicine",
        "Associate Professor of General Medicine in PESUIMSR",
        "Former Assistant Professor at ESIC MC PGIMSR, Rajajinagar",
        "Recipient of the ICMR Thesis Grant for academic excellence",
        "Awarded Best Poster at national conferences (KAPICON & APICON)",
        "Gold Medalist in Paediatrics (MMCRI)",
        "Published multiple research papers with 15+ citations",
        "Best Outgoing Student (Cultural & Sports) – MMCRI"
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
        "Indian Medical Association (IMA)",
        "Indian Academy of Geriatrics"
      ],
      publications: [
        "Research papers in Geriatric Medicine",
        "Clinical studies on Diabetes management in elderly"
      ]
    },
    {
      name: "DR. PRIYANKA K M",
      role: "Consultant Pathologist",
      image: "https://i.ibb.co/v4Z0v7vP/priyanka.jpg",
      bio: "Dr. Priyanka K M is a highly skilled Consultant Pathologist with deep expertise in advanced diagnostic pathology, including cytology, histopathology, and comprehensive hematology analysis. Holding double board certifications with an MD from BGSGIMS and a DNB in Pathology, she is dedicated to providing high-precision, clinically correlated laboratory insights. Her commitment to quality and diagnostic precision plays a critical role in guiding accurate patient care, screening, and treatment pathways.",
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
        "Indian Medical Association (IMA)",
        "Relevant Pathology Associations"
      ],
      publications: [
        "Clinical case studies in Pathology",
        "Medical research contributions"
      ]
    },
    {
      name: "DR. PRERANA NESARGI",
      role: "Consultant - Pediatric Oncology, Hematology & BMT",
      image: "https://picsum.photos/seed/dr-prerana/600/800",
      bio: "Dr. Prerana Nesargi is a brilliant Pediatric Oncologist, Hematologist, and Bone Marrow Transplant (BMT) Physician with a stellar academic and clinical record. A double University Gold Medalist in MBBS from Mysore Medical College and MD from Indira Gandhi Institute of Child Health, she completed her specialized DM in Pediatric Oncology from the prestigious Kidwai Memorial Institute of Oncology. Dr. Nesargi is highly acclaimed for her scholarly achievements, including presenting at top international pediatric hematology/oncology conferences like PHOCON and SIOP Asia, and publishing groundbreaking research indexed in prestigious journals such as Nature Scientific Reports. Her clinical work focuses on precision medicine, targeted therapies, and hematopoetic stem cell transplants to provide advanced cure rates for children.",
      qualifications: [
        "MBBS - Mysore Medical College, Mysore (University Gold Medalist)",
        "MD Paediatrics - Indira Gandhi Institute of Child Health, Bengaluru (University Gold Medalist)",
        "DM Pediatric Oncology - Kidwai Memorial Institute of Oncology, Bengaluru"
      ],
      achievements: [
        "University Gold Medalist in MBBS and MD Paediatrics",
        "Author of groundbreaking paper on Blood Parameters in Neonatal Sepsis published in NATURE SCIENTIFIC REPORTS journal",
        "Presented research posters at premier PHO conferences such as PHOCON and SIOP ASIA",
        "Regular Panelist and Guest Speaker at Academic Training workshops conducted by the PHO Chapter of IAP",
        "Numerous research publications in indexed Pediatric, Pediatric Oncology, and Hematology journals"
      ],
      expertise: [
        "Pediatric Oncology - Precision Oncology in Pediatric Solid Tumors and Leukemias",
        "Targeted Therapy and Immunotherapy in Pediatric Brain Tumors",
        "Haematology - Acquired and Congenital Anemias, Thrombocytopenias, and associated Primary Immunodeficiencies",
        "Bone Marrow Transplant (BMT) - Allogeneic and Haploidentical Hematopoietic Stem Cell Transplants"
      ],
      memberships: [
        "Karnataka Medical Council",
        "Pediatric Hematology Oncology (PHO) Chapter of Indian Academy of Pediatrics (IAP)",
        "Indian Medical Association (IMA)"
      ],
      publications: [
        "Blood Parameters in Neonatal Sepsis - Nature Scientific Reports",
        "Various publications in national and international indexed Pediatric and Hematology/Oncology journals"
      ]
    },
    {
      name: "DR. SACHIN P. ANGADI",
      role: "Junior Consultant - Orthopaedic Surgery & Sports Medicine",
      image: "https://picsum.photos/seed/dr-sachin/600/800",
      bio: "Dr. Sachin P. Angadi is an exceptional Orthopaedic Surgery Junior Consultant and Sports Medicine Specialist. He holds a prestigious D.N.B in Orthopaedic Surgery and completed a specialized Fellowship in Sports Medicine & Arthroscopy under the mentorship of Dr. Rudraprasad M. S. He has gained extensive clinical training at premier, high-volume centers, including the renowned Ganga Medical Centre in Coimbatore. Dr. Angadi is highly skilled in advanced knee, shoulder, and hip arthroscopic procedures, robotic and conventional joint replacements (TKR, THR), spinal fusion surgery, and pediatric trauma, combining rigorous surgical precision with academic publications and research contributions.",
      qualifications: [
        "MBBS - JSS Medical College, Mysuru (2009 - 2015)",
        "Diploma in Orthopaedic Surgery - S.D.U.M.C, Kolar (2017 - 2019)",
        "D.N.B in Orthopaedic Surgery - Ganga Medical Centre, Coimbatore (2020 - 2022)",
        "Fellowship in Sports Medicine & Arthroscopy - Prasad Ortho Care, Bangalore (2024)"
      ],
      achievements: [
        "Completed prestigious Fellowship under the mentorship of Dr. Rudraprasad M. S. at Prasad Ortho Care",
        "Trained in Joint Arthroplasty and Robotic TKR under Dr. Chandrasekar Chikkamuniyappa",
        "Assisted in major spinal decompressions, fusions, and instrumented stabilizations under Spine Specialist Dr. Gowrishankar L.",
        "Gained massive pediatric and complex trauma exposure at S.G.M.H, New Delhi, and Ganga Hospital under Dr. Srikanth",
        "Published multiple high-impact thesis in premier journals and actively presents at state & national orthopaedic conferences"
      ],
      expertise: [
        "Knee, Shoulder & Hip Arthroscopic reconstructions & repairs",
        "ACL, PCL, and multiligament knee reconstructions and patellar dislocation management",
        "Knee preserving and revision joint surgeries",
        "Arthroscopic Bankart repair, Rotator Cuff repair, and Tendon Transfers for massive cuff tears",
        "CTEV cast application and soft tissue deformity corrections for Clubfoot",
        "Robotic & conventional joint replacement surgeries (TKR, THR)"
      ],
      memberships: [
        "Indian Arthroscopy Society (IAS)",
        "Bangalore Orthopaedic Society",
        "Karnataka Orthopaedic Society"
      ],
      publications: [
        "Thesis: The Role of Pre-Operative Pain Sensitivity Assessment In Predicting The Post-Operative Pain Severity, Analgesic Requirement And Recovery After Single Level Lumbar Fusion Surgeries - Published in THE SPINE JOURNAL",
        "Functional outcome following arthroscopic anterior cruciate ligament reconstruction using quadrupled hamstring autograft - International Journal of Orthopaedics Sciences, 2019"
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