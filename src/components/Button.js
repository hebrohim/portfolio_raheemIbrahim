import React from 'react'
import {motion} from 'framer-motion'
 

const buttonAnimation ={

  visible:{scale:3}
}
const Button = ({content}) => {
  return (
    <motion.button whileHover={{scale:1.1 ,boxShadow:"0px 0px 10px black"}}
    transition ={{type:"spring" ,stiffness:300}} className=' p-1 rounded-md text-slate-900 font-semibold font-textFont cursor-pointer border-2 border-slate-900  hover:bg-amber-600 md:p-2 md:text-xl md:border-4 dark:text-white dark:border-white'>{content}</motion.button>
  )
}

export default Button