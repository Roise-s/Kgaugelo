import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <a href="https://hit-me-up-7dua.vercel.app/" target='_blank'>
      <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
        {leftIcon}
        <span className='relative incline-flex overflow-hidden font-general text-xs uppercase'>
          <div className="">
            {title}
          </div>
        </span>

        {rightIcon}
      </button>
    </a>
    
  )
}

export default Button
