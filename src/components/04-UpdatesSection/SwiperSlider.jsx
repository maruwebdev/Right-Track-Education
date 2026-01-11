import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const SwiperSlider = () => {
  return (
    <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={50} // Slides के बीच की दूरी
                    slidesPerView={1}
                    navigation={true}  // एक बार में दिखने वाली Slides की संख्या
                    pagination={{ clickable: true }} // डॉट्स/पेजिनेशन जोड़ें
                    // Tailwind classes सीधे Swiper के div पर लगाएं
                    style={{
        "--swiper-pagination-bottom": "0px",
         "--swiper-pagination-color": "white"
      }}
                    className=" h-full mt-5 "
                    
                >

                    <SwiperSlide className="">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <video className='h-96 sm:h-[500px] rounded-4xl border-4 border-gray-500' src="https://res.cloudinary.com/dq9c71raz/video/upload/f_auto,q_auto/v1766907968/reel1_cnuxuj.mp4" controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <video className='h-96 sm:h-[500px] rounded-4xl border-4 border-gray-500' src="https://res.cloudinary.com/dq9c71raz/video/upload/f_auto,q_auto/v1766907971/reel2_ulkak2.mp4" controls></video>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="flex justify-center items-center">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <video className='h-96 sm:h-[500px] rounded-4xl border-4 border-gray-500' src="https://res.cloudinary.com/dq9c71raz/video/upload/f_auto,q_auto/v1766907971/reel3_uzc1vq.mp4" controls></video>
                        </div>
                    </SwiperSlide>

                </Swiper>
  )
}

export default SwiperSlider