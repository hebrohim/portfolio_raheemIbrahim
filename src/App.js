import { motion } from "framer-motion";
import { React, useEffect, useState } from "react";
import axios from "axios";
import AboutMe from "./components/AboutMe";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { FaBriefcase } from "react-icons/fa";

function App() {
  const baseURL = "http://localhost:3000/projects";

  const [projects, setProjects] = useState([]);

  const [loading, setloading] = useState(true);

  useEffect(() => {
   setloading(true)
    axios.get(baseURL).then((response) => {
      setProjects(response.data);
      setloading(false)
    });
  }, []);
 
  return (
<div>
<Header/>
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
      </section>
      <div className="flex flex-wrap justify-center">
{projects.map((project)=> <Projects loading ={loading} project = {project}/>)}

</div>
  </div>
  );
}

export default App;
