import React from 'react'

const Button = ({content    }) => {
  return (
    <button className=' p-1 rounded-md text-slate-900 font-semibold font-textFont cursor-pointer border-2 border-slate-900  hover:bg-amber-600 md:p-2 md:text-xl md:border-4'>{content}</button>
  )
}

export default Button