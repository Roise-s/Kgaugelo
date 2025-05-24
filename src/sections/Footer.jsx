import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer-container">
        <div className="flex flex-col justify-center md:items-start items-center">
            <p className="">Thank you for the visit</p>
        </div>
        <div className="socials">
            {socialImgs.map((img) => (
                <a href={img.url} target='_blank' className="icon" key={img.url} >
                    <img src={img.imgPath} alt={img.name} className="" />
                </a>
            ))}
        </div>

        <div className="flex flex-col justify-center">
            <p className="text-center md:text-end">
                &copy; {new Date().getFullYear()} Kgaugelo | Dev. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
