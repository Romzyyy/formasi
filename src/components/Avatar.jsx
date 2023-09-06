import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div
            id="Team"
            className=" flex flex-wrap justify-center px-6 sm:px-20 lg:px-36 2xl:px-80 "
        >
            <div className='my-2'>
                <div className="m-1 my-2 h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40">
                    <Image
                        className=" h-full w-full rounded-full object-cover"
                        alt="image"
                        width={1000}
                        height={1000}
                        src="/asd1.jpg"
                    />
                </div>
                <p className="text-center font-medium md:font-semibold md:text-xl">jhon doe</p>
                <p className="text-center">ketua</p>
            </div>
            <div className='my-2'>
                <div className="m-1 my-2 h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40">
                    <Image
                        className=" h-full w-full rounded-full object-cover"
                        alt="image"
                        width={1000}
                        height={1000}
                        src="/asd1.jpg"
                    />
                </div>
                <p className="text-center font-medium md:font-semibold md:text-xl">jhon doe</p>
                <p className="text-center">ketua</p>
            </div>
            <div className='my-2'>
                <div className="m-1 my-2 h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40">
                    <Image
                        className=" h-full w-full rounded-full object-cover"
                        alt="image"
                        width={1000}
                        height={1000}
                        src="/asd1.jpg"
                    />
                </div>
                <p className="text-center font-medium md:font-semibold md:text-xl">jhon doe</p>
                <p className="text-center">ketua</p>
            </div>
            <div className='my-2'>
                <div className="m-1 my-2 h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40">
                    <Image
                        className=" h-full w-full rounded-full object-cover"
                        alt="image"
                        width={1000}
                        height={1000}
                        src="/asd1.jpg"
                    />
                </div>
                <p className="text-center font-medium md:font-semibold md:text-xl">jhon doe</p>
                <p className="text-center">ketua</p>
            </div>
            <div className='my-2'>
                <div className="m-1 my-2 h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40">
                    <Image
                        className=" h-full w-full rounded-full object-cover"
                        alt="image"
                        width={1000}
                        height={1000}
                        src="/asd1.jpg"
                    />
                </div>
                <p className="text-center font-medium md:font-semibold md:text-xl">jhon doe</p>
                <p className="text-center">ketua</p>
            </div>

        </div>
    )
}
