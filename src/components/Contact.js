import React from 'react'

import { MdPermContactCalendar } from "react-icons/md";
const Contact = () => {
  return (

<div className="login-box">
    <div className='flex flex-col justify-center items-center'>
  <h1 className='text-xl font-textFont font-semibold text-slate-900 my-1 md:text-2xl md:my-3'>let's work together </h1>
        <div className='flex items-center'>

      <span className='w-10 bg-amber-600 h-1 md:w-12'></span>  <MdPermContactCalendar className='text-2xl text-slate-900 mx-1 md:text-3xl'/><span className='w-12 bg-amber-600 h-1 md:w-12'> </span>
      </div>

      </div>
  <form className='my-5  w-[80vw]  py-10 px-5  mx-auto box-border rounded-2xl shadow-2xl'>
    <div className="user-box">
      <input required="" name="" type="text"/>
      <label>Full name</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="email"/>
      <label>Email</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="email"/>
      <label>Subject</label>
    </div>
    <div className="user-box">
      <input required="" name="" type="email"/>
      <label> your message</label>
    </div>
    <a href="#">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>

</div>


  )
}

export default Contact