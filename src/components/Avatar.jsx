import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div className='avatar-group px-6 -space-x-6'>
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
    )
}
