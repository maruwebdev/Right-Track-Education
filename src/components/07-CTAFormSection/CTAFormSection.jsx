import React from 'react'
import Form from './Form'
import gsap from 'gsap'
import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const CTAFormSection = React.forwardRef((props, ref) => {

  const scope = useRef(null);

  useGSAP(() => {
    const q = gsap.utils.selector(scope);
    // Heading image panel subtle entrance (optional)
    gsap.from(q(".cta-left"), {
      opacity: 0,
      y: 20,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: q(".cta-section"),
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    // Form: from behind-left to its place with reveal
    gsap.from(q(".cta-form-wrap"), {
      x: -460,           // piche/left se niklega
      opacity: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: q(".cta-form-wrap"),
        start: "top 80%",   // section visible hote hi
        toggleActions: "play none none reverse",
        // markers: true,
      },
    });

    // Optional: mask/reveal polish with clipPath
    gsap.fromTo(q(".cta-form-clip"),
      { clipPath: "inset(0 100% 0 0 round 16px)" }, // fully clipped from right
      {
        clipPath: "inset(0 0% 0 0 round 16px)",
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: q(".cta-section"),
          start: "top 80%",
          toggleActions: "play none none reverse",
        }
      }
    );
  }, { scope });

  return (
   
   <div ref={ref}>
    <div ref={scope}  className=' cta-section min-h-screen flex relative justify-center items-center w-full bg-gradient-to-t  from-blue-500 to-blue-100 bg-[#f7fdfb] p-4' >

      <div className='lg:w-190 lg:h-140 max-w-3xl relative flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden bg-white'>
        <div className=' cta-left hidden md:flex h-auto relative w-full md:w-1/2 shadow-lg shadow-black flex-col justify-center items-center rounded-r-2xl bg-[url("https://i.pinimg.com/736x/59/c9/37/59c93797aa58940a8d160522b1737c72.jpg")] bg-cover bg-top z-10'>
        <img src="/assets/logo/rte-logo1.png" alt="Right Track Education logo" className='h-50 w-50 absolute top-15 left-22' />
        <h2 className='text-3xl mb-9 font-extrabold mask-x-from-72 text-white '>Right Track Education</h2>
        </div>

        <div className=' relative h-full w-full md:w-1/2 z-0 cta-form-wrap'>
        <div className='cta-form-clip h-full'>
       <Form />
        </div>

        </div>

      </div>

    </div>
    </div>
  )
});

export default CTAFormSection