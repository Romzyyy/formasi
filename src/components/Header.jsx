import Image from 'next/image'

export default function Dashboard() {
  return (
    <div className='w-screen fixed bg-slate-50 top-0'>
        <div className='flex justify-between w-full h-16 items-center px-6'>
            <div className='flex items-center gap-2'>
                <div className='w-12 h-12'>
                <Image className='object-cover mt-1' src={"/logo.png"} width={100} height={100}/>
                </div>
                <p className='text-xl font-bold text-slate-900'>FORMASI</p>
            </div>
            <div className='w-12 h-12'>
                <Image className='object-cover object-top h-full rounded-full' src={"/asd1.jpg"} width={100} height={100}/>
            </div>
        </div>
    </div>
  )
}
