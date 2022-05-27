import { GrGithub, GrLinkedinOption, GrMail, GrYoutube } from "react-icons/gr";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
} from "react-icons/ai";
import { IconItem } from "./components/Layouts/App/Navbar/NavDrawer/SocialItem";

export const SOCIAL_ITEMS: IconItem[] = [
  { Icon: GrGithub, url: "https://github.com/iandev096" },
  { Icon: GrLinkedinOption, url: "https://linkedin.com/iandev096" },
  // { Icon: GrYoutube, url: "https://youtube.com/iandev096" },
  { Icon: GrMail, url: "https://gmail.com/iandev096" },
];

export const SOCIAL_ITEMS2: IconItem[] = [
  { Icon: AiOutlineGithub, url: "https://github.com/iandev096" },
  { Icon: AiOutlineLinkedin, url: "https://linkedin.com/ianyimiah" },
  // { Icon: AiOutlineYoutube, url: "https://youtube.com/iandev096" },
  // { Icon: AiOutlineMail, url: "https://github.com/iandev096" },
];

export const DRAWER_ITEMS = ["About", "Experience", "Work", "Contact"];

export const PROJECT_ITEMS = [
  {
    title: "Food hub",
    sub: "Featured Project",
    description: `A react native mobile application which provides a hub for restaurants to onboard their dishes so that users can order.`,
    tags: ["React native", "Typescript", "Context API"],
    projectUrl: "https://res.cloudinary.com/iandev/video/upload/v1601037464/food-hub/demonstration_lyilka.mp4",
    githubUrl: "https://github.com/iandev096/p-Food-hub",
    imageSrc: "/images/projects/food-hub-thumb.jpeg",
  },
  {
    title: "Runs and Errands",
    sub: "Featured Project",
    description: `A fully functional mobile application for making errands, renting cars, hiring drivers, etc. developed with react native and firebase. State management was handled with the react Context Api.`,
    tags: ["React native", "Typescript", "Context API"],
    projectUrl: "https://res.cloudinary.com/iandev/video/upload/v1601037489/runs-errands/demonstration_rcjqwc.mp4",
    githubUrl: "https://github.com/iandev096/p-runs-errands",
    imageSrc: "/images/projects/runs-errands.jpeg",
  },
  {
    title: "Laundry App",
    sub: "Featured Project",
    description: `A functional react native mobile application for laundry services. State management was handled with the react context API and firebase was used to take care of backend requirements.`,
    tags: ["NextJS", "Firebase", "Spotify API", "Tailwind CSS"],
    projectUrl: "https://res.cloudinary.com/iandev/video/upload/v1601037473/laundry/demonstration_sozpfm.mp4",
    githubUrl: "https://github.com/iandev096/p-laundry-app",
    imageSrc: "/images/projects/laundry-app-thumb.jpeg",
  }
];

export const OTHER_PROJ_ITEMS = [
  {
    title: "Previous Portfolio",
    description: `Built with vanilla javascript, HTML and CSS.`,
    tags: ["Javascript", "CSS", "HTML"],
    projectUrl: "https://my-portfolio-vanilla.vercel.app/",
    githubUrl: "https://github.com/iandev096/my-portfolio-vanilla",
  },
  {
    title: "Maxx Portfolio",
    description: `A portfolio for a UX/UI designer implemented with precision.`,
    tags: ["NextJS", "CSS"],
    projectUrl: "https://maxx-portfolio.vercel.app",
    githubUrl: "#",
  },
  {
    title: "Whatsapp clone",
    description: `A custom build of whatsapp with a working realtime chat functionality. The frontend is in react and backend is in vanilla nodeJS/expressJS with a mongodb and pusher integration to achieve realtime chat functionality.`,
    tags: ["ReactJS", "NodeJS", "Typescript", "Mongodb"],
    projectUrl: "https://my-whatsapp-frontend.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Amazon Clone",
    description: `My own custom simple build of amazon. Built with reactJS with the Context API with a backend built with expressJS and firebase. Stripe was integrated to simulate payment using the sandbox number 4242 4242 4242 4242.`,
    tags: ["ReactJS", "NodeJS", "Typescript"],
    projectUrl: "https://my-amazon.vercel.app/",
    githubUrl: "#",
  },
];
