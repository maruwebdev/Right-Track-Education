import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef} from 'react'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger);

const ServicesSection = () => {
  const scope = useRef(null);
  const cardsRef = useRef([]);

  // Service card images from Cloudinary
  const serviceImages = {
    assessment: 'https://res.cloudinary.com/dq9c71raz/image/upload/v1768127966/personallized-profile-assessment_eczxfg.png',
    shortlisting: 'https://res.cloudinary.com/dq9c71raz/image/upload/v1768127965/strategic-college-shortlisting_al2zbs.png',
    documentation: 'https://res.cloudinary.com/dq9c71raz/image/upload/v1768127964/application-document-support_w1y3s3.png',
    scholarship: 'https://res.cloudinary.com/dq9c71raz/image/upload/v1768127965/scholarship-loan-guidance_m1zvgu.png'
  };

  const services = [
    {
      id: 1,
      title: 'Personalized Profile Assessment',
      description: 'Stop guessing. We analyze your academic scores, interests, and career goals to create a robust student profile. This is the foundation for your Right Track.',
      image: serviceImages.assessment
    },
    {
      id: 2,
      title: 'Strategic College Shortlisting',
      description: 'We provide a hand-picked list of best-fit colleges based on your budget, location preferences, and admission probability. We look beyond the obvious choices.',
      image: serviceImages.shortlisting
    },
    {
      id: 3,
      title: 'Application & Documentation Support',
      description: 'Hassle-free application. Our team manages the entire application cycle, form filling, statement of purpose writing, and ensures all deadlines are met without error.',
      image: serviceImages.documentation
    },
    {
      id: 4,
      title: 'Scholarship & Loan Guidance',
      description: 'We actively identify and help you apply for maximum possible scholarships and facilitate streamlined education loan processing to ease your financial burden.',
      image: serviceImages.scholarship
    }
  ];

  useGSAP(
    () => {
      // Heading animation
      gsap.from(".services-heading", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".services-heading",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      });

      // Card entrance animation
      gsap.from(".service-card", {
        y: 80,
        opacity: 0,
        scale: 0.9,
        duration: 1.2,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".service-card",
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating animation for images
      cardsRef.current.forEach((card) => {
        if (card) {
          const image = card.querySelector('.service-image');
          if (image) {
            gsap.to(image, {
              y: -10,
              duration: 3,
              ease: "sine.inOut",
              yoyo: true,
              repeat: -1,
            });
          }
        }
      });

      // Hover animations
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const image = card.querySelector('.service-image');
          const glassEffect = card.querySelector('.glass-effect');

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              y: -12,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1.15,
                duration: 0.4,
                ease: "power2.out",
              });
            }

            if (glassEffect) {
              gsap.to(glassEffect, {
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                duration: 0.4,
              });
            }
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              y: 0,
              duration: 0.4,
              ease: "power2.out",
            });

            if (image) {
              gsap.to(image, {
                scale: 1,
                duration: 0.4,
                ease: "power2.out",
              });
            }

            if (glassEffect) {
              gsap.to(glassEffect, {
                boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.20)',
                duration: 0.4,
              });
            }
          });
        }
      });
    },
    { scope }
  );

  return (
    <div 
      id='services'
      ref={scope} 
      className='min-h-screen w-full px-2 sm:px-4 lg:px-10 py-12 sm:py-16 lg:py-20 bg-gradient-to-b 
             from-blue-500 
              bg-[#f7fdfb] flex flex-col gap-8'
    >
      {/* Heading */}
      <div className='flex flex-col gap-2'>
        <h1 className='services-heading text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white'>
          Your End-to-End Admission Solution
        </h1>
        <p className='services-heading text-center text-lg sm:text-2xl text-slate-200 font-semibold'>
          Our 4-Step Process
        </p>
      </div>

      {/* Services Grid */}
      <div className='w-full max-w-7xl mx-auto px-2 sm:px-0 '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5'>
          {services.map((service, index) => (
            <div
              key={service.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className='service-card h-96 rounded-2xl overflow-hidden relative sm:pb-8'
            >
              {/* Glass Effect Container */}
              <div 
                className='glass-effect absolute inset-0 bg-emerald-600/70 backdrop-blur-2xl border border-white/20 rounded-2xl transition-all duration-300'
                style={{
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.20)',
                }}
              />

              {/* Image Container - Top 40% */}
              <div className='relative h-3/5 sm:h-4/9 overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-400/20 to-blue-400/10'>
                <img
                  className='service-image h-full w-full object-cover rounded-t-2xl'
                  src={service.image}
                  alt={service.title}
                />
              </div>

              {/* Text Content - Bottom 60% */}
              <div className='relative h-2/5 sm:h-3/5 p-5 sm:p-6 flex flex-col justify-between z-10'>
                <div>
                  <h3 className='text-lg sm:text-xl font-bold text-white mb-2 line-clamp-2'>
                    {service.title}
                  </h3>
                  <p className='text-sm sm:text-base text-gray-100 leading-5 line-clamp-6'>
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ServicesSection