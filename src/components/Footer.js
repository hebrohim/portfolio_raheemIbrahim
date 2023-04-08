import { React, useState } from "react";
// import logo from "./images/icons8-source-code-100.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "./images/icons8-developer-80.png";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Footer = () => {
  const menuItems = ["Home", "About", "Projects", "Contact"];
const currentYear = new Date().getFullYear()
  const [showMenuList, setShowMenuList] = useState(false);

  const showMenu = () => {
    setShowMenuList(!showMenuList);

};
// console.log(currentYear);

  return (
    <div className="h-[10vh] bg-slate-200 shadow-xl shadow-gray-500 flex flex-col justify-around items-center md:px-10 md:flex-row dark:bg-black dark:text-white">

       <p className="font-semibold">
       Built with React,TailwindCss and Framer Motion
       </p>

       <p className="font-semibold dark:text-white">
       &copy;Raheem Ibrahim {currentYear}
    </p>
    </div>

   
     
  );
};

export default Footer;
