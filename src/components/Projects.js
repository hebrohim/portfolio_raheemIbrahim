import { React, useEffect, useState } from "react";
import { MdExpandMore,MdExpandLess} from "react-icons/md";
const Projects = ({project,loading}) => {
    const [showContent, setshowContent] = useState(true)


    let {id,name,description,technology,screenShot,github,liveProject} = project
  // console.log(projects)

  return (
    <div className="px-5">
    
 
      <section>
        {loading?<h1>loading data ...</h1>:
        
        
            
                 <div className="w-[90vw] mb-5" key={id}>
                <img src= {screenShot} className= "w-full rounded-t-2xl object-cover "/>
{
    showContent?<button onClick={()=>{setshowContent(!showContent)}} className= "bg-amber-600 p-2 text-xl rounded-md flex items-center mt-4 font-semibold">Expand <MdExpandMore/></button>:
                <div className=" p-5 rounded-b-2xl bg-white">
                    <h4 className="font-logoFont capitalize text-center font-bold text-2xl">{name}</h4>
                    <p className="font-semibold">
                        {description}
                    </p>
                    <button onClick={()=>{setshowContent(!showContent)}} className= "bg-amber-600 p-2 text-xl rounded-md flex items-center mt-4 font-semibold">Hgit aide <MdExpandLess/></button>
                </div>

}
                
                </div>
        
        
        
        }
      </section> 
    </div>
  );
};

export default Projects;
