import Image from 'next/image'

export default function Navbar() {
    return (
        <div className='navbar bg-red-600 text-slate-50 bg-opacity-5 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/30'>
            <div className='flex flex-col md:flex-row justify-around w-full'>
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
                <div className='md:flex-none font-medium text-lg'>
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
            </div>
        </div>
    )
}
