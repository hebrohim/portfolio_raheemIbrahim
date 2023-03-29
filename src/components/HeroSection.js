import React from "react";
import Button from "./Button";
import me from "./images/me2.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="h-[90vh]">
      <div className="flex flex-col items-center py-20">
        <img
          src={me}
          className="w-40 h-40 rounded-full object-cover border-4 border-amber-600 p-1"
        />
    
        <h4 className="mb-[-.2rem] mt-5 text-3xl font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-amber-600">
          Raheem Ibrahim
        </h4>
        <h4 className=" border-b-amber-600 pb-1 border-dashed border-b-4 text-sm font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-500">
         FrontEnd Developer
        </h4>
        <section hero_btn className="mt-10 flex w-3/4 justify-evenly">
<Button  content = "Contact me" />
<Button  content = "Resume" className= "ml-10"/>
</section>

<section className="social_media">
<ul className="flex w-full justify-end mt-10">
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaWhatsapp className="text-slate-900 text-xl cursor-pointer" />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <HiMail className="text-slate-900 text-xl cursor-pointer" />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaLinkedin className="text-slate-900 text-xl cursor-pointer" />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2">
            <FaGithub className="text-slate-900 text-xl cursor-pointer" />
          </li>
        </ul>

</section>
      </div>
    </div>
  );
};

export default HeroSection;
