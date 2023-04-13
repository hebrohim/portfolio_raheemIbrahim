import React from "react";
import { FaHtml5 } from "react-icons/fa";
import {motion} from "framer-motion"

const childrenAnimation = {
  hidden:{opacity:0,},
  visible:{opacity:1,scale:1.2,transition:{duration:5,delay:4}}
  
}
const Card = ({ icon, name }) => {
  return (
    <motion.div variants={childrenAnimation} initial = "hidden" animate ="visible" className="flex flex-col justify-center items-center mb-10">
      <div className="card">
        <span>{icon}</span>
      </div>
      <p className="font-logoFont text-2xl text-slate-900 font-bold dark:text-white">{name}</p>
    </motion.div>
  );
};

export default Card;
