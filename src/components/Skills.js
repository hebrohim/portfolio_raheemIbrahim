import React from "react";
import { RiCodeBoxFill } from "react-icons/ri";
import Card from "./Card";

import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaNpm,
  FaGitAlt,
  FaFigma,
  FaSass
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiJavascript,
  SiPostman,
  SiReact,
  SiTypescript
} from "react-icons/si";
import { TbBrandFramerMotion, TbJson } from "react-icons/tb";
import {motion} from "framer-motion"
import { MdVisibility } from "react-icons/md";



// const containerAnimation = {
//   hidden:},
//   visible:{x:0,
//     transition:{type:"spring", stiffness:100,delay:0.9,duration:2,when:"beforeChildren"}}
  
// }



const Skills = () => {
  const mySkills = [
    {
      name: "html",
    },
  ];
  return (
    <motion.div initial ={{opacity:0,x:"-200"}} whileInView={{opacity:1,x:0,transition:{duration:1,when :"beforeChildren"}}}  className=" p-5 text-center">
      <section className="mb-5">
        <h1 className="text-xl font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3 dark:text-white">
          What i can do for you
        </h1>
        <div className="flex items-center justify-center ">
          <span className="w-10 bg-amber-600 h-1 md:w-12"></span>{" "}
          <RiCodeBoxFill className="text-2xl text-slate-900 mx-1 md:text-3xl dark:text-white" />
          <span className="w-12 bg-amber-600 h-1 md:w-12"> </span>
        </div>
      </section>

      {/* SKILL CARDS */}
      <motion.section className="grid grid-cols-2 justify-items-center z-0 md:mx-32 md:grid-cols-3">
        <Card icon={<FaHtml5 className="text-amber-600 text-7xl"  />}  name = "Html"/>
        <Card icon={<FaCss3Alt className="text-amber-600 text-7xl" />} name = "Css" />
        <Card icon={<FaBootstrap className="text-amber-600 text-7xl" />} name = "Bootstrap" />
        <Card icon={<FaSass className="text-amber-600 text-7xl" />} name = "Sass" />
        <Card icon={<SiTailwindcss className="text-amber-600 text-7xl" />} name = "Tailwind" />
        <Card icon={<SiJavascript className="text-amber-600 text-7xl" />} name = "Jacascript" />
        <Card icon={<SiTypescript className="text-amber-600 text-7xl" />} name = "TypeScript" />
        <Card icon={<SiPostman className="text-amber-600 text-7xl" />} name = "Postman" />
        <Card icon={<FaNpm className="text-amber-600 text-7xl" />} name = "Npm" />
        <Card icon={<TbBrandFramerMotion className="text-amber-600 text-7xl" />} name = "Framer Motion"/>
        <Card icon={<SiReact className="text-amber-600 text-7xl" />} name = "React" />
        <Card icon={<TbJson className="text-amber-600 text-7xl" />} name = "Json" />
        <Card icon={<FaGitAlt className="text-amber-600 text-7xl" />} name = "Git" />
        <Card icon={<FaFigma className="text-amber-600 text-7xl" />} name = "Figma" />
      </motion.section>
    </motion.div>
  );
};

export default Skills;
