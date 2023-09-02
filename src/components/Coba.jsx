import Image from 'next/image'
import React from 'react'

export default function Coba() {
    return (
        <div className=' flex justify-center flex-wrap px-6 -space-x-14 justify-items-center '>
            <div className='w-36 h-36 mb-6'>
                <Image
                    className=' rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd1.jpg'
                />
            </div>
            <div className='w-36 h-36 mb-6'>
                <Image
                    className=' rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd2.jpg'
                />
            </div>
            <div className='w-36 h-36 mb-6'>
                <Image
                    className='rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd3.jpg'
                />
            </div>
            <div className=' w-36 h-36 mb-6 '>
                <Image
                    className='ml-7 rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd4.jpg'
                />
            </div>
            <div className='w-36 h-36 mb-6'>
                <Image
                    className='ml-7 rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd4.jpg'
                />
            </div>
            <div className='w-36 h-36 mb-6'>
                <Image
                    className='ml-7 rounded-full h-full w-full object-cover border-4'
                    alt='image'
                    width={1000}
                    height={1000}
                    src='/asd4.jpg'
                />
            </div>
        </div>
    )
}
