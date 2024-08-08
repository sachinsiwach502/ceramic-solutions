
import googleIcon from '../assets/images/png/google-icon.png'
import rateUsStar from '../assets/images/png/rate-us-star.png'
import starIcon from '../assets/images/png/star-icon.png'
import CustomersSlider from './CustomersSlider';

const Customers = () => {
    return (
        <div className='lg:pt-[140px] sm:pt-20 pt-16 max-w-[1920px] mx-auto'>
            <div className='container'>
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center font-jakarata font-semibold  md:text-5xl text-4xxl text-black capitalize">What Our Customers Say</h1>
                    <p className="text-center max-w-[641px] text-lg font-normal font-jakarata pt-5">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. Fejkade</p>
                    <div className="flex items-center pt-8 gap-6  max-sm:flex-wrap justify-center">
                        <div className="pr-[45px] pl-4 pt-2 pb-[6px] flex bg-white rounded-2xl items-center gap-3 border border-light_gry max-w-[228px] h-20">
                            <div className='w-10 h-10'>  <img src={googleIcon} alt="google icon" /></div>
                            <div className='flex items-start flex-col'>
                                <p className='font-manrope text-xms font-normal text-black-200'>Google Review</p>
                                <div className='flex items-center'>
                                    <p className='font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} />
                                </div>
                                <p className=' font-manrope text-xms font-normal text-black-200 text-nowrap'>Based on 145 reviews</p>
                            </div>
                        </div>
                        <div className="pr-[45px] pl-4 pt-2 pb-[6px] flex bg-white rounded-2xl items-center gap-3 border border-light_gry">
                            <div className=' w-12 h-12'>  <img src={starIcon} alt="star icon" /></div>
                            <div className=' flex items-start flex-col'>
                                <p className=' font-manrope text-xms font-normal text-black-200'>Trust Pilot Review</p>
                                <div className=' flex items-center'>
                                    <p className=' font-manrope font-normal text-3xl text-black-200'>4.6</p>
                                    <img src={rateUsStar} alt="stars" width={'83px'} h={"16px"} />
                                </div>
                                <p className=' font-manrope text-xms font-normal text-black-200 text-nowrap'>Based on 145 reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='customer-slider'> <CustomersSlider /></div>
        </div>
    )
}

export default Customers