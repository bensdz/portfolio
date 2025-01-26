import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  onm,
  webdev,
  app,
  depano,
  idstamp,
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
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
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
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
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

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    source_code_link: "https://github.com/",
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

export { services, technologies, experiences, testimonials, projects };
