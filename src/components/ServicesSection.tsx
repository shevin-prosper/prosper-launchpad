"use client";

import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";
import { FileText, GraduationCap, PenTool } from "lucide-react";

// --- Custom Cards tailored for Prosper Global Education ---

const IntegrationCard = () => (
  <Card className="flex h-full flex-col border-border/60 bg-white/50 backdrop-blur-sm">
    <CardHeader>
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 shadow-sm">
        <FileText className="h-6 w-6" />
      </div>
      <CardTitle className="font-display text-xl">Application Hub</CardTitle>
      <CardDescription className="font-body text-base mt-2 leading-relaxed">
        Unlock effortless university applications. We handle the paperwork, 
        connect with universities directly, and streamline your entire 
        admission process. 100% free of charge.
      </CardDescription>
    </CardHeader>
  </Card>
);

const TrackersCard = () => (
  <Card className="h-full border-border/60 bg-white/50 backdrop-blur-sm">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div>
        <CardTitle className="text-base font-semibold font-display">
          Students Placed
        </CardTitle>
        <CardDescription className="font-body text-xs mt-0.5">2,400+ Active Students</CardDescription>
      </div>
      <div className="flex -space-x-2 overflow-hidden mt-6">
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
          src="/photo-grad.jpg"
          alt="Student 1"
        />
        <img
          className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover"
          src="/photo-event1.jpg"
          alt="Student 2"
        />
        <div className="flex h-10 w-10 items-center justify-center rounded-full ring-2 ring-white bg-blue-100 text-blue-800 text-xs font-bold font-body">
          +2k
        </div>
      </div>
    </CardContent>
  </Card>
);

const FocusCard = () => (
  <Card className="h-full border-border/60 bg-white/50 backdrop-blur-sm">
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div className="flex items-start justify-between">
        <div>
          <CardTitle className="text-base font-semibold font-display">Success</CardTitle>
          <CardDescription className="font-body text-xs mt-0.5">Visa Approvals</CardDescription>
        </div>
        <Badge variant="outline" className="border-emerald-300 text-emerald-700 bg-emerald-50">
          High Rate
        </Badge>
      </div>
      <div className="mt-4">
        <span className="text-5xl font-black font-display text-slate-800 tracking-tighter">98%</span>
      </div>
      <div className="flex justify-between text-[11px] text-muted-foreground font-body mt-2 uppercase tracking-wide font-semibold">
        <span>Historical</span>
        <span className="text-emerald-600">Verified</span>
      </div>
    </CardContent>
  </Card>
);

const StatisticCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-border/60 bg-gradient-to-br from-blue-600 to-indigo-800">
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: "radial-gradient(#ffffff 2px, transparent 2px)",
        backgroundSize: "24px 24px",
      }}
    />
    <CardContent className="relative z-10 flex h-full flex-col items-center justify-center p-6 text-white text-center">
      <span className="text-5xl md:text-6xl font-black font-display tracking-tighter drop-shadow-lg">100%</span>
      <span className="font-body font-bold text-blue-100 mt-2 tracking-widest uppercase text-sm">Free Service</span>
    </CardContent>
  </Card>
);

const ProductivityCard = () => (
  <Card className="h-full border-border/60 bg-white/50 backdrop-blur-sm relative overflow-hidden group">
    <div className="absolute -right-6 -top-6 text-yellow-100 opacity-40 group-hover:scale-110 group-hover:opacity-60 transition-all duration-500">
      <GraduationCap size={140} strokeWidth={1} />
    </div>
    <CardContent className="flex h-full flex-col justify-end p-6 relative z-10">
      <CardTitle className="text-base font-semibold font-display">
        Scholarships
      </CardTitle>
      <CardDescription className="font-body text-sm mt-1 leading-relaxed">
        Boost your education funding with our expert guidance on financial aid and university grants.
      </CardDescription>
    </CardContent>
  </Card>
);

const ShortcutsCard = () => (
  <Card className="h-full border-border/60 bg-white/50 backdrop-blur-sm relative overflow-hidden group">
    <div className="absolute right-0 top-0 -mr-6 -mt-6 text-blue-100 opacity-60 group-hover:scale-110 group-hover:opacity-80 transition-all duration-500">
      <PenTool size={140} strokeWidth={1} />
    </div>
    <CardContent className="flex h-full flex-col justify-center p-6 md:p-8 relative z-10 w-full md:w-3/4">
      <CardTitle className="text-xl font-bold font-display text-slate-800">SOP Writing</CardTitle>
      <CardDescription className="font-body text-base mt-2 leading-relaxed">
        Stand out from the crowd. Our experts help craft compelling Statements of Purpose that get you noticed by top university admission boards.
      </CardDescription>
    </CardContent>
  </Card>
);

const ServicesSection = () => {
  return (
    <section id="services" className="bg-slate-50 py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-40 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-40 w-96 h-96 bg-purple-100/40 rounded-full blur-3xl opacity-60 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="mb-14 text-center max-w-2xl mx-auto">
          <div className="inline-flex border border-blue-200 bg-blue-50 text-blue-700 text-xs font-bold px-4 py-1.5 rounded-full mb-5 tracking-wide uppercase font-body">
            Our Expertise
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-5 leading-tight">
            How we can help you <span className="text-blue-600">succeed.</span>
          </h2>
          <p className="font-body text-lg text-slate-500 leading-relaxed">
            From picking the perfect university to landing safely at your destination, 
            we manage the entire complex process for you securely.
          </p>
        </div>

        <BentoGridShowcase
          integration={<IntegrationCard />}
          trackers={<TrackersCard />}
          statistic={<StatisticCard />}
          focus={<FocusCard />}
          productivity={<ProductivityCard />}
          shortcuts={<ShortcutsCard />}
        />
      </div>
    </section>
  );
};

export default ServicesSection;
