import Image from 'next/image'
import React from 'react'



export default function Dashboard() {
  return (
    <div className='w-screen'>
        <div className='flex justify-between w-full h-14 px-6'>
            <div className='flex items-center gap-2'>
                <div className='w-14 h-14'>
                <Image className='object-cover mt-1' src={"/logo.png"} width={100} height={100}/>
                </div>
                <p className='text-2xl font-semibold text-slate-900'>FORMASI</p>
            </div>
            <div className='w-14 h-14'>
                <Image className='object-cover object-top h-full rounded-full' src={"/asd1.jpg"} width={100} height={100}/>
            </div>
        </div>

    </div>
  )
}
