import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/pagination'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const testimonialData = [
  { 
    id: 1, 
    name: "Renu Katariya", 
    college: "VGU University (BSC)", 
    quote: "Right Track Education provided excellent guidance and quality teaching. A very good institute with supportive teachers and a positive learning environment. The training was useful and helped me achieve academic success.",  
    date: "2025",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685656/ranu-katariya_e2mgir.jpg",
  },
  { 
    id: 2, 
    name: "Nayan Somani", 
    college: "PCU university (B.Tech computer science)", 
    quote: "Right Track Education guided me clearly about my career options and helped me choose the right path. Their counselling was supportive and informative, which gave me confidence and clarity for my future studies", 
    date: "2024",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685656/nayan-somani_pz95jv.jpg",
  },
  { 
    id: 3, 
    name: "Priyal Jain", 
    college: "Asia pacific college (MBA in healthcare)", 
    quote: "I am truly thankful to Right Track Education for their guidance during my MBA admission process. They explained everything in detail, from selecting the right MBA specialization to understanding placements and career opportunities.", 
    date: "2025",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685656/priya-jain_f5ijhg.jpg",
  },
  { 
    id: 4, 
    name: "Ashok", 
    college: "VGU University (B.Tech computer science)", 
    quote: "Right Track Education provided excellent counselling and guidance. They understood my interests, abilities, and career goals, and helped me choose the right course and career path.  ", 
    date: "2023",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685655/ashok_fqqasj.jpg",
  },
  { 
    id: 5, 
    name: "Priyanshu sethiya", 
    college: "PCU University (B.Tech computer science)", 
    quote: "Right Track Education helped me to clear all doubts regarding my college and it also helps to clear the confusion of finding college", 
    date: "2024",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685656/priyanshu-sethiya_ed9ipz.jpg",
  },
  { 
    id: 6, 
    name: "Namrata Rathore", 
    college: "VGU University (BA-LLB)", 
    quote: "Right Track Education provided me with proper guidance and counselling regarding my academic path in BA-LLB. They helped me understand the admission process, course structure, and career opportunities in law.", 
    date: "2025",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685655/namrata-rathore_ykbmz3.jpg",
  },
  { 
    id: 7, 
    name: "Yash Tiwari", 
    college: "VGU University (B.Tech computer science)", 
    quote: "Right Track Education provided me with clear, honest, and well-structured counselling. They helped me understand my options, choose the right path based on my interests and goals, and guided me at every step.", 
    date: "2024",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/f_auto,q_auto/v1767685656/yash-tiwari_e8ypst.jpg",
  },
  { 
    id: 8, 
    name: "Koshtoum Shrivastav", 
    college: "Shoolini University (B.tech computer science)", 
    quote: "Right Track Education provided me with excellent counselling and continuous guidance throughout my college admission process. Their team clearly explained all available options, helped me choose the right course.", 
    date: "2025",
    image: "https://res.cloudinary.com/dq9c71raz/image/upload/v1767685655/koshtoum-shrivastav_n1gtco.jpg",
  },
];



const TestimonialSection = () => {
  const scope = useRef(null);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  useGSAP(()=>{
    gsap.from(".testi-heading",{
      y:60,
      opacity:0,
      duration:2,
      ease: "power2.out",
      scrollTrigger:{
        trigger: ".testi-heading",
        toggleActions: "play none none reverse",
        start: "top 80%"
      }
    })

  },{scope})
  

  const blueAccent = "text-blue-600"

  const toggleExpanded = (id) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <div ref={scope} className='min-h-screen w-full py-12 sm:py-20  px-4 sm:px-9 lg:px-10 bg-gradient-to-b 
             from-blue-500 to-blue-100
             bg-[#f7fdfb]' >
      <h2 className=" text-center testi-heading text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-200 mb-8 sm:mb-12 px-2">
        "Real Success Stories" 
      </h2>

      <Swiper
      modules={[Pagination, Navigation, Autoplay]} 
      autoplay={{delay : 4000, disableOnInteraction:false, stopOnLastSlide:false ,  pauseOnMouseEnter: true}}
      loop={true}
      speed={600}
      watchSlidesProgress={true}
      creativeEffect={true}
  
    
      
      
      pagination={{clickable : true}}
      breakpoints={{
        320:{slidesPerView:1, spaceBetween:1, slidesPerGroup:1},
        640:{slidesPerView:2, spaceBetween:30, slidesPerGroup:1},
        1024:{slidesPerView:3, spaceBetween:40, slidesPerGroup:1}

      }}
      style={{
        "--swiper-pagination-bottom": "0px",
        //  "--swiper-pagination-color": "white"
      }}
      className='mySwiper h-auto sm:h-85 lg:h-105 max-w-7xl px-2 sm:px-4 pb-12'
      >
        {testimonialData.map((item)=>{
          return (<SwiperSlide key={item.id} >
            <div className={`bg-slate-50 px-3 sm:px-6 py-4  rounded-xl shadow-lg border-t-4 border-blue-600 w-full sm:w-80 lg:w-auto flex flex-col transition-all duration-300 ${expandedTestimonials[item.id] ? 'h-auto' : 'h-auto sm:h-95 lg:h-75'}`}>
              <img className='h-25 w-25 mb-4 sm:mb-1 sm:h-20 sm:w-20 rounded-full object-cover border-b-4 border-blue-600'  src={item.image} alt={`Student testimonial ${item.name}`} loading="lazy" />

<div className={`px-2 sm:px-0 ${expandedTestimonials[item.id] ? 'flex-grow' : 'h-30'}`}>
              <p className={`italic text-gray-700 text-base sm:text-lg hyphens-auto ${!expandedTestimonials[item.id] ? 'line-clamp-4' : ''}`}>
                "{item.quote}"
              </p>
              {item.quote.length > 150 && (
                <button 
                  onClick={() => toggleExpanded(item.id)}
                  className="text-blue-600 text-sm font-semibold mt-2 cursor-pointer hover:text-blue-800 transition-colors"
                >
                  {expandedTestimonials[item.id] ? 'Read Less' : 'Read More'}
                </button>
              )}
              </div>
              
              <div className="mt-2 pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-600 text-lg sm:text-xl ">{item.name}</p>
                <p className={`text-sm ${blueAccent}`}>{item.college}</p>
              </div>
            </div>

          </SwiperSlide>)

        })}

      </Swiper>
      
    </div>
  )
}

export default TestimonialSection