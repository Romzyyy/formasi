import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div className='avatar-group grid grid-cols-4  px-6 -space-x-6'>
            
            <div className='bg-blue-500 w-full h-full pl-10'>
                <div className='avatar'>
                    <div className='w-full'>
                        <Image
                            alt='image'
                            width={1000}
                            height={1000}
                            src='/asd1.jpg'
                        />
                    </div>
                </div>
            </div>
            <div className='bg-red-500'>
                <div className='avatar'>
                    <div className='w-full'>
                        <Image
                            alt='image'
                            width={1000}
                            height={1000}
                            src='/asd2.jpg'
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='avatar'>
                    <div className='w-full'>
                        <Image
                            alt='image'
                            width={1000}
                            height={1000}
                            src='/asd3.jpg'
                        />
                    </div>
                </div>
            </div>
            <div>
                <div className='avatar'>
                    <div className='w-full'>
                        <Image
                            alt='image'
                            width={1000}
                            height={1000}
                            src='/asd4.jpg'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
