import React from 'react'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import HeroSlider from '../HeroSlider'

const HeroSection = () => {
  const scope = useRef(null)

  useGSAP(()=>{
    gsap.from('.hero-title',{
      x: -60,
      opacity: 0,
      duration:3,
      ease: 'power2.out'
    });
    gsap.from('.hero-para',{
      x: -60,
      opacity: 0,
      duration:3,
      ease: 'power2.out',
      delay: 0.1
    });
    gsap.from('.hero-logo',{
      opacity:0,
      duration:3,
      scale:0,
      ease: 'power2.out'
    })
  },{scope})
  return (
    <div className=' h-screen relative bg-gradient-to-t 
             from-blue-500 
             to-indigo-600"  bg-[#f7fdfb] sm:h-screen w-full ' >
              <HeroSlider />

       <div ref={scope} className=' pointer-events-none flex z-10 flex-col gap-3 sm:gap-0 items-center sm:items-start inset-1 px-4 pt- sm:px-6 lg:px-10 sm:py-12 lg:py-15 absolute top-0 h-screen w-full lg:w-2/3 justify-center' >
        <img className='h-58 hero-logo z-10 w-58 sm:h-28 sm:w-28 lg:h-48 lg:w-48' src="https://res.cloudinary.com/dhk5kzznf/image/upload/f_auto,q_auto/v1766507552/rte-logo2_tc074h.png" alt="Right Track Education logo" />
        <h1 className='px-5 hero-title text-3xl sm:text-4xl lg:text-5xl text-gray-100 font-bold mb-0.5 leading-tight drop-shadow-2xl'><span className='text-blue-500 text-5xl sm:text-6xl lg:text-7xl'>Right Track Education</span> Your Direct <span className='text-amber-300'>Path</span> to <span className='text-amber-300'>Dream</span> College Admission.🎓</h1>
        <p className='px-5 hero-para text-slate-200 text-lg sm:text-xl font-lg whitespace-normal drop-shadow-xl'>Stop guessing, start succeeding. Our expert counselors guarantee your entry into top institutions nationwide.</p>
       </div>
      </div>
   
  )
}

export default HeroSection