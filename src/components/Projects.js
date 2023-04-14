import { React, useEffect, useState } from "react";
import { MdExpandMore,MdExpandLess} from "react-icons/md";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Projects = ({project,loading}) => {
    const [showContent, setshowContent] = useState(true)

const [displayHover, setdisplayHover] = useState(false)
    let {id,name,description,technology,screenShot,github,liveProject} = project
// console.log(project)


  const displayHoverBox = () =>{
    setdisplayHover(true)
  }

  const hideHoverBox = () =>{
    setdisplayHover(!displayHover)
  }
  return (
   
    
 <>
     
  
        
        
                 <div className="w-[80vw] flex flex-col mb-5 md:w-[30vw] md:mx-2 relative " key={id}>
                <h4 className="font-logoFont capitalize text-center font-bold text-2xl py-2  rounded-t-2xl bg-slate-200">{name}</h4>
                
                <img src= {screenShot} className= "w-full h-full  object-fill md:h-72" />
              { displayHover?
               <div className="bg-[#ffffffda] text-amber-600 absolute w-full rounded-t-2xl h-1/2 md:h-[30vh] p-20">
              <a href={github}><span className="text-md font-semibold flex items-center">Source code<FaGithub className="ml-1"/></span></a> 
              <a href={liveProject}><span className="text-md font-semibold flex items-center">link to live Project<FaGithub className="ml-1"/></span></a> 
               </div> :null
                }

   { showContent?<button onClick={()=>{setshowContent(!showContent); displayHoverBox()}} className= " bg-amber-600 p-2 text-xl rounded-b-2xl flex justify-center items-center font-semibold">Expand <MdExpandMore/></button>:
    <div>
                <div className=" p-5 bg-white">
                    <p className="text-sm text-justify md:text-base ">
                        {description}
                    </p>
                </div>
                    <button onClick={()=>{setshowContent(!showContent); hideHoverBox()}} className= "w-full bg-amber-600 p-2 text-xl rounded-b-2xl flex items-center font-semibold justify-center  ">Hide <MdExpandLess/></button>
</div>
}
                
                </div>

              
        
        
        
        
  </>
 
  );
};

export default Projects;
