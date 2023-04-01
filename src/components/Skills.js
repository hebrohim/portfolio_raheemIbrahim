import React from "react";
import { RiCodeBoxFill } from "react-icons/ri";
import Card from "./Card";

import { FaHtml5 ,FaCss3Alt,FaBootstrap,FaNpm,FaGitAlt,FaFigma} from "react-icons/fa";
import { SiTailwindcss,SiJavascript ,SiPostman,SiReact} from "react-icons/si";
import { TbBrandFramerMotion,TbJson } from "react-icons/tb";

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

      <section className=" mx-5 flex flex-wrap justify-between md:mx-32">

        {/* SKILL CARDS */}

      <div className="card ">
    <span><FaHtml5 className='text-amber-600 text-7xl'/></span><br/>
    {/* <span><FaCss3Alt className='text-amber-600 text-7xl'/></span> */}
</div>
      <div className="card ">
  
    <span><FaCss3Alt className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><FaBootstrap
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><SiTailwindcss
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><SiJavascript
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><SiPostman
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><FaNpm
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><TbBrandFramerMotion
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><SiReact
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><TbJson
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><FaGitAlt
 className='text-amber-600 text-7xl'/></span>
</div>
      <div className="card ">
  
    <span><FaFigma
 className='text-amber-600 text-7xl'/></span>
</div>


      </section>
    </div>
  );
};

export default Skills;
