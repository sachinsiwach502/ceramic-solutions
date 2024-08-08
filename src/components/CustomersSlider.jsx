import sliderProfile01 from '../assets/images/png/slider-1.png'
import sliderProfile02 from '../assets/images/png/slider-2.png'
import sliderProfile03 from '../assets/images/png/slider-3.png'
import sliderProfile04 from '../assets/images/png/slider-4.png'
import stars from '../assets/images/png/rate-us-star.png'


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination, Autoplay } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                speed={1000}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 3,
                    },
                    1240: {
                        slidesPerView: 4,
                    },
                }}
                modules={[Pagination,]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile01} alt="first slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile02} alt="second slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile03} alt="first slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile04} alt="first slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile01} alt="first slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-3xl shadow-slider max-w-[364px] bg-white p-6 w-full xl:h-[305]'>
                        <div className='flex itmes-center gap-2'>
                            <div className='size-10'>  <img src={sliderProfile02} alt="second slider profile pic" /></div>
                            <div className='flex flex-col itmes-start'>
                                <h1 className=' font-manrope font-semibold  text-start'>Mark T.</h1>
                                <p className=' font-manrope text-sm'>Fitness enthusiast</p>
                            </div>
                        </div>
                        <div className='py-4 max-w-[120px]'>
                            <img src={stars} alt="star" />
                        </div>
                        <p className='font-manrope text-start'>"As a fitness enthusiast, I was skeptical about resistance bands at first. But after trying these, I'm a believer. The quality is top-notch, and they've become an integral part of my workout routine. I can't believe how versatile they are.”</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
