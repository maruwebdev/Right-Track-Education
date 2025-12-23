import React from 'react'
import AdmissionCountdown from './AdmissionCountdown'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'


const Courses = ({ scrollToForm }) => {
    const scope = useRef(null)

    useGSAP(()=>{
        gsap.from(".collage-image-1",{
            y: -140,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 80%"

            }

        })
        gsap.from(".collage-image-2",{
            x:140,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".collage-image-3",{
            x: -60,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".collage-image-4",{
            y: 200,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".collage-image-5",{
            y: 140,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".collage-image-6",{
            duration: 3,
            scale:3,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".collage-image-7",{
            y: 80,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            scrollTrigger:{
                trigger: ".collage",
                toggleActions: "play none none reverse",
                start: "top 60%"

            }

        })

         gsap.from(".course-card-1",{
            y:150,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            stagger: 0.8,
            scale: 0,
            scrollTrigger:{
                trigger: ".course-card-1",
                toggleActions: "play none none reverse",
                start: "top 130%"

            }

        })
         gsap.from(".course-card-2",{
            y:150,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            stagger: 0.8,
             scale: 0,
            scrollTrigger:{
                trigger: ".course-card-2",
                toggleActions: "play none none reverse",
                start: "top 130%"

            }

        })
         gsap.from(".course-card-3",{
            y:150,
            duration: 2,
            opacity:0,
            ease: 'power2.out',
            stagger: 0.8,
             scale: 0,
            scrollTrigger:{
                trigger: ".course-card-3",
                toggleActions: "play none none reverse",
                start: "top 130%"

            }

        })
        
    },{scope})

    return (
        <div ref={scope} className='lg:h-screen flex h-full flex-col lg:flex-row w-full bg-gradient-to-t  from-blue-500 to-blue-100 bg-[#f7fdfb]'>
            <div className='hidden h-full lg:flex  collage flex-wrap gap-2  w-1/2'>
            <div className='relative h-full xl:w-[631px]'>

           
                <div className='rounded border-2 border-slate-400 collage-image-1 shadow-2xl shadow-black absolute lg:top-5 lg:left-40 h-60 w-30 overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1681077375948-3df67cf1a95e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTF8fHVuaXZlcnNpdGllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600" alt="University campus 1" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-2 shadow-black absolute top-32 right-16 h-60 w-70 overflow-hidden'>
                    <img className='object-cover h-full' src="https://images.unsplash.com/photo-1605470207062-b72b5cbe2a87?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" alt="University campus 2" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-3 shadow-black absolute top-67 left-10 h-25 w-60 overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1590579491624-f98f36d4c763?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1443" alt="University campus 3" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-4 shadow-gray-800 absolute bottom-25 right-19 h-50 w-40 overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://plus.unsplash.com/premium_photo-1691844987935-3051fe73f655?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI5fHx1bml2ZXJzaXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="University campus 4" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-5 shadow-black absolute bottom-2 left-40 h-50 w-30 overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1567168544646-208fa5d408fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkxfHx1bml2ZXJzaXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="University campus 5" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-6 shadow-black overflow-hidden absolute top-94 right-61 h-25 w-25'>
                    <img className='h-full w-full' src="https://res.cloudinary.com/dhk5kzznf/image/upload/f_auto,q_auto/v1766507552/rte-logo2_tc074h.png" alt="Right Track Education logo" />
                </div>

                <div className=' rounded shadow-2xl border-2 border-slate-400 collage-image-7 shadow-black absolute top-121 right-61 h-35 w-25 overflow-hidden'>
                    <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1622470190232-81df3782484b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk5fHx1bml2ZXJzaXRpZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600" alt="University campus 6" />
                </div>
                 </div>

            </div>

            <div className='w-full h lg:w-1/2 p-4 sm:p-10 course-cards rounded-l-lg'>
                <h2 className='text-3xl sm:text-4xl font-extrabold text-gray-800' >Stop Guessing: Find Your Perfect Program in 60 Seconds.</h2>
                <p className='text-base sm:text-lg font-medium text-gray-600 mb-3 mt-2 sm:mt-1'>Our counselors use 3+ years of data to match your profile to the course with the highest career ROI (Return on Investment).</p>
                <div className='flex flex-col gap-2 md:flex-row mt-2'>

                    <div className='flex flex-col items-center gap-3 mt-2 sm:mb-0 sm:mt-0 mb-5 w-full md:w-1/2 '>

                        <div className='bg-emerald-600/78 backdrop-blur-2xl h-26 sm:h-auto course-card-1 px-3 py-2 w-full rounded-2xl'>
                            <h3 className='text-xl mb-0.5 text-white font-bold'>UG Programs</h3>
                            <p className='text-sm text-gray-100 font-semibold'>BA, B.Sc, B.Com, BBA, BCA, BVA, B.Tech, B.Arch, B.Pharm, D.Pharma, BHM, BJMC, BA-LLB</p>

                        </div>

                        <div className='bg-emerald-600/78 backdrop-blur-2xl h-26 sm:h-auto course-card-2 px-3 py-2 w-full rounded-2xl'>
                            <h3 className='text-xl mb-0.5 text-white font-bold'>PG Programs</h3>
                            <p className='text-sm text-gray-100 font-semibold'>MA, M.Sc, M.Com, MBA, MCA, M.Tech, M.Pharma, MJMC, MHM, Diploma & Certificates Course</p>

                        </div>

                        <div className='bg-emerald-600/78 backdrop-blur-2xl h-26 sm:h-auto course-card-3 px-3 py-2 w-full rounded-2xl'>
                            <h3 className='text-xl mb-0.5 text-white font-bold'>Specialized Courses</h3>
                            <p className='text-sm text-gray-100 font-semibold'>Design,<br /> Law,<br /> Hotel Management</p>

                        </div>


                    </div>
                    <div className='flex flex-col gap-2 p-3 w-full md:w-1/2'>
                        <h3 className='text-2xl font-bold text-center text-orange-400'>Don't Miss Your Window!</h3>
                        <AdmissionCountdown />
                        <button onClick={scrollToForm} className='bg-orange-400 py-3 cursor-pointer rounded-lg hover:bg-orange-500/90 w-full '>Check Course Eligibility</button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Courses