import { React, useState } from "react";
// import logo from "./images/icons8-source-code-100.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "./images/icons8-developer-80.png";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";
import { MdDarkMode } from "react-icons/md";

const Header = () => {
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const [showMenuList, setShowMenuList] = useState(false);

  const showMenu = () => {
    setShowMenuList(!showMenuList);
  };

  return (
    <div>
      <nav className="fixed top-0 w-screen z-10 px-2 h-[10vh] bg-slate-200 shadow-md shadow-gray-500 flex justify-between items-center md:px-5">
        <div className="flex items-center  ">
          <img src={logo} className="w-10 md:w-12 "></img>

          <h1 className="font-logoFont -tracking-tighter text-md md:text-xl text-amber-600 font-">
            Ibrahim
          </h1>
        </div>

        <ul className=" hidden  md:flex w-full justify-end mr-10">
          <li className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaWhatsapp className="text-slate-900 text-md cursor-pointer" />
          </li>
          <li className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <HiMail className="text-slate-900 text-md cursor-pointer" />
          </li>
          <li className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaLinkedin className="text-slate-900 text-md cursor-pointer" />
          </li>
          <li className="mr-2 w-6 h-6 flex items-center justify-center rounded-lg border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaGithub className="text-slate-900 text-md cursor-pointer" />
          </li>
        </ul>
        <span className="text-sm mr-[1.4rem] flex items-center text-amber-900 font-medium absolute right-0 bottom-0 hover:cursor-pointer hover:text-black"> <MdDarkMode/>darkMode</span> 

     
        <span className="text-amber-500 text-3xl ">
          {showMenuList ? (
            <HiX onClick={showMenu} className = " shadow-md " />
          ) : (
            <HiMenuAlt3 onClick={showMenu} className = "md:hidden shadow-md " />
          )}
        </span>
        
        <ul className="hidden md:flex ">
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Home</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">About</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Projects</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Contat</li> 
        </ul>
      </nav>
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
    </div>
  );
};

export default Header;
