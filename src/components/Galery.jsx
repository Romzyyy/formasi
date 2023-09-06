import Image from 'next/image'

export default function Galery() {
    return (
        <div
            id='Galery'
            className='relative flex w-full flex-col bg-slate-900 px-6'>
            <h1 className='my-6 cursor-pointer text-xl font-semibold text-slate-200 hover:text-slate-50'>
                Galery
            </h1>
            <div className='flex flex-row'>
                <div className='mb-10 columns-2 '>
                    <Image
                        src={'/slider1.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='mb-5 aspect-auto w-full rounded-lg'
                    />
                    <Image
                        src={'/slider2.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='mb-5 aspect-auto w-full rounded-lg '
                    />
                    <Image
                        src={'/slider3.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='mb-5 aspect-auto w-full rounded-lg'
                    />
                    <Image
                        src={'/slider1.jpeg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='mb-5 aspect-auto w-full rounded-lg'
                    />
                </div>
            </div>
        </div>
    )
}
