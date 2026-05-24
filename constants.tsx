
import React from 'react';
import { Stethoscope, Activity, Pill, FlaskConical, Users, HeartPulse, ShieldCheck, Thermometer } from 'lucide-react';
import { Review, Service, HealthTip, CampEvent } from './types';

export const CLINIC_INFO = {
  name: "NEELA HEALTHCARE AND DIAGNOSTICS",
  doctor: "Dr. Manoj A G",
  qualifications: "MBBS, MD, DNB, PGDGM",
  specialization: "General Physician & Internal Medicine Specialist",
  address: "Neela healthcare and diagnostics, No 404, 8th main road, Opposite to mantri alpyne, Dr. Vishnuvardhan road, Vaddarapalya, Banashankari 5th stage, Bangalore - 560061, Karnataka",
  phone: "7019490896",
  email: "neelahealthcarediagnostics@gmail.com",
  hours: "Monday - Sunday: 8:00 AM - 10:00 PM",
  googleRating: 5.0,
  reviewCount: 35,
  googleMapsShareUrl: "https://share.google/5qU0acRUkoq1Bi10l",
  appointmentLink: "https://neelahealth.palmpower.in/#_bookAppointment"
};

export const SERVICES: Service[] = [
  {
    id: 'gen-consult',
    title: 'General Consultation',
    description: 'Comprehensive medical evaluations for all ages, focusing on holistic health assessment.',
    icon: 'Stethoscope'
  },
  {
    id: 'ortho-spine',
    title: 'Ortho & Spine Care',
    description: 'Expert consultation for orthopedic issues and specialized spine health management.',
    icon: 'Activity'
  },
  {
    id: 'diabetes-care',
    title: 'Diabetes & BP Care',
    description: 'Specialized management of chronic conditions including hypertension and blood sugar monitoring.',
    icon: 'Activity'
  },
  {
    id: 'fever-mgmt',
    title: 'Fever & Infections',
    description: 'Expert diagnosis and treatment for viral fevers, dengue, and common infectious diseases.',
    icon: 'Thermometer'
  },
  {
    id: 'elderly-care',
    title: 'Geriatric Care',
    description: 'Comprehensive health assessment and chronic disease management for elderly patients. "Focused on improving quality of life, independence, and healthy aging."',
    icon: 'HeartPulse'
  },
  {
    id: 'pediatric-care',
    title: 'Pediatric & Pediatric Oncology Care',
    description: 'Comprehensive general pediatric care and specialized pediatric oncology expert services.',
    icon: 'Stethoscope'
  },
  {
    id: 'ent-care',
    title: 'ENT Care',
    description: 'Comprehensive diagnosis and treatment for ear, nose, throat, and related structures.',
    icon: 'Stethoscope'
  },
  {
    id: 'surgery-care',
    title: 'General Surgery Care',
    description: 'Counseling and expert consultation for general surgical cases and minor health procedures.',
    icon: 'Stethoscope'
  },
  {
    id: 'ophthalmology',
    title: 'Ophthalmology',
    description: 'Premium eye care consultation, checks, diagnostics, and professional advice.',
    icon: 'Stethoscope'
  },
  {
    id: 'lab-services',
    title: 'Diagnostic Lab',
    description: 'Advanced Laboratory Investigations, Specialized Hormonal Tests, and Pathology Services.',
    icon: 'FlaskConical'
  },
  {
    id: 'pharmacy',
    title: 'In-House Pharmacy',
    description: 'Access to genuine medicines right after your consultation. Fully Operational.',
    icon: 'Pill'
  },
  {
    id: 'day-care',
    title: 'Day Care Services',
    description: 'Short-term medical monitoring and treatment. Coming Soon.',
    icon: 'Activity',
    isComingSoon: true
  }
];

