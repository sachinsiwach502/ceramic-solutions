
import OurBlogSlider from './OurBlogSlider';
import { OurBlogData } from './Helper'

const OurBlog = () => {
    return (
        <div className="container lg:pt-[140px] md:pt-20 pt-16">
            <h1 className="text-center font-semibold  md:text-5xl text-4xxl  text-black capitalize">Our Blog</h1>
            <p className="text-lg text-black-100 max-w-[592px] text-center pt-5 mx-auto">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
            <div className="row max-sm:hidden">

                <div className='lg:w-1/3 px-3 mt-6 sm:w-1/2'>
                    {OurBlogData.map((obj, index) => (
                        <div
                            key={index}
                            className='bg-white rounded-3xl p-6 shadow-weDo ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit w-fit'>
                                <h1 className='text-red font-semibold text-base ease-in-out duration-500'>{obj.link}</h1>
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
                            className='bg-white rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit w-fit'>
                                <h1 className='text-red font-semibold text-base ease-in-out duration-500'>{obj.link}</h1>
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
                            className='bg-white rounded-3xl p-6 shadow-weDo hover:border-white ease-in-out duration-300 min-h-[100%]'
                        >
                            <div className='overflow-hidden rounded-xl'>
                                <img src={obj.image} alt="blog random images" className='hover:scale-105 ease-in-out duration-300' />
                            </div>
                            <h3 className='text-black font-semibold text-4xl pt-6 max-w-[316px]'>{obj.text}</h3>
                            <a href="/" className='flex items-center gap-[10px] pt-6 group/edit w-fit'>
                                <h1 className='text-red font-semibold text-base ease-in-out duration-500'>{obj.link}</h1>
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