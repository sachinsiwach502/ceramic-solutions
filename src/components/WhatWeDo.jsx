import whatWeDo_1 from '../assets/images/webp/what-do-1.webp'
import whatWeDo_2 from '../assets/images/webp/what-do-2.webp'
import whatWeDo_3 from '../assets/images/webp/what-do-3.webp'
import whatWeDo_4 from '../assets/images/webp/what-do-4.webp'
import whatWeDo_5 from '../assets/images/webp/what-do-5.webp'
import whatWeDo_6 from '../assets/images/webp/what-do-6.webp'
import whatWeDo_7 from '../assets/images/webp/what-do-7.webp'
import linkArrow from '../assets/images/png/red-link-arrow.png'
import WhatWeDoSlider from './WhatWeDoSlider';

const WhatWeDo = () => {
    return (
        <div className='lg:py-[140px] md:py-24 py-14'>
            <div className="container">
                <h1 className=" text-center font-jakarata font-semibold  md:text-5xl text-4xxl  text-black capitalize">What we do</h1>
                <div className="row mt-8 max-sm:hidden">
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='overflow-hidden rounded-xl'>  <img src={whatWeDo_1} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Kitchen Backsplash</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit '>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_2} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Custom Showers</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_3} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Custom Flooring</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='overflow-hidden rounded-xl'>  <img src={whatWeDo_4} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Large Format Tiling</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_5} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Wall Tiling</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_6} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>ADA Compliant Showers</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                    <div className=" lg:w-1/3 px-3 mt-6 sm:w-1/2">
                        <div className="bg-white border border-black  border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]">
                            <div className='rounded-xl overflow-hidden'>  <img src={whatWeDo_7} alt="kitchen" className='w-full rounded-xl hover:scale-105 ease-in-out duration-300' /></div>
                            <h3 className=' text-black font-jakarata font-semibold text-4xl  pt-6'>Fireplace Tiling</h3>
                            <p className=' text-base text-black  font-normal font-jakarata  pt-3 '>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. </p>
                            <a href="#" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className=' text-red  font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>Learn more</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'><img src={linkArrow} alt="arrow" className='w-full' /></div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className='max-sm:block hidden pt-8'>
                    <WhatWeDoSlider />
                </div>
            </div>
        </div>
    )
}

export default WhatWeDo