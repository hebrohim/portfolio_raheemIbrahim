import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import axios from "axios";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FaBriefcase } from "react-icons/fa";
import Contact from "./components/Contact";
import { Data } from "./components/Data";
import Footer from "./components/Footer";
function App() {
  

  const [projects, setProjects] = useState(Data);

  const [loading, setloading] = useState(true);

const [darkMode, setdarkMode] = useState(false)
 
  return (
    <div className={darkMode?"dark":""}>
<div className="dark:bg-gray-700" >
<Header darkMode = {darkMode} setdarkMode = {setdarkMode}/>
<HeroSection/>
<AboutMe/>
<Skills/>
<section className="mb-5">
 
        <h1 className="text-xl text-center font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3">
          Projects
        </h1>
        <div className="flex items-center justify-center ">
          <span className="w-10 bg-amber-600 h-1 md:w-12"></span>{" "}
          <FaBriefcase className="text-2xl text-slate-900 mx-1 md:text-3xl" />
          <span className="w-12 bg-amber-600 h-1 md:w-12"> </span>
        </div>
        <h4 className="font-body capitalize text-center font-bold text-md  ">view some of my work</h4>
      </section>
      <div className="flex flex-wrap justify-center">
{projects.map((project)=> <Projects loading ={loading} project = {project}/>)}

</div>


<Contact/>
<Footer darkMode = {darkMode} setdarkMode = {setdarkMode}/>
  </div>

  </div>
  
  );
}

export default App;
