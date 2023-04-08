import React from 'react'
import { ImUserTie } from "react-icons/im";
const AboutMe = () => {
  return (
    <div className='h-[50vh] p-5 flex items-center flex-col md:px-32 '>

        <h1 className='text-xl font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3 dark:text-white'>About Me </h1>
        <div className='flex items-center'>
      <span className='w-10 bg-amber-600 h-1 md:w-12'></span>  <ImUserTie className='text-2xl text-slate-900 mx-1 md:text-3xl dark:text-white'/><span className='w-12 bg-amber-600 h-1 md:w-12'> </span>
      </div>

      <p className='font-textFont text-justify md:text-xl md:text-center dark:text-white'>
      I am a Frontend Developer committed to create functional and aesthetically pleasing Web Applications.I have a solid technical background and high professional standards. I am passionate about learning and would love to work in an environment where there is a collaborative effort for career and organization growth. I'm currently in Ibadan, Nigeria, willing to relocate and open to remote jobs.

        </p>
        <div className='mt-3 underline w-[90%] h-[0.1rem] bg-[#dfddddd8] md:h-[0.2rem]'></div>
    </div>
  )
}

export default AboutMe