import React from 'react';

// Composants SVG pour les logos (reproduction fidèle de l'image)
const LogoSun = () => (
  <div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
      <path d="M12 4V2M12 22V20M4 12H2M22 12H20M5.63604 5.63604L4.22182 4.22182M19.7782 19.7782L18.364 18.364M5.63604 18.364L4.22182 19.7782M19.7782 4.22182L18.364 5.63604M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-lg font-bold text-slate-400">Logoipsum</span>
  </div>
);

const LogoBolt = () => (
  <div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-lg font-bold text-slate-400">Logoipsum</span>
  </div>
);

const LogoFlower = () => (
  <div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M12 2V5M12 19V22M2 12H5M19 12H22M4.92893 4.92893L7.05025 7.05025M16.9497 16.9497L19.0711 19.0711M4.92893 19.0711L7.05025 16.9497M16.9497 7.05025L19.0711 4.92893" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-lg font-bold text-slate-400">Logoipsum</span>
  </div>
);

const LogoWaves = () => (
  <div className="flex items-center gap-2 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-900">
      <path d="M2 12C2 12 5 8 12 8C19 8 22 12 22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 17C2 17 5 13 12 13C19 13 22 17 22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <path d="M2 7C2 7 5 3 12 3C19 3 22 7 22 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="text-lg font-bold text-slate-400">Logoipsum</span>
  </div>
);

const AboutUs: React.FC = () => {
  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Content: Label + Text */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-16">
          
          {/* Label Column */}
          <div className="md:w-1/4 pt-2">
            <div className="flex items-center gap-3">
              <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
              <span className="text-sm font-semibold text-slate-600 uppercase tracking-wide">
                About Us
              </span>
            </div>
          </div>

          {/* Main Text Column */}
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl lg:text-[2.5rem] leading-[1.3] font-medium text-slate-900">
              God Is Alive Academy is a Christian bilingual institution committed to shaping confident, values-driven learners. With a dynamic curriculum, experienced educators, and a nurturing environment, GIA guides students toward academic excellence, character formation, and global readiness in an ever-evolving world.
            </h2>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* Stat 1 */}
          <div className="py-6 pr-6 border-gray-200 sm:border-b-0 lg:border-r">
            <p className="text-4xl font-medium text-slate-900 mb-2">100%</p>
            <p className="text-sm text-slate-500 leading-relaxed">
             Parents satisfied with our value-based education
            </p>
          </div>

          {/* Stat 2 */}
          <div className="py-6 pr-6 border-gray-200 sm:border-b-0 lg:border-r lg:pl-8">
            <p className="text-4xl font-medium text-slate-900 mb-2">15+</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Years of Christ-centered learning and growth
            </p>
          </div>

          {/* Stat 3 */}
          <div className="py-6 pr-6 border-gray-200 sm:border-b-0 lg:border-r lg:pl-8">
            <p className="text-4xl font-medium text-slate-900 mb-2">4 Programs</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Comprehensive bilingual pathways for every learner
            </p>
          </div>

          {/* Stat 4 */}
          <div className="py-6 lg:pl-8">
            <p className="text-4xl font-medium text-slate-900 mb-2">500+</p>
            <p className="text-sm text-slate-500 leading-relaxed">
              Students empowered to thrive with confidence
            </p>
          </div>
        </div>

        {/* Logos Row */}
        <div className="mt-20 pt-10 flex flex-wrap justify-between items-center gap-8 md:gap-4 border-t border-transparent">
          <LogoSun />
          <LogoBolt />
          <LogoFlower />
          <LogoWaves />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;