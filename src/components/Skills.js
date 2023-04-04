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
} from "react-icons/si";
import { TbBrandFramerMotion, TbJson } from "react-icons/tb";

const Skills = () => {
  const mySkills = [
    {
      name: "html",
    },
  ];
  return (
    <div className=" p-5 text-center">
      <section className="mb-5">
        <h1 className="text-xl font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3">
          What i can do for you
        </h1>
        <div className="flex items-center justify-center ">
          <span className="w-10 bg-amber-600 h-1 md:w-12"></span>{" "}
          <RiCodeBoxFill className="text-2xl text-slate-900 mx-1 md:text-3xl" />
          <span className="w-12 bg-amber-600 h-1 md:w-12"> </span>
        </div>
      </section>

      {/* SKILL CARDS */}
      <section className="grid grid-cols-2 justify-items-center z-0 md:mx-32 md:grid-cols-3">
        <Card icon={<FaHtml5 className="text-amber-600 text-7xl"  />}  name = "Html"/>
        <Card icon={<FaCss3Alt className="text-amber-600 text-7xl" />} name = "Css" />
        <Card icon={<FaBootstrap className="text-amber-600 text-7xl" />} name = "Bootstrap" />
        <Card icon={<FaSass className="text-amber-600 text-7xl" />} name = "Sass" />
        <Card icon={<SiTailwindcss className="text-amber-600 text-7xl" />} name = "Tailwind" />
        <Card icon={<SiJavascript className="text-amber-600 text-7xl" />} name = "Jacascript" />
        <Card icon={<SiPostman className="text-amber-600 text-7xl" />} name = "Postman" />
        <Card icon={<FaNpm className="text-amber-600 text-7xl" />} name = "Npm" />
        <Card icon={<TbBrandFramerMotion className="text-amber-600 text-7xl" />} name = "Framer Motion"/>
        <Card icon={<SiReact className="text-amber-600 text-7xl" />} name = "React" />
        <Card icon={<TbJson className="text-amber-600 text-7xl" />} name = "Json" />
        <Card icon={<FaGitAlt className="text-amber-600 text-7xl" />} name = "Git" />
        <Card icon={<FaFigma className="text-amber-600 text-7xl" />} name = "Figma" />
      </section>
    </div>
  );
};

export default Skills;
