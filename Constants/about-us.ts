// constants/about-us.ts

export interface IAboutUsPillar {
  image: string;
  title: string;
  subtitle?: string;
  description: string;
}

export const ABOUT_US_PILLARS: IAboutUsPillar[] = [
  {
    image: "/icons/school-building.svg", // Replace with actual icon path
    title: "Who We Are",
    subtitle: "Our Identity",
    description:
      "God Is Alive Academy (GIA) is a distinguished bilingual institution offering comprehensive education from Nursery through Secondary levels. We combine academic excellence with strong moral values, creating a nurturing environment where students thrive both intellectually and spiritually.",
  },
  {
    image: "/icons/mission-compass.svg",
    title: "Our Mission",
    subtitle: "Our Purpose",
    description:
      "To provide world-class bilingual education that develops well-rounded individuals equipped with academic excellence, strong character, and spiritual foundation. We prepare students to become responsible global citizens who positively impact their communities.",
  },
  {
    image: "/icons/vision-telescope.svg",
    title: "Our Vision",
    subtitle: "Our Aspiration",
    description:
      "To be West Africa's leading bilingual educational institution, recognized for academic excellence, character development, and innovative teaching methodologies. We envision a generation of leaders who exemplify integrity, compassion, and excellence in all endeavors.",
  },
  {
    image: "/icons/academic-books.svg",
    title: "Academic Programs",
    subtitle: "Full Spectrum Education",
    description:
      "We offer a complete educational journey: Nursery (early childhood foundation), Primary (fundamental skills building), and Secondary (advanced preparation for higher education). Our bilingual curriculum seamlessly integrates English and French instruction at every level.",
  },
  {
    image: "/icons/values-heart.svg",
    title: "Our Core Values",
    subtitle: "What We Stand For",
    description:
      "Excellence in all endeavors, Integrity and honesty, Respect for diversity, Spiritual growth and moral development, Innovation in learning, Community service, and Global citizenship. These values guide every aspect of our educational approach.",
  },
  {
    image: "/icons/globe-languages.svg",
    title: "Bilingual Excellence",
    subtitle: "Language Mastery",
    description:
      "Our distinctive bilingual program ensures students achieve fluency in both English and French. Through immersive instruction and culturally rich experiences, we prepare students for success in our interconnected global society and open doors to international opportunities.",
  },
];

// Optional: Additional About Us content for other sections

export const GIA_HIGHLIGHTS = {
  established: "2010",
  students: "500+",
  teachers: "60+",
  successRate: "98%",
  languages: ["English", "French"],
  facilities: [
    "Modern classrooms",
    "Science laboratories",
    "Computer labs",
    "Sports facilities",
    "Library and media center",
  ],
  accreditations: [
    "Ministry of Education approved",
    "International curriculum alignment",
  ],
};