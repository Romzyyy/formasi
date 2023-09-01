import Image from 'next/image'

export default function Team() {
    return (
        <div className='avatar -space-x-20'>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd1.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd2.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd3.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd4.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
                    <Image
                        alt='image'
                        width={1000}
                        height={1000}
                        src='/asd5.jpg'
                    />
                </div>
            </div>
            <div className='avatar p-6'>
                <div className='w-56 rounded-full shadow-[-5px_1px_3px_5px_white] cursor-pointer'>
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
