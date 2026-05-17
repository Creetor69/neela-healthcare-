
import React from 'react';
import { Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6">
        {/* Clinic Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-sky-600 rounded-2xl rotate-2 group-hover:rotate-0 transition-transform"></div>
            <img 
              src="https://picsum.photos/seed/clinic-exterior/800/600" 
              alt="Neela Healthcare Clinic" 
              className="relative z-10 w-full rounded-2xl shadow-xl -rotate-2 group-hover:rotate-0 transition-transform object-cover aspect-[4/3]"
            />
          </div>
          <div className="space-y-4">
            <div>
              <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">About Our Clinic</h1>
              <p className="text-sm text-slate-600 leading-relaxed">
                Neela Healthcare and Diagnostic Center is a premier medical facility dedicated to providing comprehensive healthcare and diagnostic services. Our mission is to combine clinical excellence with compassionate care, ensuring every patient receives personalized attention.
              </p>
            </div>
            
            <div className="bg-white p-5 rounded-2xl border border-slate-100 shadow-sm space-y-2">
              <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                <Heart className="text-rose-500" size={18} />
                <span>Our Vision</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed italic">
                &quot;To be the most trusted healthcare partner for our community, delivering high-quality medical services through innovation, empathy, and professional integrity.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Clinic Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-10">
          {[
            {
              title: "Diagnostics",
              desc: "Equipped with modern diagnostic technology, we offer a wide range of laboratory tests."
            },
            {
              title: "Expert Care",
              desc: "Led by experienced specialists, our clinic provides expert management for ortho, spine, and more."
            },
            {
              title: "Pharmacy",
              desc: "Our fully operational in-house pharmacy ensures you have immediate access to genuine medicines."
            },
            {
              title: "Patient-Centric",
              desc: "We prioritize patient comfort. Our team takes the time to listen and support you."
            }
          ].map((feature, i) => (
            <div key={i} className="bg-white p-4 rounded-xl border border-slate-50 shadow-sm hover:shadow-md transition-all">
              <h3 className="text-base font-bold text-slate-900 mb-1">{feature.title}</h3>
              <p className="text-[10px] text-slate-600 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
