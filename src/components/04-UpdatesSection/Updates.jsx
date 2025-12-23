import React from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

import SwiperSlider from './SwiperSlider';

const Updates = () => {
    const scope = useRef(null);

    useGSAP(()=>{
        gsap.from(".update-content",{
            x: -110,
            opacity: 0,
            duration:2,
            ease: "power2.out",
            stagger: 0.4,
            scrollTrigger:{
                trigger: ".update-content",
                start: "top 90%",
                toggleActions: "play none none reverse"
            }
        });
        gsap.from(".update-left-container-content",{
        
            width:0,
    
            opacity:0,
            duration:2.5,
            ease: "power2.out",
            scrollTrigger:{
                trigger: ".update-left-container",
                start:"top 30%",
                toggleActions: "play none none reverse"
            }
        });

        gsap.to(".bounce-word",{
            scale:1.05,
            y: -6,
            duration: 0.8,
            ease:"power1.inOut",
            yoyo:true,
            repeat: -1
        })


    },{scope})
    
    return (

        <div ref={scope} className='bg-gradient-to-b 
             from-blue-500 to-blue-100
             bg-[#f7fdfb] flex flex-col lg:flex-row items-start min-h-screen gap-3 w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-15'>
               
                {/* First Section */}

            <div className=' flex flex-col  
              h-full update-left-container p-1 sm:p-0  w-full lg:w-2/3'>
                
                    <h2 className='text-4xl sm:text-5xl update-content mb-1 text-slate-100  font-bold'><span className='text-amber-400 bounce-word inline-block text-6xl sm:text-7xl'>Ready</span> to Turn Dreams into Reality?</h2>
                    <p className='text-base sm:text-lg update-content font-medium text-gray-100' >Get personalized updates, exclusive scholarship alerts, and direct access to our counselors—all in one place.</p>

                <div className=' update-left-container-content overflow-hidden h-90 sm:h-75 w-88 sm:w-full mt-7 border-l-8 border-red-500 p-4 sm:p-8 bg-white lg:rounded-r-full'>
    <h3 className='text-xs sm:text-sm font-bold text-red-600 sm:whitespace-nowrap w-full sm:w-auto bg-red-100 px-3 py-1 rounded-md inline-block'>
        Stay Updated with the Latest Announcements
    </h3>
    <h2 className='text-2xl sm:whitespace-nowrap sm:text-3xl font-extrabold text-blue-600 mt-4'>
        Important Updates & News
    </h2>
    <ul className="list-disc list-outside text-base sm:text-lg text-gray-700 mt-4 ml-6 space-y-2">
        <li className='sm:whitespace-nowrap'>Check this space regularly for new notifications.</li>
        <li className='sm:whitespace-nowrap'>All important information will be posted here.</li>
        <li className='sm:whitespace-nowrap'>Contact our team for any urgent queries.</li>
    </ul>
                </div>

            </div>

             {/* Second Section */}

            <div className='h-auto w-full lg:w-1/3 '>
                <SwiperSlider />
            </div>

            

        </div>


    )
}
                

export default Updates