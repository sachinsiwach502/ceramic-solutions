import star from '../assets/images/png/quality-star.png'
import phoneCall from '../assets/images/png/support-phone-icon.png'
import thampsUp from '../assets/images/png/thams-up.png'
import whyChooseUs from '../assets/images/png/why-choose-us-img.png'
import redBox from '../assets/images/png/why-choose-us-red-box.png'

const WhyChooseUs = () => {
    return (
        <section className=" bg-red-100">
            <div className=" container py-[100px]">
                <div className=" row max-lg:max-w-[592px] mx-auto max-lg max-lg:flex-col-reverse">
                    <div className=" lg:w-1/2 px-3">
                        <h1 className="font-jakarata font-semibold  text-5xl text-black capitalize">Why Choose us?</h1>
                        <p className="font-jakarata font-normal text-black text-lg pt-5 pb-2">Lörem ipsum koda astrobel: sutaveligen. Rodod bänera viliga. Pregigt primasofi dede facebooka: förutom tivaligt. </p>
                        <div className=" flex items-start gap-5 pt-6">
                            <img src={star} alt="star" width={"62px"} height={"62px"} />
                            <div className="flex items-start flex-col">
                                <h3 className='font-semibold font-jakarata text-3xl text-black-100'>High Quality Materials</h3>
                                <p className="text-black font-jakarata  font-normal text-base pt-3 max-w-[370px]">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                            </div>
                        </div>
                        <div className=" flex items-start gap-5 pt-6">
                            <img src={thampsUp} alt="star" width={"62px"} height={"62px"} />
                            <div className="flex items-start flex-col">
                                <h3 className='font-semibold font-jakarata text-3xl text-black-100'>Durability with Warranty</h3>
                                <p className="text-black font-jakarata  font-normal text-base pt-3 max-w-[370px]">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                            </div>
                        </div>
                        <div className=" flex items-start gap-5 pt-6">
                            <img src={phoneCall} alt="star" width={"62px"} height={"62px"} />
                            <div className="flex items-start flex-col">
                                <h3 className='font-semibold font-jakarata text-3xl text-black-100'>24/7 Support</h3>
                                <p className="text-black font-jakarata  font-normal text-base pt-3 max-w-[370px]">Es ist ein lang erwiesener Fakt, dass ein Leser vom Text abgelenkt wird.</p>
                            </div>
                        </div>
                        <button className=" bg-red text-xlg max-w-[173px] w-full h-[63px] text-white rounded-[56px] font-jakarata font-bold mt-9">Get a Quote</button>
                    </div>
                    <div className=' lg:w-1/2 px-3'>
                        <div className=' relative'>
                            <div className=' max-w-[496px] h-[523px] relative z-30'> <img src={whyChooseUs} alt="bed room" className='w-full h-full' /></div>
                            <div className=' absolute max-w-[300px] h-[396px] translate-x-6 top-[40%] -left-[20%] z-20 max-lg:hidden'>
                                <img src={redBox} alt="red box" className='w-full h-full' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs