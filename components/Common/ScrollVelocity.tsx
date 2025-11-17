'use client';
import React, { useRef, useLayoutEffect, useState, ReactNode } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

interface ParallaxTextProps {
  children: ReactNode;
  baseVelocity?: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxTextProps) {
  const baseX = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);
  const lastDelta = useRef(0);
  const animationId = useRef<number>(0);

  // Mesurer les largeurs une fois le DOM rendu
  useLayoutEffect(() => {
    const updateWidths = () => {
      if (containerRef.current && contentRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const contentRect = contentRef.current.getBoundingClientRect();
        
        setContainerWidth(containerRect.width);
        setContentWidth(contentRect.width / 2); // Diviser par 2 car on duplique le contenu
      }
    };

    updateWidths();

    // Recalculer sur le redimensionnement
    const resizeObserver = new ResizeObserver(updateWidths);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
      if (animationId.current) {
        cancelAnimationFrame(animationId.current);
      }
    };
  }, []);

  // Animation frame optimisée
  useAnimationFrame((t, delta) => {
    // Limiter le delta pour éviter les sauts
    const constrainedDelta = Math.min(delta, 100); // Max 100ms entre les frames
    
    let moveBy = directionFactor.current * baseVelocity * (constrainedDelta / 1000);

    // Gestion plus fluide de la direction
    const currentVelocity = velocityFactor.get();
    if (currentVelocity < 0) {
      directionFactor.current = -1;
    } else if (currentVelocity > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * currentVelocity;

    const newX = baseX.get() + moveBy;
    
    // Wrap infini sans sauts
    if (contentWidth > 0) {
      const wrappedX = ((newX % contentWidth) + contentWidth) % contentWidth;
      baseX.set(wrappedX);
    } else {
      baseX.set(newX);
    }

    lastDelta.current = constrainedDelta;
  });

  // Transformation avec wrap infini
  const x = useTransform(baseX, (v) => {
    if (!contentWidth) return 0;
    
    // Calcul du wrap avec transition continue
    const wrappedX = -((v % contentWidth + contentWidth) % contentWidth);
    return wrappedX;
  });

  return (
    <div className="overflow-hidden w-full relative">
      <motion.div
        ref={containerRef}
        className="flex flex-nowrap gap-4 whitespace-nowrap"
        style={{ x }}
      >
        <div ref={contentRef} className="flex flex-nowrap gap-4">
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}