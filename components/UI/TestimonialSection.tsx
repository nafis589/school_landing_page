'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import testimonial1 from '@/public/images/testimonial1.jpg';
import testimonial2 from '@/public/images/testimonial2.jpg';
import testimonial3 from '@/public/images/testimonial3.jpg';
interface Testimonial {
  image: any;
  quote: string;
  author: string;
}


gsap.registerPlugin(ScrollTrigger);

const testimonials: Testimonial[] = [
  {
    image: testimonial1,
    quote:
      "My child has grown so much thanks to the extracurricular activities. The music and sports programs helped build confidence and discipline.",
    author: "Sarah Williams – Parent",
  },
  {
    image: testimonial3,
    quote:
      "The excursions and cultural activities opened my daughter's mind to new experiences. She’s always excited to go to school.",
    author: "Emily Johnson – Parent",
  },
];


const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const imageRefs = useRef<(HTMLDivElement | null)[]>([]);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const authorRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const pinTl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: '+=250%',
        pin: true,
        scrub: 1,
      },
    });

    const rotationInterval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => {
      clearInterval(rotationInterval);
      pinTl.kill();
    };
  }, []);

  useEffect(() => {
    const currentImage = imageRefs.current[currentIndex];
    const prevIndex =
      (currentIndex - 1 + testimonials.length) % testimonials.length;
    const prevImage = imageRefs.current[prevIndex];

    gsap.set(currentImage, {
      clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)',
      opacity: 1,
      zIndex: 2,
    });

    gsap.set(prevImage, {
      clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
      opacity: 1,
      zIndex: 1,
    });

    const tl = gsap.timeline();

    tl.to([quoteRef.current, authorRef.current], {
      opacity: 0,
      duration: 0.5,
      y: 20,
    })
      .to(
        currentImage,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        'reveal'
      )
      .to(
        prevImage,
        {
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
          duration: 1.2,
          ease: 'power2.inOut',
        },
        'reveal'
      )
      .to([quoteRef.current, authorRef.current], {
        opacity: 1,
        duration: 0.5,
        y: 0,
        stagger: 0.1,
      });

    return () => {
      tl.kill();
    };
  }, [currentIndex]);

  return (
    <section
      ref={sectionRef}
      className="h-screen relative flex overflow-hidden"
    >
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          ref={(el) => {
            imageRefs.current[index] = el;
          }}
          className="absolute inset-0"
        >
          <Image
            src={testimonial.image}
            alt={`testimonial ${index + 1}`}
            fill
            quality={100}
            priority={index === 0}
            className="object-cover"
          />
           {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="mx-auto w-[90%] max-w-screen-xl flex flex-col self-end pb-[5rem] space-y-5 md:space-y-8 relative z-10">
        <p
          ref={quoteRef}
          className="font-light text-[1.5rem] md:text-[2.25rem] tracking-[-0.045rem] max-w-[42.3125rem]"
        >
          &quot;{testimonials[currentIndex].quote}&quot;
        </p>

        <h3
          ref={authorRef}
          className="text-2xl md:text-[2.25rem] font-medium tracking-[-0.045rem]"
        >
          {testimonials[currentIndex].author}
        </h3>
      </div>
    </section>
  );
};

export default TestimonialSection;
