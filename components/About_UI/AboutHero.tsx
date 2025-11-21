import React from 'react';
import { ArrowRight } from 'lucide-react';
import { TopbarSection } from '../UI/TopbarSection';
import logo from '@/public/svgs/logo_1.svg';
import studio_banner from '@/public/images/hero_banner.jpg';

const AboutHero: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-slate-900 overflow-hidden font-helvetica">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${studio_banner.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/40 md:bg-black/40"></div>
      </div>

      {/* Topbar */}
      <div className="absolute top-0 left-0 w-full z-20">
        <TopbarSection logo={logo} />
      </div>

      {/* MAIN CONTENT */}
      <div className="relative z-10 flex flex-col justify-between h-screen max-w-[1400px] mx-auto px-6 pt-20 pb-12 md:px-12 md:pt-24 md:pb-16 lg:pt-28 lg:pb-20 text-white">

        {/* --- TOP SECTION --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-0">

          {/* Top Left: Stats */}
          <div className="flex flex-row gap-12 md:gap-20">

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-light tracking-tight mb-1">
                100%
              </span>
              <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
                Safe Learning
              </span>
            </div>

            <div className="flex flex-col">
              <span className="text-4xl md:text-5xl font-light tracking-tight mb-1">
                3 Sections
              </span>
              <span className="text-xs md:text-sm text-gray-300 uppercase tracking-wider font-medium">
                Nursery • Primary • Secondary
              </span>
            </div>

          </div>

          {/* Top Right: Paragraph */}
          <div className="max-w-md lg:text-right">
            <p className="text-base md:text-lg text-gray-200 font-light leading-relaxed">
              God Is Alive Academy provides a nurturing and academically rigorous bilingual
              environment where students are guided morally, spiritually, and intellectually
              to become responsible global citizens.
            </p>
          </div>
        </div>

        {/* --- BOTTOM SECTION --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 lg:gap-0 mt-auto">

          {/* Bottom Left: Headline */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] md:leading-[1.1] font-normal tracking-tight">
              Shaping Tomorrow’s <br className="hidden md:block" />
              Leaders Through <br className="hidden md:block" />
              Excellence and <br className="hidden md:block" />
              Bilingual Education
            </h1>
          </div>

          {/* Bottom Right: CTA & Details */}
          <div className="w-full lg:w-auto flex flex-col items-start lg:items-end gap-6 pb-2">

            {/* CTA Button */}
            <button className="group flex items-center gap-4 bg-white text-black px-8 py-4 md:px-10 md:py-5 text-lg font-medium hover:bg-gray-100 transition-all duration-300 cursor-pointer">
              Enroll Now
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Line */}
            <div className="w-full lg:w-[120%] h-[1px] bg-white/30 lg:-ml-[20%]"></div>

            {/* Footer Text */}
            <div className="flex items-center justify-between w-full lg:justify-end gap-4">

              <div className="lg:hidden opacity-60">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
              </div>

              <span className="text-sm text-gray-400 font-medium tracking-wide">
                Educating with Purpose since 2016
              </span>
            </div>

            {/* Desktop Globe */}
            <div className="hidden lg:block absolute bottom-4 left-[68%] opacity-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutHero;