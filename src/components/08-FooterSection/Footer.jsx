
import React from 'react';
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger)
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Footer = () => {
  const scope = useRef(null)

  useGSAP(()=>{
    gsap.from(".footer",{
      y:90,
      opacity:0,
      duration:2,
      ease:"power2.out",
      scrollTrigger:{
        trigger: ".footer",
        toggleActions: "play none none reverse",
        start: "top 80%"
      }
    })
  },{scope})

  return (
    <footer ref={scope} className="bg-gray-800  text-white py-8">
      <div className="container mx-auto footer px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Branding */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">Right Track Education</h2>
            <p className="text-gray-400">Your success is our priority</p>
            <img className='h-28 w-28 mx-auto md:mx-0 mt-4' src="https://res.cloudinary.com/dhk5kzznf/image/upload/f_auto,q_auto/v1766507552/rte-logo2_tc074h.png" alt="Right Track Education logo" />
          </div>

          {/* Navigation */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Courses</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Admissions</a></li>
              <li className="mb-2"><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400 leading-5 mb-1">Address: E-108, Jawahar Circle, behind Ehcc Hosptial, Saraswati Nagar Extension, Chainpura, Malviya Nagar, Jaipur, Rajasthan 302017</p>
            <p className="text-gray-400 mb-1">Phone: (+91) 8949641963</p>
            <p className="text-gray-400 break-words">Email: righttrackeduconsultancy0001@gmail.com</p>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 justify-center md:justify-start">
              <a href="#" className="text-xl hover:text-gray-300"><Facebook /></a>
              <a href="#" className="text-xl hover:text-gray-300"><Twitter /></a>
              <a href="#" className="text-xl hover:text-gray-300"><Instagram /></a>
              <a href="#" className="text-xl hover:text-gray-300"><Linkedin /></a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Right Track Education. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
