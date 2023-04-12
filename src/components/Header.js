import { React, useState } from "react";
// import logo from "./images/icons8-source-code-100.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "./images/icons8-developer-80.png";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";
import { motion } from "framer-motion";

const navBarAnimation = {
  hidden:{y:-300},
  visible:{y:0,transition:{type:"spring",stiffness:300}}
}

const navContentAnimation = {
  hidden:{y:-300},
  visible:{y:0,transition:{type:"spring",duration:1,stiffness:500 }}
}

// BUTTON ANIMATION
const buttonAnimation = {
  whileHover:{scale:1.1 ,boxShadow:"0px 0px 10px black",originX:0},
    transition :{type:"spring" ,stiffness:300}
}

// HEADER COMPONENTS STARTS HERE

const Header = ({darkMode,setdarkMode}) => {
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const [showMenuList, setShowMenuList] = useState(false);

  const showMenu = () => {
    setShowMenuList(!showMenuList);
  };

  return (
    <motion.div>
      <motion.nav variants={navBarAnimation} initial ="hidden" animate="visible" className="fixed top-0 w-screen z-10 px-2 h-[10vh] bg-slate-200 shadow-md shadow-gray-500 flex justify-between items-center md:px-5 dark:bg-gray-600 dark:border-white">
        <motion.div  variants={navContentAnimation} initial ="hidden" animate="visible" className="flex items-center  " >
          <motion.img whileHover={{cursor: "grab"}}  initial={{rotate:0,skew:0}} animate = {{rotate:360,skew:180}} transition= {{duration:6}} src={logo} drag dragConstraints ={{left:0,right:500,top:0,bottom:500}}   className="w-10 md:w-12" />

          <motion.h1  initial={{rotate:0,skew:0}} animate = {{rotate:360,skew:180}} transition= {{duration:6}} className="font-logoFont -tracking-tighter text-md md:text-xl text-amber-600 font-">
            Ibrahim
          </motion.h1>
        </motion.div>

        <motion.ul variants={navContentAnimation} initial ="hidden" animate="visible"  className=" hidden  md:flex w-full justify-end mr-10">
          <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2 dark:border-white">
            <FaWhatsapp className="text-slate-900 text-md cursor-pointer dark:text-white" />
          </motion.li>
          <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2 dark:border-white">
            <HiMail className="text-slate-900 text-md cursor-pointer dark:text-white" />
          </motion.li>
          <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2 dark:border-white">
            <FaLinkedin className="text-slate-900 text-md cursor-pointer dark:text-white" />
          </motion.li>
          <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2 dark:border-white">
            <FaGithub className="text-slate-900 text-md cursor-pointer dark:text-white" />
          </motion.li>
        </motion.ul>
        <motion.span variants={navContentAnimation} initial ="hidden" animate="visible"   className="text-sm mr-[1.4rem] flex items-center text-black font-medium absolute right-0 bottom-0 hover:cursor-pointer hover:text-black dark:text-white" onClick={()=>{setdarkMode(!darkMode)}}> <MdDarkMode/>
       { darkMode?
        "lightMode":"DarkMode"}
        </motion.span> 

     
        <motion.span variants={navContentAnimation} initial ="hidden" animate="visible" className="text-amber-500 text-3xl ">
          {showMenuList ? (
            <HiX onClick={showMenu} className = " shadow-md " />
          ) : (
            <HiMenuAlt3 onClick={showMenu} className = "md:hidden shadow-md " />
          )}
        </motion.span>
        
        <motion.ul variants={navContentAnimation} initial ="hidden" animate="visible"  className="hidden md:flex ">
            <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold dark:border-white dark:text-white">Home</motion.li>
            <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold dark:border-white dark:text-white">About</motion.li>
            <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold dark:border-white dark:text-white">Projects</motion.li>
            <motion.li variants={buttonAnimation} whileHover = "whileHover" transition= "transition" className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold dark:border-white dark:text-white">Contact</motion.li> 
        </motion.ul>
      </motion.nav>
      {showMenuList ? (
        <ul className="  w-screen h-[90vh]  py-10 flex flex-col items-center bg-[#dfddddcb] rounded-b-lg shadow-md shadow-black absolute right-0 top-[10vh] ">
          {menuItems.map((menuItem) => {
            return (
              <li className=" text-xl my-3 px-5 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md border-amber-500  text-slate-900 md:mb-10 md:text-xl">
                {menuItem}
              </li>
            );
          })}
        </ul>
      ) : null}
    </motion.div>
  );
};

export default Header;
