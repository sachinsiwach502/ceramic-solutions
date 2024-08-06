import React from 'react'
import logo from '../assets/images/png/nav-logo.png'
import mialLogo from '../assets/images/png/mail-logo.png'
import phoneCall from '../assets/images/png/phn-call-img.png'
import { FacebookLogo, InstagramLogo, LinkedinLogo, TwitterLogo } from './icon'

const Footer = () => {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='xl:w-3/12 px-3'>
                        <div className='max-w-[175px] pointer-events-none'><img src={logo} alt="logo" /></div>
                        <a href="mailto:@gmail.com" className='flex gap-2 mt-5 items-center'>
                            <img src={mialLogo} alt="mail logo" className='size-6' />
                            <p className='text-black hover:text-red ease-in-out duration-300'>help@Dealzip.com</p>
                        </a>
                        <a href="phn:9235027" className='flex gap-2 lg:mt-4 mt-2 items-center'>
                            <img src={phoneCall} alt="phone" className='size-6' />
                            <p className='text-black hover:text-red ease-in-out duration-300'>+1 234 456 678 89</p>
                        </a>
                        <div className='flex gap-2 lg:mt-6 mt-3'>
                            <a href="https://www.facebook.com/login/" target='_blank' className='hover:scale-105 ease-in-out duration-300'>
                                <FacebookLogo />
                            </a>
                            <a href="https://www.instagram.com/accounts/login/?hl=en" target='_blank' className='hover:scale-105 ease-in-out duration-300'>
                                <InstagramLogo />
                            </a>
                            <a href="https://twitter.com/login" target='_blank' className='hover:scale-105 ease-in-out duration-300'>
                                <TwitterLogo />
                            </a>
                            <a href="https://twitter.com/login" target='_blank' className='hover:scale-105 ease-in-out duration-300'>
                                <LinkedinLogo />
                            </a>
                        </div>
                    </div>
                    <div className='xl:w-9/12 px-3 w-full max-xl:mt-5'>
                        <div className='row w-full lg:flex-nowrap'>
                            <div className='lg:w-2/12 sm:w-1/3 w-2/6 px-3'>
                                <ul>
                                    <li>
                                        <h3 className='capitalize text-black-300 text-3xl font-semibold lg:pb-2'>links</h3>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>home</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>about us</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>services</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 '>showcase</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:w-3/12 sm:w-1/3 w-2/6 px-3'>
                                <ul>
                                    <li>
                                        <h3 className='capitalize text-black-300 text-3xl font-semibold lg:pb-2'>legal</h3>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>terms of use</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>privacy policy</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>cookie policy</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:w-2/12 sm:w-1/3 w-2/6 px-3'>
                                <ul>
                                    <li>
                                        <h3 className='capitalize text-black-300 text-3xl font-semibold lg:pb-2'>product</h3>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>take tour</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>live chat</a>
                                    </li>
                                    <li className='pt-3'>
                                        <a href="/" className='capitalize text-black-300 hover:text-red ease-in-out duration-300'>reveiws</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='lg:w-5/12 px-3 w-full max-lg:mt-5'>
                                <ul className='max-w-[400px]'>
                                    <li>
                                        <h3 className='capitalize font-jakarata text-black-300 text-3xl font-semibold lg:pb-2'>product</h3>
                                    </li>
                                    <li className='lg:pt-3 pt-1'>    <a href="/" className='capitalize font-jakarata text-black-300 hover:text-red ease-in-out duration-300'>Stay up to date</a></li>
                                    <li className='mt-3'>
                                        <form action="" className='border border-light_gry p-[10px] rounded-[62px] flex items-center w-full justify-between'>
                                            <input type="email" placeholder='Your email' className='text-grey font-jakarata outline-none pr-2' required />
                                            <button className="bg-red w-[160px] h-[55px] text-white rounded-[56px] font-jakarata font-semibold hover:bg-rose-500 ease-linear duration-300">Subscribe</button>
                                        </form>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full h-[2px] mt-11' style={{ background: 'linear-gradient(90deg, rgba(22, 22, 22, 0) 0%, #696969 51.56%, rgba(22, 22, 22, 0) 100%)' }}></div>
            <p className='text-center text-black-300 py-4 font-jakarata px-6'>Copyright 2024 ceramicsolutions.com all rights reserved</p>

        </>
    )
}

export default Footer