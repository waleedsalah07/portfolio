import image from "../src/assets/E-commerce.png";
import image2 from "../src/assets/workshop portfolio.png";
import image3 from "../src/assets/freeman site.png";
import image4 from "../src/assets/watches.png";
import image5 from "../src/assets/workshop resturant.png";

import {
  FaHtml5,
  FaCss3,
  FaBootstrap,
  FaLinkedin,
  FaGithub,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import {
  BiLogoJavascript,
  BiLogoRedux,
  BiLogoTypescript,
} from "react-icons/bi";

import { nanoid } from "nanoid";

export const social = [
  {
    id: nanoid(),
    url: "https://www.linkedin.com/in/waleed-salah-4683b4226/",
    icon: <FaLinkedin />,
  },
  {
    id: nanoid(),
    url: "https://github.com/waleedsalah07",
    icon: <FaGithub />,
  },
  {
    id: nanoid(),
    url: "https://wa.me/+201201834720",
    icon: <FaWhatsapp />,
  },
];

export const skills = [
  {
    id: nanoid(),
    icon: <FaHtml5 />,
    text: "HTML5",
    color: "#e34c26",
  },
  {
    id: nanoid(),
    icon: <FaCss3 />,
    text: "CSS3",
    color: "#264de4",
  },
  {
    id: nanoid(),
    icon: <FaBootstrap />,
    text: "Bootstrap5",
    color: "#563d7c",
  },

  {
    id: nanoid(),
    icon: <BiLogoJavascript />,
    text: "Javascript",
    color: "#F7DF1E",
  },
  {
    id: nanoid(),
    icon: <BiLogoTypescript />,
    text: "Typescript",
    color: "#235a97",
  },
  {
    id: nanoid(),
    icon: <FaReact />,
    text: "React JS",
    color: "#3490dc",
  },
  {
    id: nanoid(),
    icon: <BiLogoRedux />,
    text: "Redux Toolkit",
    color: "#3490dc",
  }
];

export const projects = [
  {
    id: nanoid(),
    title: "e-commerce shop app",
    webUrl: "https://e-commerce-project-bice.vercel.app/",
    githubUrl: "https://github.com/waleedsalah07/E-commerce-project.git",
    description:
      "You can buy different products for your home, searching about products with several filters and also determine the quantity as you like.",
    techniques:
      "This application is made by CSS3 , React JS, React-Hooks, E-commerce api and React Router 6",
    img: image,
  },
  {
    id: nanoid(),
    title: "work shop portfolio",
    webUrl: "https://landing-page-work-shop.vercel.app/",
    githubUrl: "https://github.com/waleedsalah07/landing-page.git",
    description:
      "This modern portfolio is made with new modern styles and techniques and responsive to fit several sizes of devices to save and invest your money with easy steps",
    techniques:
      "This application is made by  css , React JS, React-Hooks and designed from UI/UX design",
    img: image2,
  },
  {
    id: nanoid(),
    title: "freeman-site",
    webUrl: "https://waleedsalah07.github.io/freeman-site/",
    githubUrl: "https://github.com/waleedsalah07/freeman-site.git",
    description:
      "like a portfolio as work shop new and modern styles and techniques and responsive",
    techniques:
      "This application is made by html ,css3 ,bootstrab5 as work shop model,one loagic by javascript as training",
    img: image3,
  },
  {
    id: nanoid(),
    title: "watches store",
    webUrl: "https://waleedsalah07.github.io/Watchs-master/",
    githubUrl: "https://github.com/waleedsalah07/Watchs-master.git",
    description:"site that displays a collection of watches for the purpose of a commercial project that was done as a training for me",
    techniques:
      "This application is made by html ,css3 ,bootstrab5 as work shop model",
    img: image4,
  },
  {
    id: nanoid(),
    title: "restaurant app",
    webUrl: "https://waleedsalah07.github.io/design-site/",
    githubUrl: "https://github.com/waleedsalah07/design-site.git",
    description:
      "This application introduce a service for restaurant to help customers to discover the restaurant, its services, menu and more and it's designed with modern styles and responsive to all sizes for any device",
    techniques:
      "This application is made by html ,css3 ,bootstrab5 as work shop model",
    img: image5,
  },
];
