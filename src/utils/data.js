import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { LuGraduationCap } from "react-icons/lu";

export const experiencesData = [
  {
    title: "Nanyang Technological University",
    location: "Renaissance Engineering Programme",
    description: `B.E.Sc Computer Science, M.Sc in Technology Management. Prospective exchange student in UC Berkeley. Relevant Clubs: NTU Business Solutions, NTU MLDA`,
    icon: React.createElement(LuGraduationCap),
    date: "2022-2026",
    label: [],
    src: "https://i.pinimg.com/originals/6a/7f/2c/6a7f2c506c9d736b545073a2a0df6d5e.png",
  },
  {
    title: "Research Assistant",
    location: "SCALE@NTU",
    description:
      "I helped develop a front-end visualistion tool for a MAPF algorithm and integrated backend",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
    label: ["C#", "OOP"],
    src: "https://i.pinimg.com/originals/6a/7f/2c/6a7f2c506c9d736b545073a2a0df6d5e.png",
  },
  {
    title: "Account Executive Intern",
    location: "Wunderman Thompson",
    description:
      "I collaborated with Dell Marketing Team to ensure sustainable accout growth, helping to increase advertisement outreact",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
    label: ["BD", "PowerPoint"],
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wunderman_thompson_logo.png/1200px-Wunderman_thompson_logo.png",
  },
];

export const carouselItems = [
  {
    title: "DateGoWhere",
    description:
      "Web application for users to plan and browse a catalogue of dates. Built with Vite using Mantine UI.",
    tag: ["React.js", "Firebase", "Maps API"],
    imgSrc: "/assets/CarouselItems/thumbnail.png",
    live: "",
    repo: "https://github.com/mcxpm/DateGoWhere",
  },
  {
    title: "RentSG",
    description:
      "Mobile-first site that helps track overstayers, equipped with OpenAI API with further plans to integrate Azure's Document Intelligence",
    tag: ["React.js", "Firebase", "OpenAI"],
    imgSrc: "/assets/CarouselItems/RentSG_Picture.png",
    live: "https://rentsg.vercel.app/",
    repo: "https://github.com/RyanLauQF/RentSG",
  },
  {
    title: "Waffle Place Reviews",
    description:
      "Full Stack web application that stores waffle places and allows users to rate them.",
    tag: ["Node.js", "MongoDB", "Express"],
    imgSrc: "/assets/CarouselItems/waffPlace.png",
    live: "",
    repo: "",
  },
];

export const skillsData = [
  {
    id: 0,
    title: "Frontend",
    tags: ["React.js", "Next.js", "Angular", "Material UI"],
    level: ["Experienced", "Experienced", "Basic", "Experienced"],
    imgUrl: ["react", "nextjs", "angularjs", "materialui"],
  },
  {
    id: 1,
    title: "Backend",
    tags: ["Node.js", "Express.js", "Git", "PostgreSQL"],
    level: ["Experienced", "Intermediate", "Experienced", "Intermediate"],
    imgUrl: ["nodejs", "express", "git", "postgresql"],
  },
  {
    id: 2,
    title: "Things I'm learning",
    tags: ["Rust", "Bash", "AWS", "Docker"],
    level: ["Basic", "Basic", "Basic", "Basic"],
    imgUrl: ["rust", "bash", "amazonwebservices", "docker"],
  },
];
