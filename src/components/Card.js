import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Card = ({ icon, name }) => {
  return (
    <div className="flex flex-col mb-10 w-1/3 ">
      <div className="card flex flex-col items-center justify-center">
        <span>{icon}</span>
      </div>
      <p className="font-logoFont text-2xl text-slate-900 font-bold">{name}</p>
    </div>
  );
};

export default Card;
