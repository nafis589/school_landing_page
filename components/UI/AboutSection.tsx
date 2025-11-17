'use client';

import ParallaxText from '@/components/Common/ScrollVelocity';
import placeholder_1 from '@/public/images/placeholder_1.png';
import placeholder_2 from '@/public/images/placeholder_2.png';
import placeholder_3 from '@/public/images/placeholder_3.png';
import placeholder_4 from '@/public/images/placeholder_4.png';
import placeholder_5 from '@/public/images/placeholder_5.png';
import placeholder_6 from '@/public/images/placeholder_6.png';
import placeholder_7 from '@/public/images/placeholder_7.png';
import placeholder_8 from '@/public/images/placeholder_8.png';
import Image from 'next/image';
import MaskText from '@/components/Common/MaskText';

const AboutSection = () => {
  const rowOne = [placeholder_5, placeholder_1, placeholder_2, placeholder_6];
  const rowTwo = [placeholder_3, placeholder_4, placeholder_7, placeholder_8];

  const mainText = [
    'Educating',
    'Leader',
    'For a better',
    'World'
  ];

  const paragraphText = [
    'GIA is a bilingual institution offering both the Nigerian',
    'and Togolese curricula. We are committed to providing a',
    'balanced and high-quality education that promotes academic',
    'excellence, moral values, and strong bilingual proficiency.'
  ];

  return (
    <section className="bg-[#edf8ff] py-[4.5rem] md:py-[6.25rem] space-y-[6.25rem] md:space-y-[10rem]">
      <div className="flex flex-col md:flex-row items-start justify-between max-w-screen-xl mx-auto w-[90%]">
        <div className="max-w-[43.25rem] text-black font-medium text-[3rem] md:text-[5rem] lg:text-[8rem] leading-[4rem] lg:leading-[8.875rem] tracking-[-0.16rem]">
          <MaskText phrases={mainText} tag="h1" />
        </div>

        <div className="max-w-[22.75rem] text-black leading-[1.375rem] flex flex-col text-sm md:text-base">
          <MaskText phrases={paragraphText} tag="p" />
        </div>
      </div>

      <div className="space-y-4">
        <ParallaxText baseVelocity={40}>
          <div className="inline-flex gap-2 lg:gap-4 flex-shrink-0">
            {rowOne.map((image, i) => (
              <div
                key={i}
                className="w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem]"
              >
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
        <ParallaxText baseVelocity={-40}>
          <div className="inline-flex gap-4 flex-shrink-0">
            {rowTwo.map((image, i) => (
              <div
                key={i}
                className="w-[20rem] sm:w-[20rem] md:w-[24rem] lg:w-[26rem]"
              >
                <Image
                  src={image}
                  alt="placeholder"
                  className="object-contain w-full h-auto"
                  quality={100}
                />
              </div>
            ))}
          </div>
        </ParallaxText>
      </div>
    </section>
  );
};

export default AboutSection;
