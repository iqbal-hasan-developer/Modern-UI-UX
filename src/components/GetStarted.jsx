import React from 'react'
import styles from '../style'
import { arrowUp } from '../assets'

const GetStarted = () => (
  <div className="relative w-[140px] h-[140px] rounded-full cursor-pointer">
    
    {/* Spinning gradient border */}
    <div className="absolute inset-0 rounded-full p-1 bg-gradient-to-tr from-blue-500 via-cyan-400 to-pink-500 animate-border">
      {/* Empty inner div just to create the ring */}
      <div className="w-full h-full bg-primary rounded-full" />
    </div>

    <div className={`${styles.flexCenter} flex-col absolute inset-0`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className='font-poppins font-medium text-[18px] leading-[23px] mr-2'>
          <span className='text-gradient'>Get</span>
        </p>
        <img src={arrowUp} alt="arrow" className='w-[23px] h-[23px] object-contain' />
      </div>
      <p className='font-poppins font-medium text-[18px] leading-[23px]'>
        <span className='text-gradient'>Started</span>
      </p>
    </div>

  </div>
)

export default GetStarted
