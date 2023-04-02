import React from 'react'
import {FaBriefcase} from "react-icons/fa";
const Projects = () => {
  return (
    <div>
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



    </div>
  )
}

export default Projects