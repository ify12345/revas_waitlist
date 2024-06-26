import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-creative';
import { EffectCreative, Autoplay } from 'swiper/modules';

export default function Recyclates() {
  return (
    <div className="mx-auto bg-white">
      <div className="w-full">
      <div className="lg:flex hidden ">
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -mr-10 lg:-mr-32">
           <img className="w-full object-cover " src="images/left.png" alt="" />
        </div>
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -mx-10 lg:-mx-32">
           <img className="w-full object-cover " src="images/front.png" alt="" />
        </div>
        <div className="w-[700px]  relative -top-24 lg:top-[-320px] -ml-10 lg:-ml-32">
           <img className="w-full object-cover " src="images/right.png" alt="" />
        </div>     
      </div>

<div className="lg:hidden block">

      <Swiper
          grabCursor={true}
          effect={'creative'}
          creativeEffect={{
            prev: {
              // shadow: true,
              translate: [0, 0, -400],
            },
            next: {
              translate: ['100%', 0, 0],
            },
          }}
          modules={[EffectCreative, Autoplay]}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={2000} 
          className="mySwiper relative  -top-28  max-w-[400px]"
        >
          <SwiperSlide>
              <div className=" ">
                <img className="w-full object-cover" src="images/left.png" alt="Left" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className=" ">
                <img className="w-full object-cover" src="images/front.png" alt="Front" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="">
                <img className="w-full object-cover" src="images/right.png" alt="Right" />
              </div>
            </SwiperSlide>
      </Swiper>
</div>


      </div>
    </div>
  );
}


