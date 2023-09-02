'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Navbar() {
    const [toggle, setToggle] = useState(false)
    return (
        <div className='navbar-center h-12 flex items-center text-slate-50 fixed top-0 left-0 right-0 z-50 bg-slate-900'>
            <div className='flex justify-between px-6 w-full'>
                <div className='flex items-center cursor-pointer'>
                    <Image
                        src={'/logo.png'}
                        width={100}
                        height={100}
                        className='w-8 h-8'
                    />
                    <div className='sm:flex flex-col ml-2 hidden'>
                        <a className='text-lg font-bold'>FORMASI</a>
                        <a className='text-sm'>forum sistem informasi</a>
                    </div>
                </div>
                <div
                    className='cursor-pointer transition'
                    onClick={() => setToggle(toggle ? false : true)}>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={2}
                        stroke='currentColor'
                        className='w-8 h-8'>
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d={
                                toggle
                                    ? 'M6 18L18 6M6 6l12 12'
                                    : 'M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
                            }
                        />
                    </svg>
                    <div className={toggle ? 'block' : 'hidden'}>
                        <div className='absolute bg-opacity-5 backdrop-blur-sm bg-white/90 w-40 p-4 right-3 top-full rounded-md font-medium text-slate-800'>
                            <ul className='flex flex-col md:flex-row gap-2 md:gap-10 px-1 '>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a href='/footer'>Home</a>
                                </li>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a>About</a>
                                </li>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a>News</a>
                                </li>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a>Gallery</a>
                                </li>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a>Team</a>
                                </li>
                                <li className='cursor-pointer hover:text-gray-400 transition'>
                                    <a>Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
