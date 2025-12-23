import React from 'react'
import Lottie from 'lottie-react'
import salesManAnimation from '../../assets/business-salesman.json'
import { BadgeCheck, CalendarCheck2, HeartHandshake, University } from 'lucide-react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)


const TrustPilotSection = () => {
  const scope = useRef(null);
  const counter1Ref = useRef(null);
  const counter2Ref = useRef(null);
  const counter3Ref = useRef(null);
  const counter4Ref = useRef(null);


  useGSAP(
    () => {
      gsap.from(".trust-section-heading", {
        y:70,
        opacity:0,
        duration:2,
        ease: "power2.out",
        scrollTrigger:{
          trigger: ".trust-section-heading",
          start: "top 90%",
          toggleActions: "play none none reverse"
        }
      })
      gsap.from(".animation", {
        x: -100,
        opacity: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trust-section",
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(".trust-card", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.27,
        scrollTrigger: {
          trigger: ".trust-card-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      const counters = [
        { ref: counter1Ref, end: 1000, suffix: "+" },
        { ref: counter2Ref, end: 3, suffix: "+" },
        { ref: counter3Ref, end: 100, suffix: "%" },
        { ref: counter4Ref, end: 200, suffix: "+" },
      ];

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".trust-card-container",
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      });

      counters.forEach(counter => {
        const obj = { value: 0 };
        tl.to(obj, {
          value: counter.end,
          duration: 2,
          delay:0.25,
          ease: "power1.out",
          onUpdate: () => {
            if (counter.ref.current) {
              counter.ref.current.textContent = `${Math.round(obj.value)}${counter.suffix}`;
            }
          }
        }, "<"); // "<" starts all counter animations at the same time
      });


    },
    { scope }
  );

  const animationOptions = {

  
        animationData: salesManAnimation, 
        loop: true,                 // Animation will continuously repeat (Good for engagement)
        autoplay: true,             // Animation starts playing immediately
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice' // Ensures the animation scales correctly
        }
      }
  return (
    <div ref={scope} className='min-h-screen w-full px-4 sm:px-6 lg:px-10 py-8 sm:py-12 lg:py-15 flex flex-col gap-14 bg-gradient-to-t 
             from-blue-500 
             to-indigo-600"  bg-[#f7fdfb]' >
      <h2 className='text-3xl sm:text-4xl trust-section-heading text-gray-800 font-bold text-center leading-8 ' >Admissions Made Simple<br /> <span className='text-xl sm:text-2xl font-lg text-gray-600'>The Numbers That Build Trust</span></h2>
      <div className='flex flex-col lg:flex-row items-center trust-section justify-center gap-8   w-full'>
        <div className='w-full lg:w-1/2 animation '>
        <Lottie 
                // Pass the imported JSON data and controls
                {...animationOptions} 
                
                // You can control the immediate size here or via parent Tailwind classes
                style={{ height: '430px' }} 
                
                // Optional: Add a shadow to the container for a clean look
                className="rounded-lg shadow-xl max-w-xl mx-auto"
            />
        </div>
        <div className='w-full lg:w-1/2 trust-card-container  place-items-center  grid grid-cols-1 sm:grid-cols-2 gap-4 ' >

        <div className='h-42 relative w-full rounded-3xl p-3 bg-blue-500 bg-gradient-to-r 
             from-blue-700 
             to-indigo-600" overflow-hidden'>
          <h2 className='text-xl sm:text-2xl font-bold'>Successfull Admissions</h2>
          <div className='absolute bottom-0 left-0 trust-card rounded-t-2xl bg-yellow-500 backdrop-blur-2xl h-21 px-4 py-2 w-full'>
            <p> <span ref={counter1Ref} className='text-xl sm:text-2xl font-semibold'>0+</span> Students Placed in Top Colleges</p>
          </div>
          <BadgeCheck className='absolute top-2 right-2' size={28} color="#ffffff" />
        </div>

        <div className='h-42 relative w-full rounded-3xl p-3 bg-blue-500 bg-gradient-to-r 
             from-blue-700 
             to-indigo-600" overflow-hidden'>
          <h2 className='text-xl sm:text-2xl font-bold'>Experience <br />/Years</h2>
          <div className='absolute bottom-0 left-0 trust-card rounded-t-2xl bg-green-600 h-21 px-4 py-2 w-full'>
            <p> <span ref={counter2Ref} className='text-xl sm:text-2xl font-semibold'>0+</span> Years of Admission Excellence</p>
          </div>
          <CalendarCheck2 className='absolute top-2 right-2' size={28} color="#ffffff" />
        </div>

        <div className='h-42 relative w-full rounded-3xl p-3 bg-blue-500 bg-gradient-to-r 
             from-blue-700 
             to-indigo-600" overflow-hidden'>
          <h2 className='text-xl sm:text-2xl font-bold'>Student <br /> Satisfaction</h2>
          <div className='absolute bottom-0 left-0 trust-card rounded-t-2xl bg-yellow-500 h-21 px-4 py-2 w-full'>
            <p> <span ref={counter3Ref} className='text-xl sm:text-2xl font-semibold'>0%</span> Student Satisfaction Rate</p>
          </div>
          <HeartHandshake className='absolute top-2 right-2' size={28} color="#ffffff" />
        </div>

        <div className='h-42 relative w-full rounded-3xl p-3 bg-blue-500 bg-gradient-to-r 
             from-blue-700 
             to-indigo-600" overflow-hidden'>
          <h2 className='text-xl sm:text-2xl font-bold'>Colleges <br /> Network</h2>
          <div className='absolute bottom-0 left-0 trust-card rounded-t-2xl bg-green-600 h-21 px-4 py-2 w-full'>
            <p> <span ref={counter4Ref} className='text-xl sm:text-2xl font-semibold'>0+</span> Colleges in Our Network</p>
          </div>
          <University className='absolute top-2 right-2' size={28} color="#ffffff" />
        </div>
       

        </div>

      </div>
    </div>
  )
}

export default TrustPilotSection