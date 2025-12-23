import React from 'react'
import { SliderImageData } from './SliderImageData';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, A11y } from 'swiper/modules'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const HeroSlider = () => {
    const SlidesData = SliderImageData;
  return (
    <section className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, A11y]}
        // Layout
        slidesPerView={1}
        spaceBetween={0}
        // Behavior
        loop={true}
        // Controls
        navigation={true}
        pagination={{ clickable: true }}
        speed={1000}
        // Autoplay (optional): 3s delay, user interaction se na rukey
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        // Accessibility helpers
        a11y={{ enabled: true }}
        
        // Height style example (Tailwind)
        className="h-screen"
        style={{ '--swiper-navigation-color': '#fff', '--swiper-pagination-color':'#fff', '--swiper-navigation-top-offset': '90%'}}
      >
        {SlidesData.map((elem, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative h-full w-full">
                <img
                  src={elem.src}
                  alt={elem.alt || `College or university campus slide ${idx + 1}`}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="overlay absolute inset-0 bg-black opacity-55" />
              </div>
            </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
