"use client";
import { TextReveal } from "@/components/Common/Text-reveal";
import Image from "next/image";
import studio_banner from "@/public/images/hero_banner.jpg";
import { useEffect, useRef } from "react";
import { usePreloader } from "@/context/preloader";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { TopbarSection } from "../UI/TopbarSection";
import logo from '@/public/svgs/logo_1.svg'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const imageWrapperRef = useRef<HTMLDivElement | null>(null);
  const { isPreloaderDone } = usePreloader();

  useEffect(() => {
    if (isPreloaderDone) {
      initializeGSAP();
    }
  }, [isPreloaderDone]);

  const initializeGSAP = () => {
    const ctx = gsap.context(() => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.refresh();

      setTimeout(() => {
        const imgEl = imageWrapperRef.current?.querySelector('img');
        if (imgEl) {
          gsap.to(imgEl, {
            objectPosition: "50% 100%",
            ease: "power1.inOut",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top top",
              end: "bottom+=1000 bottom",
              scrub: true,
            },
          });
        }

        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "bottom bottom-=300",
          end: "bottom top-=300",
          pin: true,
          pinSpacing: false,
          id: "hero-pin",
        });

        gsap.to(containerRef.current, {
          rotateX: "12deg",
          scale: 0.92,
          opacity: 0.8,
          transformOrigin: "center bottom",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "bottom bottom-=300",
            end: "bottom bottom-=500",
            scrub: true,
          },
        });
      }, 100);
    }, containerRef);

    return () => ctx.revert();
  };

  return (
    <section ref={containerRef} className="space-y-[4.5rem]">
      <TopbarSection logo = {logo} />
      <div className="w-[90%] mx-auto max-w-[1440px]">
        <div className="text-[4rem] md:text-[10rem] lg:text-[13rem] font-medium uppercase leading-[100%] font-helvetica">
          <TextReveal
            splitType="chars"
            direction="up"
            duration={0.7}
            stagger={0.08}
            delay={1}
          >
            ABOUT US
          </TextReveal>
        </div>
        <p className="text-[1.75rem] md:text-[3.75rem] lg:text-[4rem] font-semibold leading-[120%] tracking-[-0.125rem] font-helvetica">
          {[
            "Discover our mission, values, & the",
            "passionate team behind our success.",
          ].map((lines, i) => (
            <TextReveal
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={i === 0 ? 1.2 : i * 0.05 + 1.4}
              key={i}
            >
              {lines}
            </TextReveal>
          ))}
        </p>
      </div>

      <div className="h-[65vh] md:h-[75vh] lg:h-[85vh] w-full relative overflow-hidden">
        <div
          ref={imageWrapperRef}
          style={{
            position: "absolute",
            inset: 0,
          }}
        >
          <Image
            src={studio_banner}
            alt="studio banner"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{
              objectPosition: "50% 0%",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;