import React, { useEffect } from 'react'
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
    name: "Priya Sharma", 
    college: "IIT BHU", 
    quote: "They turned my average score into a top college admission. Absolutely crucial guidance.", 
    score: "97.2%", 
    date: "2025",
    image: "/assets/Testimonials-women/abhinav-roy.jpg",
  },
  { 
    id: 2, 
    name: "Karan Verma", 
    college: "SRCC, Delhi University", 
    quote: "It was less guesswork, and more guaranteed planning. Worth every penny.", 
    score: "95.5%", 
    date: "2024",
    image: "/assets/Testimonials-man/amitav-hira.jpg",
  },
  { 
    id: 3, 
    name: "Aisha Khan", 
    college: "Manipal Medical College", 
    quote: "They managed all the documentation and regulatory deadlines for my NEET application perfectly. ", 
    score: "90%", 
    date: "2025",
    image: "/assets/Testimonials-women/alexander-aashiesh.jpg",
  },
  { 
    id: 4, 
    name: "Rahul Mehra", 
    college: "IIM Ahmedabad (MBA)", 
    quote: "Crucial guidance on my Statement of Purpose (SOP) and interview prep made the difference for my MBA admission.", 
    score: "99 Percentile", 
    date: "2023",
    image: "/assets/Testimonials-man/marwan-ahmed.jpg",
  },
  { 
    id: 5, 
    name: "Sneha Reddy", 
    college: "Christ University, Bangalore", 
    quote: "They helped me choose the perfect BBA specialization that aligned with my long-term career goals. Best decision!", 
    score: "85%", 
    date: "2024",
    image: "/assets/Testimonials-women/othman-el-marzak.jpg",
  },
  { 
    id: 6, 
    name: "Jatin Dahiya", 
    college: "Amity University, Noida", 
    quote: "I received excellent scholarship advice which dramatically reduced my financial burden. Highly recommending", 
    score: "78%", 
    date: "2025",
    image: "/assets/Testimonials-man/prabir-hansda.jpg",
  },
  { 
    id: 7, 
    name: "Simran Kaur", 
    college: "NIFT Delhi (Fashion Design)", 
    quote: "They provided superb portfolio guidance and creative aptitude test preparation. I got my top choice!", 
    score: "92%", 
    date: "2024",
    image: "/assets/Testimonials-women/siddharth-salve.jpg",
  },
  { 
    id: 8, 
    name: "Rohit Pande", 
    college: "BITS Pilani", 
    quote: "Right Track handled my BITSAT documentation flawlessly. The entire admission process felt streamlined.", 
    score: "350/450", 
    date: "2025",
    image: "/assets/Testimonials-man/ratul-pal.jpg",
  },
  { 
    id: 9, 
    name: "Divya Patel", 
    college: "University of Toronto (UG)", 
    quote: "Their guidance wasn't limited to India. They successfully assisted with my international university application.", 
    score: "9.5/10 GPA", 
    date: "2023",
    image: "/assets/Testimonials-women/shiv-narayan-das.jpg",
  },
  { 
    id: 10, 
    name: "Harsh Malik", 
    college: "Jawaharlal Nehru University (JNU)", 
    quote: "I saved months of research. Straight onto the right application. Genuine Service! ", 
    score: "91%", 
    date: "2024",
    image: "/assets/Testimonials-man/sadiya-somayea.jpg",
  },
];



const TestimonialSection = () => {
  const scope = useRef(null);

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

  return (
    <div ref={scope} className='min-h-screen w-full py-20  px-9 sm:px-18 lg:px-10 bg-gradient-to-b 
             from-blue-500 to-blue-100
             bg-[#f7fdfb]' >
      <h2 className=" sm:text-center testi-heading text-3xl whitespace-nowrap sm:text-4xl font-extrabold text-gray-200 mb-12">
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
        320:{slidesPerView:1, spaceBetween:20},
        640:{slidesPerView:2, spaceBetween:30},
        1024:{slidesPerView:3, spaceBetween:40}

      }}
      style={{
        "--swiper-pagination-bottom": "0px",
        //  "--swiper-pagination-color": "white"
      }}
      className='mySwiper h-105 sm:h-85 max-w-7xl px-4 pb-12'
      >
        {testimonialData.map((item)=>{
          return (<SwiperSlide key={item.id} >
            <div className="bg-white px-4 sm:px-6 py-4  rounded-xl shadow-lg border-t-4 border-blue-600 h-95 w-80 sm:w-auto lg:h-75 flex flex-col ">
              <img className='h-25 w-25 mb-4 sm:mb-1 sm:h-20 sm:w-20 rounded-full object-cover border-b-4 border-blue-600'  src={item.image} alt={`Student testimonial ${item.name}`} loading="lazy" />

              <div className='h-30 px-2 sm:px-0'>
              <p className="italic text-gray-700 text-base sm:text-lg hyphens-auto">
                "{item.quote}"
              </p>
              </div>
              
              <div className="mt-2 pt-4 border-t border-gray-100">
                <p className="font-bold text-gray-600 text-lg sm:text-xl ">{item.name}</p>
                <p className={`text-sm ${blueAccent}`}>{item.college} ({item.score})</p>
              </div>
            </div>

          </SwiperSlide>)

        })}

      </Swiper>
      
    </div>
  )
}

export default TestimonialSection