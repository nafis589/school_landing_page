'use client';
import MaskText from '@/components/Common/MaskText';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import musicIcon from '@/public/svgs/music-rhythm.svg';
import artIcon from '@/public/svgs/art-gallery.svg';
import taekwondoIcon from '@/public/svgs/taekwondo.svg';
import danceIcon from '@/public/svgs/sharp-theaters.svg';
import computerIcon from '@/public/svgs/computer.svg';
import sportIcon from '@/public/svgs/swim.svg';

interface Service {
  title: string;
  description: string;
  icon: string;
}

gsap.registerPlugin(ScrollTrigger);

const services: Service[] = [
  {
    title: 'Music',
    description:
      'Piano, guitar, and vocal lessons designed to develop students’ musical talents.',
    icon: musicIcon,
  },
  {
    title: 'Arts & Painting',
    description:
      'Creative workshops that encourage artistic expression and imagination.',
    icon: artIcon,
  },
  {
    title: 'Taekwondo',
    description:
      'A martial arts program focused on discipline, self-control, and physical fitness.',
    icon: taekwondoIcon,
  },
  {
    title: 'Dance & Theater',
    description:
      'Performing arts activities that build confidence, expression, and creativity.',
    icon: danceIcon,
  },
  {
    title: 'Computer Training',
    description:
      'Introduction to digital tools, programming, and essential technology skills.',
    icon: computerIcon,
  },
  {
    title: 'Swimming & Sports',
    description:
      'Various sports activities that develop endurance, coordination, and teamwork.',
    icon: sportIcon,
  },
];


const ServicesSection = () => {
  const headerArr = ['EXTRACURRICULAR ,', 'ACTIVITIES'];
  const servicesRef = useRef<HTMLDivElement>(null);
  const serviceBoxesRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
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

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const setServiceBoxRef = (el: HTMLElement | null, index: number) => {
    if (el) {
      serviceBoxesRef.current[index] = el;
    }
  };

  return (
    <section className="bg-black pt-[5rem] pb-[7.25rem] relative z-30 isolate overflow-hidden">
      <div className="w-[90%] max-w-screen-xl mx-auto space-y-[6.25rem]">
        <header className="font-medium text-[3rem] md:text-[5rem] max-md:leading-[4rem] tracking-[-0.1rem]">
          <MaskText phrases={headerArr} tag="h1" />
        </header>

        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-10"
        >
          {services.map((service, i) => (
            <article
              key={i}
              ref={(el) => setServiceBoxRef(el, i)}
              className="flex flex-col gap-4"
            >
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
              <h3 className="font-medium text-xl tracking-[-0.025rem]">
                {service.title}
              </h3>
              <p className="font-light tracking-[-0.02rem] text-[#DCDCDC]">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
