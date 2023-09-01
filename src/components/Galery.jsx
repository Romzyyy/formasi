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
                        src={'/asd5.jpg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5'
                    />
                    <Image
                        src={'/asd7.jpg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5 '
                    />
                    <Image
                        src={'/asd4.jpg'}
                        alt='image'
                        width={1000}
                        height={1000}
                        className='w-full aspect-auto rounded-lg mb-5'
                    />
                </div>
            </div>
            {/* <div className='absolute inset-y-auto w-[1330px] h-20 bottom-0'>
                <p className='text-right text-2xl font-medium text-slate-50 mt-6 cursor-pointer hover:text-gray-500'>
                    Selengkapnya
                </p>
            </div> */}
        </div>
    )
}
