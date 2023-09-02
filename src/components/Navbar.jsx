import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='navbar text-slate-50 bg-opacity-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/40'>
            <div className='flex justify-between px-6 w-full'>
                <div className='flex items-center cursor-pointer'>
                    <Image
                        src={'/logo.png'}
                        width={100}
                        height={100}
                        className='w-10 h-10'
                    />
                    <div className='flex flex-col ml-2'>
                        <a className='text-lg font-bold'>FORMASI</a>
                        <a className='text-sm'>forum sistem informasi</a>
                    </div>
                </div>
                <div className='md:flex-none font-medium text-lg hidden'>
                    <ul className='flex flex-col md:flex-row gap-2 md:gap-10 px-1 '>
                        <li className='cursor-pointer hover:text-gray-400 transition'>
                            <a>Home</a>
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
                <div>
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
                            d='M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5'
                        />
                    </svg>
                </div>
            </div>
        </div>
    )
}
