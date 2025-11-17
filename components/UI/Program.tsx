"use client";
import { useRef, FC, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SERVICES } from "@/Constants/program";
import type { IServices } from "@/Constants/program";
import Image from "next/image";
import { TextReveal } from "@/components/Common/Text-reveal";
import { DiagonalReveal } from "@/components/Common/Image-reveal";
import { usePreloader } from "@/context/preloader";

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const { isPreloaderDone } = usePreloader();

  useEffect(() => {
    if (isPreloaderDone) {
      initializeGSAP();
    }
  }, [isPreloaderDone]);

  const initializeGSAP = () => {
    const ctx = gsap.context(() => {
      // Do NOT kill all ScrollTrigger instances here — that removes
      // the pin/animations created by other sections (e.g. AudienceSection).
      // Only refresh so that newly created triggers are calculated correctly.
      ScrollTrigger.refresh();

      setTimeout(() => {
        gsap.to(contentRef.current, {
          rotateX: "0deg",
          scale: 1,
          opacity: 1,
          y: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "top center",
            scrub: true,
          },
        });

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "bottom bottom-=300",
          end: "bottom top-=300",
          pin: true,
          pinSpacing: false,
        });

        gsap.to(sectionRef.current, {
          rotateX: "12deg",
          scale: 0.92,
          opacity: 0.8,
          transformOrigin: "center bottom",
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "bottom bottom-=300",
            end: "bottom bottom-=500",
            scrub: true,
          },
        });
      }, 100);
    }, sectionRef);

    return () => ctx.revert();
  };

  return (
    <section
      ref={sectionRef}
      className="bg-black min-h-screen perspective-section relative z-20"
    >
      <main ref={contentRef} className="transform-container">
        <header className="w-[90%] mx-auto max-w-[1440px] py-12 md:py-[6rem] space-y-12 md:space-y-[6rem]">
          <div className="flex items-center justify-between">
            <p className="font-helvetica text-2xl text-white/60">
              <TextReveal
                splitType="lines"
                direction="up"
                duration={0.7}
                stagger={0.08}
              >
                (Academics &amp; Programs)
              </TextReveal>
            </p>
          </div>

          <div>
            <h2 className="text-[6rem] md:text-[10rem] font-helvetica uppercase leading-[100%]">
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.08}
                delay={0.4}
              >
                Programs
              </TextReveal>
            </h2>
            <p className="text-[2rem] md:text-[3.75rem] font-semibold leading-[120%] tracking-[-0.125rem]">
              {[
                "Discover our bilingual academic structure",
                "designed to build strong foundations,",
                "and prepare students for global excellence.",
              ].map((lines: string, i: number) => (
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                  delay={i === 0 ? 0.05 : i * 0.1}
                  key={i}
                >
                  {lines}
                </TextReveal>
              ))}
            </p>
          </div>
        </header>

        <div>
          {SERVICES.map((s, i) => (
            <ServiceCard
              key={i}
              {...s}
              position={i === 1 ? "left" : "right"}
              index={i}
            />
          ))}
        </div>
      </main>
    </section>
  );
};

export default Services;

const ServiceCard: FC<
  IServices & {
    position: string;
    index: number;
  }
> = ({ description, details, image, position, title, index }) => {
  return (
    <article
      className={`bg-inverse-1 flex flex-col md:flex-row md:h-screen md:overflow-hidden ${
        position === "left" ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="w-full md:w-[40%] h-[45vh] md:h-full relative">
        <DiagonalReveal className="w-full h-full" duration={2} delay={index * 0.1}>
          <Image
            src={image}
            alt={title[0] + title[1]}
            fill
            className="object-cover w-full h-full"
          />
        </DiagonalReveal>
      </div>
      <div className="w-full md:w-[60%] p-6 md:p-[6rem] flex flex-col justify-between">
        <div className="space-y-4">
          <h2 className="font-helvetica uppercase flex flex-col leading-[100%] text-[5rem]">
            {title.map((t: string, i: number) => (
              <TextReveal
                splitType="chars"
                direction="up"
                duration={0.7}
                stagger={0.08}
                key={i}
                delay={i * 0.1}
              >
                {t}
              </TextReveal>
            ))}
          </h2>
          <p className="font-semibold text-[2rem] tracking-[-0.0625rem] leading-[140%]">
            <TextReveal
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.4}
            >
              {description}
            </TextReveal>
          </p>
        </div>

        <div className="space-y-6">
          <h4 className="text-2xl text-white/60 font-helvetica">
            <TextReveal
              key={`details-title-${details.title}`}
              splitType="lines"
              direction="up"
              duration={0.7}
              stagger={0.08}
              delay={0.6}
            >
              {`(${details.title})`}
            </TextReveal>
          </h4>
          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
            {details.services.map((service: string, i: number) => (
              <p key={i} className="text-2xl font-semibold leading-[130%]">
                <TextReveal
                  splitType="lines"
                  direction="up"
                  duration={0.7}
                  stagger={0.08}
                  key={i}
                  delay={i * 0.2}
                >
                  {service}
                </TextReveal>
              </p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
};