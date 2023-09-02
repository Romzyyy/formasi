import Image from 'next/image'

export default function Galery() {
    return (
        <div className='relative flex flex-col w-full bg-slate-800 mt-20 px-6'>
            <h1 className='my-6 text-xl font-semibold text-slate-200 cursor-pointer hover:text-slate-50'>
                Galery
            </h1>
            <div className='flex flex-row'>
                <div className='columns-2 mb-10 '>
                    <Image
                        src={'/slider1.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5'
                    />
                    <Image
                        src={'/slider2.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5 '
                    />
                    <Image
                        src={'/slider3.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5'
                    />
                    <Image
                        src={'/slider1.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5'
                    />
                </div>
            </div>
        </div>
    )
}
