import React from "react";
import { FaHtml5 } from "react-icons/fa";

const Card = ({ icon, name }) => {
  return (
    <div className="flex flex-col justify-center items-center mb-10">
      <div className="card">
        <span>{icon}</span>
      </div>
      <p className="font-logoFont text-2xl text-slate-900 font-bold">{name}</p>
    </div>
  );
};

export default Card;
