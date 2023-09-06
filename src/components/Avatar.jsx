import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div
            id="Team"
            className=" flex flex-wrap justify-center justify-items-center px-6 sm:px-20 lg:px-36 2xl:px-80 "
        >
            <div className="my-2 h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className=" h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd1.jpg"
                />
            </div>
            <div className="my-2  h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className=" h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd2.jpg"
                />
            </div>
            <div className="my-2  h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className="h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd3.jpg"
                />
            </div>
            <div className=" my-2 h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2 ">
                <Image
                    className=" sm:ml-0 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="my-2  h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className=" sm:ml-0 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="my-2  h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className=" sm:ml-0 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="my-2  h-28 w-28 md:h-32 md:w-32 xl:h-40 xl:w-40 m-2">
                <Image
                    className=" sm:ml-0 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
        </div>
    )
}
