import React from 'react'
import styles from '../style'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'

const Footer = () => (
  <section className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className='flex-1 flex flex-col justify-start mr-10'>
        <img src={logo} alt="hoobank" className='w-[266px] h-[72px] object-contain'/>
        <p className={`${styles.paragraph} max-w-[310px] mt-4`}>A new way to make the payments easy, reliable and secure.</p>
      </div>

      <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
        {footerLinks.map((link) => (
          <div key={link.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
            <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
              {link.title}
            </h4>
            <ul className='list-none mt-4'>
              {link.links.map((item, index) => (
                <li key={item.name} className={`font-poppins font-normal text-base leading-6 text-dim-white hover:text-secondary cursor-pointer ${index !== link.links.length - 1 ? 'mb-4' : 'mb-0'}`}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t border-t-[#3f3e45]'>
      <p className='font-poppins font-normal text-center text-[18px] leading-[27px] text-white'>2025 HooBank. All rights reserved.</p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt="social"
            className={`w-[21px] h-[21px] object-contain cursor-pointer hover:scale-105 hover:text-secondary transition-all duration-200 ${index !== socialMedia.length - 1 ? "mr-6" : "mr-0"}`}/>
        ))}
      </div>
    </div>
  </section>
)


export default Footer