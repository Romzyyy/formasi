import Image from 'next/image'

export default function Team() {
    return (
        <div className='avatar grid grid-cols-4 gap-4 -space-x-20 bg-blue-500'>
            <div className='avatar p-6 bg-yellow-500'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={100}
                        height={1000}
                        src='/asd1.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6 bg-indigo-600'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd2.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd3.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd4.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd5.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-32 rounded-full shadow-[-2px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd7.jpg'
                    />
                </div>
            </div>
        </div>
    )
}
