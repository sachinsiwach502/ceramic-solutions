import React from 'react'
import { ServicesData } from './Helpder'

const Services = () => {
    return (
        <div className='lg:pb-32 sm:pb-20 pb-16'>
            <div className='container'>
                <div className='max-w-[592px]'>
                    <h1 className=' text-black md:text-5xl text-4xxl font-semibold'>We provide services in these areas</h1>
                    <p className=' text-black-100 text-lg lg:mb-8 sm:pb-6 pb-4'>Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                </div>
                <div className='row items-center justify-center'>
                    {ServicesData.map((obj, index) => <div className='md:w-1/3 w-1/2 px-3' key={index}>
                        <div className='shadow-accordian md:py-6 py-2 md:pl-6 pl-2 w-full bg-white md:rounded-3xl rounded-xl mt-6 '>
                            <div className='flex gap-3 items-center'>
                                <div className='md:size-12 size-10 max-sm:size-6'><img src={obj.image} alt={obj.text} /></div>
                                <p className=' font-semibold md:text-2xl text-lg max-sm:text-base'>{obj.text}</p>
                            </div>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Services