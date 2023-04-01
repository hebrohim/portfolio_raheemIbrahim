import React from 'react'
import { FaHtml5 } from "react-icons/fa";

const Card = ({props}) => {
    console.log(props)
  return (
   <div className="card ">
    <span><FaHtml5 className='text-amber-600 text-7xl'/></span>
</div>
  )
}

export default Card