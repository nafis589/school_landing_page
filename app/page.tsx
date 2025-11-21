
import { Preloader, HeroSection, AboutSection, AudienceSection, ProgramSection, ActivitySection, TestimonialSection, Footer } from '@/components';

// Exemple de données minimal pour le Footer. Remplacez par les vraies données CMS.
const footerData = {
  marquee: { text: "GOD IS ALIVE ACADEMY – Bilingual Excellence for a brighter future" },

  newsletter: {
    title: "Subscribe to our newsletter",
    inputPlaceholder: "Votre email",
    buttonText: "S'inscrire",
  },

  logo: { asset: { url: "/images/hero_banner.jpg" }, alt: "School logo" },

  navLinks: [
    { text: "Home", url: "/" },
    { text: "About Us", url: "/about" },
    { text: "Academics", url: "/academics" },
    { text: "Admissions", url: "/admissions" },
    { text: "Gallery", url: "/gallery" },
    { text: "Contact", url: "/contact" },
  ],

  contact: {
    address: "Avenou total, opposite Akif, behind Astorya hotel Lome - Togo",
    phone: "+228 96979357",
    phone2: "+228 90 00 00 00", // si tu veux retirer, je l’enlève
    email: "godisaliveacademyegaa@gmail.com",
    hours: "Mon–Fri: 7:30 AM – 3:00 PM",
  },

  socialLinks: [
    { platform: "facebook", url: "https://facebook.com", icon: { asset: { url: "/svgs/music-rhythm.svg" } } },
    { platform: "instagram", url: "https://instagram.com", icon: { asset: { url: "/svgs/art-gallery.svg" } } },
  ],

  copyright:
    "© 2025 GOD IS ALIVE ACADEMY – Bilingual Excellence for a brighter future.",
};


export default function Home() {
  return (
    <main className="font-helvetica font-normal text-white">
      <Preloader />
      <HeroSection />
      <AboutSection />
      <AudienceSection />
      <ProgramSection />
      <ActivitySection />
      <TestimonialSection />
      <Footer footer={footerData} />
    </main>
  );
}
