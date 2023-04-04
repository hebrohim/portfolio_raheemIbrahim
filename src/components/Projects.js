import { React, useEffect, useState } from "react";
import { MdExpandMore,MdExpandLess} from "react-icons/md";
const Projects = ({project,loading}) => {
    const [showContent, setshowContent] = useState(true)


    let {id,name,description,technology,screenShot,github,liveProject} = project
  // console.log(projects)

  return (
   
    
 <>
     
      
      {loading?<h1>loading data ...</h1>:
        
           
                 <div className="w-[80vw] flex flex-col mb-5 md:w-[30vw] md:mx-2 " key={id}>
                <h4 className="font-logoFont capitalize text-center font-bold text-2xl py-2  rounded-t-2xl bg-slate-200">{name}</h4>
                <img src= {screenShot} className= "w-full h-full  object-fill md:h-72"/>
{
    showContent?<button onClick={()=>{setshowContent(!showContent)}} className= " bg-amber-600 p-2 text-xl rounded-b-2xl flex justify-center items-center font-semibold">Expand <MdExpandMore/></button>:
    <div>
                <div className=" p-5 bg-white">
                    <p className="font-semibold">
                        {description}
                    </p>
                </div>
                    <button onClick={()=>{setshowContent(!showContent)}} className= "w-full bg-amber-600 p-2 text-xl rounded-b-2xl flex items-center font-semibold justify-center  ">Hide <MdExpandLess/></button>
</div>
}
                
                </div>

              
        
        
        
        }
  </>
 
  );
};

export default Projects;
