import {
  mobile,
  backend,
  web,
  javascript,
  aratch,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  threejs,
  scraping,
  puppeteer,
  profound,
  gpt,
  memories,
  naseem,
  photograoher,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
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
    title: "Web Scraping",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
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
  {
    name: "scraping",
    icon: scraping,
  },
  {
    name: "puppeteer",
    icon: puppeteer,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "aratech",
    icon: aratch,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Sep 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "profound",
    icon: profound,
    iconBg: "#383E56",
    date: "Oct 2022 - Apr 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
const projects = [
  {
    name: "Naseem Mussafah",
    description:
      " Built a responsive website for Abu Dhabi-based car repair services, enhancing local business visibility and client engagement through SEO",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: naseem,
    source_code_link: "https://github.com/hassanballeh/Nassem",
  },
  {
    name: "Photographer",
    description:
      "Created a photography booking website enabling clients to schedule sessions, preview portfolios, and securely receive their photos—enhancing engagement for photographers and customers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: photograoher,
    source_code_link: "https://github.com/hassanballeh/photographer",
  },

  {
    name: "Memories",
    description:
      " Web application about memories that allows people to post their memories, share them with everyone.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "node js",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: memories,
    source_code_link: "https://github.com/hassanballeh/Memories-back",
  },
  {
    name: "Gpt3",
    description:
      "Web application that talks about artificial intelligence, its importance, the dazzling future, and many of its features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },

      {
        name: "Css",
        color: "pink-text-gradient",
      },
    ],
    image: gpt,
    source_code_link: "https://github.com/hassanballeh/gpt-3",
  },
];

export { services, technologies, experiences, projects };
