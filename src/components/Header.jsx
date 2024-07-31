import googleIcon from '../assets/images/png/google-icon.png'
import rateUsStar from '../assets/images/png/rate-us-star.png'
import starIcon from '../assets/images/png/star-icon.png'
import certificate from '../assets/images/png/tile-certificate.png'
import award from '../assets/images/png/business-award.png'
import NavLinks from './NavLinks'

const Header = () => {
    return (
        <section className=" bg-heroSection bg-no-repeat bg-center bg-cover min-h-screen flex flex-col">
            <NavLinks />
            <div className=" container flex-grow items-center justify-start flex">
                <div className="max-w-[830px]">
                    <h1 className=" text-white font-jakarata font-semibold lg:text-6xl text-5xl">
                        Transform Your Space with Precision and Quality:
                        Get a Free Quote Today!
                    </h1>
                    <p className="pt-5 max-w-[742px] text-white font-jakarata font-normal text-lg">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade nyheter eurosamma sol: teroktig,</p>
                    <button className=" bg-red text-xlg max-w-[173px] w-full h-[63px] text-white rounded-[56px] font-jakarata font-bold mt-[56px]">Get a Quote</button>
                    <div className=" flex items-center gap-6 mt-16 max-md:flex-wrap">
                        <div className="pr-[45px] pl-4 pt-2 pb-[6px] flex bg-white rounded-2xl items-center gap-3">
                            <div className=' w-10 h-10'>  <img src={googleIcon} alt="google icon" /></div>
                            <div className=' flex items-start flex-col'>
                                <p className=' font-manrope text-xsm font-normal text-black-200'>Google Review</p>
                                <div className=' flex items-center'>
                                    <p className=' font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} />
                                </div>
                                <p className=' font-manrope text-xsm font-normal text-black-200'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className="pr-[45px] pl-4 pt-2 pb-[6px] flex bg-white rounded-2xl items-center gap-3">
                            <div className=' w-12 h-12'>  <img src={starIcon} alt="star icon" /></div>
                            <div className=' flex items-start flex-col'>
                                <p className=' font-manrope text-xsm font-normal text-black-200'>Trust Pilot Review</p>
                                <div className=' flex items-center'>
                                    <p className=' font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} />
                                </div>
                                <p className=' font-manrope text-xsm font-normal text-black-200'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className='w-20 h-20'>
                            <img src={certificate} alt="certificate" className='w-full' />
                        </div>
                        <div className='w-20 h-20'>
                            <img src={award} alt="certificate" className='w-full' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header