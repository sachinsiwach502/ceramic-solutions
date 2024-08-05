import ourBlog from '../assets/images/png/our-blog.png'
import linkArrow from '../assets/images/png/red-link-arrow.png'
import OurBlogSlider from './OurBlogSlider';
import { OurBlogData } from './Helpder'

const OurBlog = () => {
    return (
        <div className="container lg:pt-[140px] md:pt-20 pt-16">
            <h1 className=" text-center font-jakarata font-semibold  md:text-5xl text-4xxl  text-black capitalize">Our Blog</h1>
            <p className="text-lg text-black-100 max-w-[592px] text-center font-jakarata pt-5 mx-auto">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
            <div className="row max-sm:hidden">

                <div className='lg:w-1/3 px-3 mt-6 sm:w-1/2'>
                    {OurBlogData.map((obj, index) => (
                        <div
                            key={index}
                            className='bg-white border border-black border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-jakarata font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className='text-red font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>{obj.link}</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'>
                                    <img src={obj.linkarrow} alt="link arrow" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className='lg:w-1/3 px-3 mt-6 sm:w-1/2'>
                    {OurBlogData.map((obj, index) => (
                        <div
                            key={index}
                            className='bg-white border border-black border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-jakarata font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className='text-red font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>{obj.link}</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'>
                                    <img src={obj.linkarrow} alt="link arrow" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <div className='lg:w-1/3 px-3 mt-6 sm:w-1/2'>
                    {OurBlogData.map((obj, index) => (
                        <div
                            key={index}
                            className='bg-white border border-black border-opacity-15 rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-jakarata font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit'>
                                <h1 className='text-red font-jakarata font-semibold text-base hover:underline ease-in-out duration-500'>{obj.link}</h1>
                                <div className='w-6 group-hover/edit:translate-x-1 ease-in-out duration-500'>
                                    <img src={obj.linkarrow} alt="link arrow" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

            </div>
            <div className='max-sm:block hidden pt-8'>
                <OurBlogSlider />
            </div>
        </div >
    )
}

export default OurBlog