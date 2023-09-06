import Image from 'next/image'
import React from 'react'

export default function Avatar() {
    return (
        <div
            id="Team"
            className=" flex flex-wrap justify-center justify-items-center -space-x-14 px-6 "
        >
            <div className="mb-6 h-36 w-36">
                <Image
                    className=" h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd1.jpg"
                />
            </div>
            <div className="mb-6 h-36 w-36">
                <Image
                    className=" h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd2.jpg"
                />
            </div>
            <div className="mb-6 h-36 w-36">
                <Image
                    className="h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd3.jpg"
                />
            </div>
            <div className=" mb-6 h-36 w-36 ">
                <Image
                    className="ml-7 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="mb-6 h-36 w-36">
                <Image
                    className="ml-7 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="mb-6 h-36 w-36">
                <Image
                    className="ml-7 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
            <div className="mb-6 h-36 w-36">
                <Image
                    className="ml-7 h-full w-full rounded-full border-4 object-cover"
                    alt="image"
                    width={1000}
                    height={1000}
                    src="/asd4.jpg"
                />
            </div>
        </div>
    )
}
