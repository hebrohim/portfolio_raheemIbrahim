import React from "react";
import Button from "./Button";
import me from "./images/me2.png";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiMail, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import resume from "./raheemIbrahim.pdf"
// BUTTON ANIMATION
const buttonAnimation = {
  whileHover: { scale: 1.1, boxShadow: "0px 0px 10px black", originX: 0 },
  transition: { type: "spring", stiffness: 300 },
};
const HeroSection = () => {
  return (
    <div id = "HeroSection" className="h-[100vh] w-full md:flex">
      <div className="flex mt-20 flex-col w-full items-center py-20 md:flex-row-reverse md:justify-around">
        <motion.div
          initial={{ opacity: 0, x: "100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 2, stiffness: 100 }}
        >
          <motion.img
            drag
            dragConstraints={{ left: 0, right: 100, top: 0, bottom: 100 }}
            dragElastic={2}
            whileHover={{ boxShadow: "0px 0px 10px black", cursor: "grab" }}
            initial = {{opacity:0}} animate = {{opacity:1}}
            src={me}
            className="w-40 h-40 rounded-full object-cover border-4 border-amber-600 p-1 md:w-60 md:h-60 md:border-4"
          />
        </motion.div>
        <motion.section
          initial={{ opacity: 0, x: "-100vw" }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: "spring", delay: 2, stiffness: 100 }}
          className="flex flex-col justify-center items-center"
        >
          <h4 className="mb-[-.2rem] mt-5 text-3xl font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-700 to-amber-600 md:text-5xl dark:bg-gradient-to-t dark:from-slate-100 dark:to-amber-600">
            Raheem Ibrahim
          </h4>
          <h4 className=" border-b-amber-600 pb-1 border-dashed border-b-4 text-sm font-myName font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-500 md:text-2xl dark:bg-gradient-to-t dark:from-slate-100 dark:to-amber-600">
            FrontEnd Developer
          </h4>
          <div hero_btns className="mt-10 flex w-full justify-around ">
          <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-60} duration={500}><Button content="Contact me" /></Link>
            <a href={resume} download = "001RaheemIbrahim"><Button content="Resume" className="ml-10" /></a>
          </div>

          <section className="social_media">
            <ul className="flex w-full justify-end mt-10">
              <motion.li
                variants={buttonAnimation}
                whileHover="whileHover"
                transition="transition"
                className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5 dark:border-white"
              >
                <FaWhatsapp className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 dark:text-white " />
              </motion.li>
              <motion.li
                variants={buttonAnimation}
                whileHover="whileHover"
                transition="transition"
                className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5 dark:border-white"
              >
              <a href="mailto:raheemibrohim@gmail.com"> <HiMail className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 dark:text-white" /></a>
              </motion.li>
              <motion.li
                variants={buttonAnimation}
                whileHover="whileHover"
                transition="transition"
                className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5 dark:border-white"
              >
                <a href="https://www.linkedin.com/in/raheem-ibrahim-037940136/"> <FaLinkedin className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 dark:text-white" /></a>
              </motion.li>
              <motion.li
                variants={buttonAnimation}
                whileHover="whileHover"
                transition="transition"
                className="mr-2 w-8 h-8 flex items-center justify-center rounded-full border-slate-900  hover:bg-amber-600 cursor-pointer border-2 md:w-12 md:h-12 md:border-4 md:mr-5 dark:border-white"
              >
                 <a href="https://www.github.com/hebrohim"><FaGithub className="text-slate-900 text-xl cursor-pointer md:w-8 md:h-8 dark:text-white" /> </a>
              </motion.li>
            </ul>
          </section>
        </motion.section>
      </div>
    </div>
  );
};

export default HeroSection;
