import whatWeDo_1 from '../assets/images/png/what-do-1.png'
import whatWeDo_2 from '../assets/images/png/what-do-2.png'
import whatWeDo_3 from '../assets/images/png/what-do-3.png'
import whatWeDo_4 from '../assets/images/png/what-do-4.png'
import whatWeDo_5 from '../assets/images/png/what-do-5.png'
import whatWeDo_6 from '../assets/images/png/what-do-6.png'
import whatWeDo_7 from '../assets/images/png/what-do-7.png'
import linkArrow from '../assets/images/png/red-link-arrow.png'

import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='overflow-hidden rounded-xl'>  <img src={whatWeDo_1} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Kitchen Backsplash</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit '>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_2} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Custom Showers</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_3} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Custom Flooring</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='overflow-hidden rounded-xl'>  <img src={whatWeDo_4} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Large Format Tiling</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_5} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Wall Tiling</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_6} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>ADA Compliant Showers</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                        <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_7} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                        <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6 text-start'>Fireplace Tiling</h3>
                        <p className=' text-base text-black  font-normal font-jakarata  pt-3 text-start'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                        <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                            <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                            <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}