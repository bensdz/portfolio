import {
  mobile,
  backend,
  hpc,
  web,
  javascript,
  typescript,
  reactjs,
  tailwind,
  mongodb,
  docker,
  threejs,
  onm,
  webdev,
  app,
  depano,
  idstamp,
  remix,
  nextjs,
  expressjs,
  golang,
  nestjs,
  reactnative,
  covercraft,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "experience",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "HPC Developer",
    icon: hpc,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "React Native",
    icon: reactnative,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "REMIX",
    icon: remix,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "expressjs",
    icon: expressjs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "golang",
    icon: golang,
  },
  {
    name: "nestjs",
    icon: nestjs,
  },
];

const experiences = [
  {
    title: "Full stack Web Developer",
    company_name: "Freelance",
    icon: webdev,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
    ],
  },

  {
    title: "Intership - HPC Developer",
    company_name: "National Office of Meteorology - Algiers",
    icon: onm,
    iconBg: "#383E56",
    date: "Dec 2024 - Dec 2024",
    points: [
      "Introduced to HPC processes for weather forecasting.",
      "Explored HPC infrastructure and parallel programming techniques.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Freelance",
    icon: app,
    iconBg: "#E6DEDD",
    date: "Oct 2024 - Present",
    points: [
      "Developing and maintaining apps using React Native & Expo and other related technologies.",
      "Designing and implementing user interfaces for mobile applications.",
    ],
  },
];

const projects = [
  {
    name: "Depano - Fullstack Uber Clone",
    description:
      "A full-stack web application that allows users to book rides, track their location.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "mysql",
        color: "green-text-gradient",
      },

      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
    ],
    image: depano,
    source_code_link: "https://github.com/bensdz/Depanoapp",
  },
  {
    name: "IDStamp - Fullstack KYC App & Website",
    description:
      "A full-stack web application that allows users to verify their identity using government-issued IDs.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "flutter",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "aws",
        color: "purple-text-gradient",
      },
    ],
    image: idstamp,
    source_code_link: "https://github.com/bensdz/IDstampDash",
  },
  {
    name: "Covercraft - Fullstack Cover Letter Generator",
    description:
      "A full-stack web application that allows users to generate cover letters using AI.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "pink-text-gradient",
      },
      {
        name: "nodejs",
        color: "purple-text-gradient",
      },
    ],
    image: covercraft,
    source_code_link: "https://covercraftapp.vercel.app/",
  },
  // {
  //   name: "Woocommerce - External Payment Integration",
  //   description:
  //     "A plugin that allows users to pay for their orders using an external payment gateway.",
  //   tags: [
  //     {
  //       name: "wordpress",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "woocommerce",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "php",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: jobit,
  //   source_code_link: "https://github.com/bensdz/wc_custom_payment_gateway",
  // },
];

export { services, technologies, experiences, projects };
