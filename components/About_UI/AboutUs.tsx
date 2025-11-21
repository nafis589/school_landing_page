"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TextReveal } from "@/components/Common/Text-reveal";
import { usePreloader } from "@/context/preloader";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
  const serviceBoxesRef = useRef<(HTMLElement | null)[]>([]);
  const { isPreloaderDone } = usePreloader();

  useEffect(() => {
    if (isPreloaderDone) {
      initializeGSAP();
    }
  }, [isPreloaderDone]);

  const initializeGSAP = () => {
    const ctx = gsap.context(() => {
      // Do not kill ScrollTriggers here; only refresh so new triggers compute correctly
      ScrollTrigger.refresh();

      // Batch-animate the two service/mission cards when they enter viewport
      const boxes = serviceBoxesRef.current.filter(Boolean);

      gsap.set(boxes, {
        y: 50,
        opacity: 0,
      });

      ScrollTrigger.batch(boxes, {
        start: 'top bottom-=100px',
        onEnter: (elements) => {
          gsap.to(elements, {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="bg-inverse-1 bg-black min-h-screen perspective-section relative z-20"
    >
      <main>
        {/* Header */}
        <header className="w-[90%] mx-auto max-w-[1440px] pt-[6rem] space-y-[6rem]">
          <div className="flex items-center justify-between">
            <p className="font-helvetica text-2xl text-white/60">
              <TextReveal splitType="lines" direction="up" duration={0.7} stagger={0.08}>
                (About Us)
              </TextReveal>
            </p>
            <p className="font-helvetica text-2xl text-white/60">
              <TextReveal splitType="lines" direction="up" duration={0.7} stagger={0.08}>
                (01)
              </TextReveal>
            </p>
          </div>

          <div>
            <div className="text-[4rem] md:text-[5rem] lg:text-[11rem] font-medium text-white font-helvetica uppercase leading-[100%]">
              <TextReveal splitType="chars" direction="up" duration={0.7} stagger={0.08}>
                God Is Alive
              </TextReveal>
              <TextReveal splitType="chars" direction="up" duration={0.7} stagger={0.08}>
                Academy
              </TextReveal>
            </div>
          </div>
        </header>

        {/* Mission + Vision Cards */}
        <div className="w-[90%] mx-auto max-w-[1440px] grid grid-cols-1 md:grid-cols-2 gap-8 pt-[4rem] pb-[8rem]">

          {/* OUR MISSION */}
          <article ref={(el) => { serviceBoxesRef.current[0] = el as HTMLElement | null; }} className="aspect-square rounded-lg bg-white/5 p-8 flex flex-col">
            <h3 className="text-4xl md:text-5xl font-helvetica font-semibold mb-6 text-white">
              Our Mission
            </h3>

            <ul className="pl-5 space-y-3 text-lg md:text-xl text-white/80">
              <li>Provide high-quality bilingual education (English–French).</li>
              <li>Nurture students academically, morally, and spiritually.</li>
              <li>Offer a safe, supportive, and globally minded learning environment.</li>
              <li>Prepare learners to become confident, responsible future leaders.</li>
            </ul>
          </article>

          {/* OUR VISION */}
          <article ref={(el) => { serviceBoxesRef.current[1] = el as HTMLElement | null; }} className="aspect-square rounded-lg bg-white/5 p-8 flex flex-col">
            <h3 className="text-4xl md:text-5xl font-helvetica font-semibold mb-6 text-white">
              Our Vision
            </h3>

            <ul className="pl-5 space-y-3 text-lg md:text-xl text-white/80">
              <li>Become a leading bilingual academic institution in the region.</li>
              <li>Shape globally competitive students who embody strong values.</li>
              <li>Promote innovation, critical thinking, and lifelong learning.</li>
              <li>Build a generation guided by excellence, integrity, and faith.</li>
            </ul>
          </article>

        </div>
      </main>
    </section>
  );
};

export default AboutUs;
