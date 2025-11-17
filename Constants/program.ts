import program_1  from "@/public/images/Program_1.png";
import program_2  from "@/public/images/Program_2.png";
import program_3  from "@/public/images/Program_3.png";

export interface IServices {
  title: string[];
  description: string;
  details: {
    title: string;
    services: string[];
  };
  image: any;
}


export const SERVICES: IServices[] = [
  {
    title: ["Nursery", ""],
    description:
      "Provide a warm, playful early learning space that builds strong bilingual foundations.",
    details: {
      title: "Core Learning Areas",
      services: [
        "Early Literacy",
        "Creative Activities",
        "Social Development",
        "Intro to Bilingualism",
      ],
    },
    image: program_1,
  },
  {
    title: ["Primary", ""],
    description:
      "Develop solid academic skills through structured bilingual lessons and active learning.",
    details: {
      title: "Academic Subjects",
      services: [
        "English Studies",
        "French Language",
        "Math & Science",
        "Civic Education",
      ],
    },
    image: program_2,
  },
  {
    title: ["Secondary", ""],
    description:
      "Prepare learners for national and international exams through rigorous bilingual training.",
    details: {
      title: "Programme Options",
      services: [
        "Exam Preparation",
        "Core Sciences",
        "Humanities Tracks",
        "ICT & Research",
      ],
    },
    image: program_3,
  },
];