export const REVIEWS: Review[] = [
  { id: '1', author: 'Simha', rating: 5, content: "I consulted the doctor for dengue. He is knowledgeable & approachable. Thank you doctor for instilling confidence and explaining the recovery plan.", date: '5 months ago', role: 'Local Guide' },
  { id: '2', author: 'Sunil Hsn', rating: 5, content: "I felt genuinely cared for and confident in the medical advice I received. Exceptional outstanding care.", date: '5 months ago' },
  { id: '3', author: 'Fahim Abdullah', rating: 5, content: "Patiently listened to my problems and gave appropriate treatment thank you. Excellent doctor.", date: '7 months ago' },
  { id: '4', author: 'Kishor Sattigeri', rating: 5, content: "Very good doctor. Have been consulting him since moving to Bengaluru 3 years back. Half of the illness disappears just by visiting.", date: '2 months ago' },
  { id: '5', author: 'Aruna MN', rating: 5, content: "Dr. Manoj is an experienced doctor, he listens very patiently, his diagnosis and treatment is excellent!", date: '5 months ago' },
  { id: '6', author: 'Yash Immortal', rating: 4, content: "Really good at diagnosing conditions, polite and listens carefully to what the patient is saying.", date: '5 months ago' },
  { id: '7', author: 'Raghunath Jayarama', rating: 5, content: "Dr Manoj is really good and I recommend him to everyone in the area.", date: '3 months ago' },
  { id: '8', author: 'Tilak Nagaraj', rating: 5, content: "Excellent doctor near RR nagar, explanation and treatment is good, my granny recovered very well.", date: '8 months ago', role: 'Local Guide' },
  { id: '9', author: 'prabhanjan kumar', rating: 5, content: "Doctor had been very helpful and reachable, excellent consultation and diagnosis, thanks.", date: '3 days ago' },
  { id: '10', author: 'Gururaj VL', rating: 5, content: "Very nice doctor, highly recommended for chronic issues.", date: '2 months ago' },
  { id: '11', author: 'Vishvajeet Yadav', rating: 5, content: "Dr Manoj A G practice is very nice and professional.", date: '5 months ago' },
  { id: '12', author: 'manish Kumar', rating: 5, content: "Great experience with the doctor. Very patient and understanding.", date: '2 days ago', role: 'Local Guide' },
  { id: '13', author: 'darshan pemmaiah', rating: 5, content: "One of the best physicians in Uttarahalli. Very knowledgeable.", date: '3 days ago' },
  { id: '14', author: 'Mallesh Mallesh', rating: 5, content: "Excellent treatment and diagnosis. Fee is also reasonable.", date: '2 months ago' },
  { id: '15', author: 'Anant Rao Kulkarni', rating: 5, content: "Doctor is very polite and handles patients with great care.", date: '2 months ago' },
  { id: '16', author: 'Remya Mahesh', rating: 5, content: "Glad to have found a doctor who actually listens to the patient's concerns.", date: '3 months ago', role: 'Local Guide' },
  { id: '17', author: 'Bhaskar reddy', rating: 5, content: "Very professional clinic. The doctor is very experienced in managing diabetes.", date: '3 months ago' },
  { id: '18', author: 'Daya Sagar', rating: 5, content: "Top notch consultation. He explains the root cause very clearly.", date: '3 months ago' },
  { id: '19', author: 'Ravikumara', rating: 5, content: "Excellent service and care. Highly satisfied with the recovery plan.", date: '3 months ago' },
  { id: '20', author: 'Abhinand r d', rating: 5, content: "Approachable and kind. My family always consults Dr. Manoj.", date: '3 months ago' },
  { id: '21', author: 'Manjunatha B R', rating: 5, content: "Great clinical expertise. He manages chronic illnesses very effectively.", date: '3 months ago' },
  { id: '22', author: 'Ambika Hulmath', rating: 5, content: "Very caring doctor. He instills so much confidence in patients.", date: '3 months ago' },
  { id: '23', author: 'Gaurav', rating: 5, content: "Updated feedback: Treatment is very effective. Thank you doctor.", date: '3 months ago' },
  { id: '24', author: 'Sathish S', rating: 5, content: "Doctor is very knowledgeable. The diagnostic approach is very precise.", date: '4 months ago' },
  { id: '25', author: 'Vikas Yadav', rating: 5, content: "Excellent doctor, thanks for the care.", date: '5 months ago' },
  { id: '26', author: 'THILAK K S', rating: 5, content: "Always aiming to serve better, truly professional.", date: '5 months ago' },
  { id: '27', author: 'mamatha vinodh', rating: 5, content: "Very happy with the consultation. Highly recommended.", date: '5 months ago' },
  { id: '28', author: 'Ranjith gowda', rating: 5, content: "Good doctor in the locality. Patiently handles all queries.", date: '5 months ago' },
  { id: '29', author: 'Arundhati Joshi', rating: 5, content: "Experienced physician. Very reliable for family health.", date: '5 months ago', role: 'Local Guide' },
  { id: '30', author: 'Chinmay Gowda c n', rating: 5, content: "Thank you for the wonderful care and attention.", date: '5 months ago' },
  { id: '31', author: 'Channa Reddy', rating: 5, content: "Professional and caring. Great experience.", date: '5 months ago' },
  { id: '32', author: 'Annesh R C', rating: 5, content: "Highly recommended for general medicine issues.", date: '1 year ago' },
  { id: '33', author: 'A Google User', rating: 5, content: "Very nice doctor, very polite behavior.", date: '2 months ago' },
  { id: '34', author: 'Yatish Gowda', rating: 5, content: "Good at his job and very patient. I recommend everyone to visit.", date: '5 months ago' },
  { id: '35', author: 'Kishore S', rating: 5, content: "Consistently good care over the years. Truly trusted.", date: '1 month ago' }
];

export const HEALTH_TIPS: HealthTip[] = [
  {
    id: '1',
    title: 'Managing Diabetes Daily',
    excerpt: 'Simple lifestyle changes that can help keep your blood sugar levels in check consistently.',
    category: 'Chronic Care',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Controlling Blood Pressure',
    excerpt: 'Understanding hypertension and the role of diet and exercise in natural management.',
    category: 'Heart Health',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'Fever Care at Home',
    excerpt: 'When to manage a fever at home and when it is critical to see your doctor.',
    category: 'General Health',
    readTime: '3 min read'
  }
];

export const CAMPS: CampEvent[] = [
  {
    id: 'camp1',
    title: 'Diabetes Screening Camp',
    date: 'Regularly Conducted',
    description: 'Includes HbA1c testing and risk assessment for early detection.',
    image: 'https://picsum.photos/seed/camp1/800/600'
  },
  {
    id: 'camp2',
    title: 'Hypertension Screening',
    date: 'Regularly Conducted',
    description: 'Blood pressure monitoring and free ambulatory BP evaluation.',
    image: 'https://picsum.photos/seed/camp2/800/600'
  },
  {
    id: 'camp3',
    title: 'Cardiac & Thyroid Screening',
    date: 'Regularly Conducted',
    description: 'Early detection of heart disease and thyroid disorders.',
    image: 'https://picsum.photos/seed/camp3/800/600'
  }
];

export const IconMap: Record<string, React.ElementType> = {
  Stethoscope,
  Activity,
  Pill,
  FlaskConical,
  Users,
  HeartPulse,
  ShieldCheck,
  Thermometer
};

