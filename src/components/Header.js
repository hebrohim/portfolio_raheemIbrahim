import { React, useState } from "react";
// import logo from "./images/icons8-source-code-100.png"
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import logo from "./images/icons8-developer-80.png";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";

const Header = () => {
  const menuItems = ["Home", "About", "Projects", "Contact"];

  const [showMenuList, setShowMenuList] = useState(false);

  const showMenu = () => {
    setShowMenuList(!showMenuList);
  };

  return (
    <div>
      <nav className=" px-2 h-[10vh] bg-slate-200 shadow-md shadow-gray-500 flex justify-between items-center md:px-5 ">
        <div className="flex items-center ">
          <img src={logo} className="w-12 md:w-14 "></img>

          <h1 className="font-logoFont -tracking-tighter text-xl text-amber-600 font-">
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

     
        <span className="text-amber-500 text-3xl ">
          {showMenuList ? (
            <HiX onClick={showMenu} />
          ) : (
            <HiMenuAlt3 onClick={showMenu} className = "md:hidden" />
          )}
        </span>
        <ul className="hidden md:flex ">
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Home</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">About</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Projects</li>
            <li className="mr-3 px-2  hover:bg-amber-600 rounded-lg cursor-pointer border-2 border-slate-900 font-semibold">Contact</li>
        </ul>
      </nav>
      {showMenuList ? (
        <ul className="  w-1/2  py-10 flex flex-col items-center bg-[#dfdddd21] rounded-b-lg shadow-md shadow-black absolute left-1/4 top-[10vh]b ">
          {menuItems.map((menuItem) => {
            return (
              <li className="my-3 px-2 font-bold hover:border-r-2 hover:border-b-2 hover:shadow-md rounded-md border-amber-500  text-slate-900 md:mb-10 md:text-xl">
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
