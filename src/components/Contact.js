import React from 'react'
import { motion } from 'framer-motion';
import { MdPermContactCalendar } from "react-icons/md";
const Contact = () => {
  return (

<div id="contact" className="login-box">
    <div className='flex flex-col justify-center items-center'>
  <h1 className='text-xl font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3 dark:text-white'>let's work together </h1>
        <div className='flex items-center'>

      <span className='w-10 bg-amber-600 h-1 md:w-12'></span>  <MdPermContactCalendar className='text-2xl text-slate-900 mx-1 md:text-3xl dark:text-white'/><span className='w-12 bg-amber-600 h-1 md:w-12'> </span>
      </div>

      </div>
  <motion.form initial ={{opacity:0,x:"200"}} whileInView={{opacity:1,x:0,transition:{duration:2,when :"beforeChildren"}}}  className='my-5  w-[80vw]  py-10 px-5  mx-auto box-border rounded-2xl shadow-2xl'>
    <div className="user-box ">
      <input required="" name="" type="text" className='dark:text-white'/>
      <label className='dark:text-white' >Full name</label>
    </div>
    <div className="user-box ">
      <input required="" name="" type="email" className='dark:text-white'/>
      <label className='dark:text-white'>Email</label>
    </div>
    <div className="user-box ">
      <input required="" name="" type="email" className='dark:text-white'/>
      <label className='dark:text-white'>Subject</label>
    </div>
    <div className="user-box ">
      <input required="" name="" type="email" className='dark:text-white'/>
      <label className='dark:text-white'> your message</label>
    </div>
    <a href="#" className='dark:text-white'>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </motion.form>

</div>


  )
}

export default Contact