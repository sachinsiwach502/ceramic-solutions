import navLogo from '../assets/images/png/nav-logo.png'
import phnCall from '../assets/images/png/call.png'
import { useState } from 'react'

const NavLinks = () => {
    const [nav, setNav] = useState(false)
    const handleNavChange = () => {
        setNav(!nav)
        let body = document.body;
        if (!nav) {
            body.style.overflow = "hidden";
        } else {
            body.style.overflow = "auto";
        }
    }

    const body = document.body;
    return (
        <nav className='px-3'>
            <div className="container bg-white rounded-3xl min-h-[84px] mt-4">
                <div className=" flex  items-center justify-between p-4">
                    <a href="#" className='w-[106px] h-[52px]'>
                        <img src={navLogo} alt="nav logo" className=' w-full h-full' />
                    </a>
                    <ul className={`${nav ? "max-lg:left-0" : "max-lg:left-[-100%]"} flex items-center md:gap-7 sm:gap-5 gap-4 max-lg:flex-col max-lg:bg-white max-lg:justify-center max-lg:items-center max-lg:fixed max-lg:min-h-screen max-lg:w-full max-lg:h-full z-20 max-lg:top-0 ease-in-out duration-300`}>
                        <li>
                            <a href="#home" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>Home</a>
                        </li>
                        <li>
                            <a href="#about" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>About</a>
                        </li>
                        <li>
                            <a href="#services" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>Services</a>
                        </li>
                        <li>
                            <a href="#portfolio" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>Contact us</a>
                        </li>
                        <li>
                            <a href="#request" className=' font-jakarata font-normal text-base text-black hover:text-red ease-in-out duration-300'>Request a Qoute</a>
                        </li>
                        <button className=" bg-red  text-white rounded-[56px]  items-center gap-[10px] pt-4 pr-5 pb-4 pl-5 max-lg:flex hidden hover:bg-rose-500 ease-in-out duration-300">
                            <div className='w-6 h-6'> <img src={phnCall} alt="phn call" className='w-full h-full' /></div>
                            <p className=' font-jakarata font-bold text-xlg'>(865) 621-1717</p>
                        </button>
                    </ul>
                    <button className=" bg-red  text-white rounded-[56px] lg:flex hidden items-center gap-[10px] pt-4 pr-5 pb-4 pl-5 hover:bg-rose-500 ease-in-out duration-300">
                        <div className='w-6 h-6'> <img src={phnCall} alt="phn call" className='w-full h-full' /></div>
                        <p className=' font-jakarata font-bold text-xlg'>(865) 621-1717</p>
                    </button>
                    <div className='w-9 h-8 justify-between flex-col max-lg:flex hidden relative z-30 right-0 bg-red rounded-md p-[6px]' onClick={handleNavChange}>
                        <span className={`w-full bg-white h-1 ease-in-out duration-300 rounded ${nav ? "rotate-45 absolute right-[20%] top-[42%] w-[24px]" : ""}`}></span>
                        <span className={`w-full bg-white h-1 ease-in-out duration-300 rounded ${nav ? "hidden" : ""}`}></span>
                        <span className={`w-full bg-white h-1 ease-in-out duration-300 rounded ${nav ? "-rotate-45 bottom-3 absolute w-[24px] top-[40%] right-[20%]" : ""}`}></span>
                    </div>
                </div>
            </div>
        </nav >
    )
}

export default NavLinks