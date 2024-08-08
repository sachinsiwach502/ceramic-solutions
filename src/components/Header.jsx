import googleIcon from '../assets/images/png/google-icon.png'
import rateUsStar from '../assets/images/png/rate-us-star.png'
import starIcon from '../assets/images/png/star-icon.png'
import certificate from '../assets/images/png/tile-certificate.png'
import award from '../assets/images/png/business-award.png'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <section className="bg-heroSection bg-no-repeat bg-center bg-cover min-h-screen flex flex-col">
            <NavLinks />
            <div className="container flex-grow items-center justify-start flex">
                <div className="max-w-[830px]">
                    <h1 className="text-white font-semibold lg:text-6xl sm:text-5xl text-4xxl max-lg:pt-20">
                        Transform Your Space with Precision and Quality:
                        Get a Free Quote Today!
                    </h1>
                    <p className="md:pt-5 pt-4 max-w-[742px] text-white font-normal text-lg">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
                    <button className="bg-red text-xlg max-w-[173px] w-full h-[63px] text-white rounded-[56px] font-bold md:mt-9 mt-7 hover:bg-black ease-in-out duration-100 border-transparent hover:border-red border">Get a Quote</button>
                    <div className=" flex items-center gap-6 mt-16 max-md:flex-wrap max-lg:pb-14 ">
                        <div className="pl-4 py-[6px] flex bg-white rounded-2xl items-center gap-3 max-w-[229px] h-20 w-full">
                            <div className='size-10'>  <img src={googleIcon} alt="google icon" className='pointer-events-none' /></div>
                            <div className=' flex items-start flex-col'>
                                <p className='font-manrope text-xms font-normal text-black-200 text-nowrap'>Google Review</p>
                                <div className=' flex items-center'>
                                    <p className=' font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} className='pointer-events-none' />
                                </div>
                                <p className=' font-manrope text-xms font-normal text-black-200 text-nowrap'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className="pl-4 py-[6px] flex bg-white rounded-2xl items-center gap-3 max-w-[229px] h-20 w-full">
                            <div className='size-10'><img src={starIcon} alt="star icon" className='pointer-events-none' /></div>
                            <div className='flex items-start flex-col'>
                                <p className='font-manrope text-xms font-normal text-black-200 text-nowrap'>Trust Pilot Review</p>
                                <div className='flex items-center'>
                                    <p className='font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} className='pointer-events-none' />
                                </div>
                                <p className='font-manrope text-xms font-normal text-black-200 text-nowrap'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className='w-20 h-20'>
                            <img src={certificate} alt="certificate" className='w-full pointer-events-none' />
                        </div>
                        <div className='w-20 h-20'>
                            <img src={award} alt="certificate" className='w-full pointer-events-none' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header