
import howItWorks from '../assets/images/png/how-it-works-img.png'
import redBox from '../assets/images/webp/why-choose-us-red-box.webp'
import { TickImg } from './icon'


const HowItWorks = () => {
    return (
        <div className=" container lg:py-[100px] sm:py-20 py-16">
            <div className="max-lg:max-w-[592px] mx-auto row justify-center">
                <div className='lg:w-5/12 px-3'>
                    <div className=' relative'>
                        <div className='max-w-[496px] h-[523px] relative z-30'> <img src={howItWorks} alt="bed room" className='w-full h-full' /></div>
                        <div className='absolute max-w-[300px] h-[396px] translate-x-6 top-[40%] -left-[20%] z-20 max-lg:hidden'>
                            <img src={redBox} alt="red box" className='w-full h-full' />
                        </div>
                    </div>
                </div>
                <div className="lg:w-7/12 px-3 xl:pl-10">
                    <h1 className="font-semibold  md:text-5xl text-4xxl text-black capitalize max-lg:mt-4 lg:text-start text-center">How it works?</h1>
                    <p className= "font-normal text-black text-lg lg:pt-5 pt-3 lg:pb-4 pb-2 lg:text-start text-center">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                    <div className=" flex items-start gap-5 shadow-itWorks bg-white p-4 mt-4 rounded-3xl">
                        <div className='size-8'><TickImg /></div>
                        <div className="flex items-start flex-col">
                            <h3 className='font-semibold text-3xl text-black-100'>Contact us</h3>
                            <p className="text-black pt-3 max-w-[508px] max-md:text-sm">Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening</p>
                        </div>
                    </div>
                    <div className=" flex items-start gap-5 shadow-itWorks bg-white p-4 mt-4 rounded-3xl">
                        <div className='size-8'><TickImg /></div>
                        <div className="flex items-start flex-col">
                            <h3 className='font-semibold text-3xl text-black-100'>Get a Qoute</h3>
                            <p className="text-black font-jakarat pt-3 max-w-[508px] max-md:text-sm">Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening</p>
                        </div>
                    </div>
                    <div className=" flex items-start gap-5 shadow-itWorks bg-white p-4 mt-4 rounded-3xl">
                        <div className='size-8'> <TickImg /></div>
                        <div className="flex items-start flex-col">
                            <h3 className='font-semibold text-3xl text-black-100'>Get your Work Done</h3>
                            <p className="text-black pt-3 max-w-[508px] max-md:text-sm">Lörem ipsum deligen vuprer diar faktigt på dehädiska att sara. Persion. Repp löng blippbetalning. Megaliga fadat om än dening</p>
                        </div>
                    </div>
                    <div className='flex items-center md:gap-6 gap-1 max-sm:flex-wrap max-sm:justify-center max-lg:justify-center'>
                        <button className=" bg-red text-base md:text-xlg max-w-[173px] w-full h-[63px] text-white rounded-[56px] font-bold mt-9 hover:bg-rose-500 ease-in-out duration-300">Get a Quote</button>
                        <button className=" bg-white text-base md:text-xlg max-w-[228px] w-full h-[63px] text-red rounded-[56px] font-bold sm:mt-9 mt-2 border border-red ease-in-out duration-300 hover:bg-red hover:border-white hover:text-white">View Tile Visualizer</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default HowItWorks