"use client";
import React from "react";
import { CyberneticBentoGrid, BentoItem } from "@/components/ui/cybernetic-bento-grid";
import { 
  Users, 
  ClipboardList, 
  Presentation, 
  FileCheck, 
  Plane, 
  GraduationCap, 
  Wallet, 
  Briefcase 
} from "lucide-react";

interface ServiceProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorClass: string;
}

const services: ServiceProps[] = [
  {
    title: "Counseling & Guidance",
    description: "Comprehensive advice on all study possibilities, universities, and academic programs to help you make informed decisions.",
    icon: <Users className="h-6 w-6" />,
    colorClass: "bg-blue-600 shadow-blue-200",
  },
  {
    title: "Application Support",
    description: "From preparing and submitting your application to securing offer letters, we assist you every step of the way.",
    icon: <ClipboardList className="h-6 w-6" />,
    colorClass: "bg-pink-500 shadow-pink-200",
  },
  {
    title: "Interview Preparation",
    description: "Get ready for credibility interviews, CAS, and visa interviews with our expert preparation and mock sessions.",
    icon: <Presentation className="h-6 w-6" />,
    colorClass: "bg-cyan-500 shadow-cyan-200",
  },
  {
    title: "Documentation Assistance",
    description: "We offer support with key documentation, including crafting a strong Statement of Purpose (SOP) that highlights your strengths.",
    icon: <FileCheck className="h-6 w-6" />,
    colorClass: "bg-purple-600 shadow-purple-200",
  },
  {
    title: "Visa Application",
    description: "Our team will guide you through the entire visa application process, ensuring all requirements are met for a successful outcome.",
    icon: <Plane className="h-6 w-6" />,
    colorClass: "bg-orange-600 shadow-orange-200",
  },
  {
    title: "Scholarship Opportunities",
    description: "We help identify scholarship options that align with your academic and financial needs, providing guidance to maximize your chances.",
    icon: <GraduationCap className="h-6 w-6" />,
    colorClass: "bg-emerald-500 shadow-emerald-200",
  },
  {
    title: "Financial Planning",
    description: "Receive expert advice on financial planning, including a clear pathway for covering your total study and living expenses abroad.",
    icon: <Wallet className="h-6 w-6" />,
    colorClass: "bg-teal-600 shadow-teal-200",
  },
  {
    title: "5-Year Career Guarantee",
    description: "Benefit from our five-year career guidance warranty, offering continuous support as you navigate your post-graduation journey.",
    icon: <Briefcase className="h-6 w-6" />,
    colorClass: "bg-indigo-600 shadow-indigo-200",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="bg-[#fcfdff] py-24 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 bg-pink-50/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <div className="inline-flex border border-blue-100 bg-blue-50/50 text-blue-700 text-xs font-bold px-5 py-2 rounded-full mb-6 tracking-widest uppercase font-body">
            Our Expertise
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-extrabold text-[#0D1B3E] tracking-tight mb-6 leading-tight">
            Comprehensive Support for your <span className="text-blue-600 italic">Global Journey.</span>
          </h2>
          <p className="font-body text-base text-slate-500 max-w-2xl mx-auto">
            Discover your best program in minutes with our expert assistance across 
            every critical touchpoint of your international education.
          </p>
        </div>

        <CyberneticBentoGrid className="lg:grid-cols-4">
          {services.map((service, index) => (
            <BentoItem 
                key={index} 
                className="flex flex-col items-center text-center group"
            >
              <div className={`mb-8 flex h-16 w-16 items-center justify-center rounded-2xl ${service.colorClass} text-white shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-extrabold text-[#0D1B3E] font-display mb-4 leading-snug">
                {service.title}
              </h3>
              <p className="font-body text-[13px] text-slate-500 leading-relaxed">
                {service.description}
              </p>
            </BentoItem>
          ))}
        </CyberneticBentoGrid>
      </div>
    </section>
  );
};

export default ServicesSection;
