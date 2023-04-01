import React from "react";
import Button from "./Button";
import me from "./images/me2.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="h-[100vh] w-full md:flex">
      <div className="flex my-20 flex-col w-full items-center py-20 md:flex-row-reverse md:justify-around">
        <img
          src={me}
          className="w-40 h-40 rounded-full object-cover border-4 border-amber-600 p-1 md:w-60 md:h-60 md:border-4"
        />
    <section className="flex flex-col justify-center items-center">
        <h4 className="mb-[-.2rem] mt-5 text-3xl font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-amber-600 md:text-5xl" >
          Raheem Ibrahim
        </h4>
        <h4 className=" border-b-amber-600 pb-1 border-dashed border-b-4 text-sm font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-500 md:text-2xl">
         FrontEnd Developer
        </h4>
        <div hero_btns className="mt-10 flex w-full justify-around ">
<Button  content = "Contact me" />
<Button  content = "Resume" className= "ml-10"/>
</div>

<section className="social_media">
<ul className="flex w-full justify-end mt-10">
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5">
            <FaWhatsapp className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 " />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5">
            <HiMail className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 " />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5">
            <FaLinkedin className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 " />
          </li>
          <li className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5">
            <FaGithub className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 " />
          </li>
        </ul>

</section>

</section>
      </div>
    </div>
  );
};

export default HeroSection;
