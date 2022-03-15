import { GrGithub, GrLinkedinOption, GrMail, GrYoutube } from "react-icons/gr";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineYoutube,
  AiOutlineMail,
} from "react-icons/ai";
import { IconItem } from "./Navbar/NavDrawer/SocialItem";

export const SOCIAL_ITEMS: IconItem[] = [
  { Icon: GrGithub, url: "https://github.com/iandev096" },
  { Icon: GrLinkedinOption, url: "https://linkedin.com/iandev096" },
  { Icon: GrYoutube, url: "https://youtube.com/iandev096" },
  { Icon: GrMail, url: "https://gmail.com/iandev096" },
];

export const SOCIAL_ITEMS2: IconItem[] = [
  { Icon: AiOutlineGithub, url: "https://github.com/iandev096" },
  { Icon: AiOutlineLinkedin, url: "https://linkedin.com/iandev096" },
  { Icon: AiOutlineYoutube, url: "https://youtube.com/iandev096" },
  // { Icon: AiOutlineMail, url: "https://github.com/iandev096" },
];

export const DRAWER_ITEMS = ["About", "Experience", "Work", "Contact"];
