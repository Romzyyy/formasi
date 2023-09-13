import Image from 'next/image'
import React from 'react'

const navigationSide = [
    { name: "Home", href: "Home" },
    { name: "Profile", href: "Profile" },
    { name: "Information", href: "Information" },
    { name: "Galery", href: "Galery" },
    { name: "Team", href: "Team" },
  ];

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
        <div className='flex'>
            <div className='w-1/3 bg-slate-50 h-screen'>
                <ul className='flex flex-col gap-4 cursor-pointer mx-4 mt-4 '>
                    {navigationSide.map((item)=>(
                       <li key={item.name} className=' p-2 rounded-md active:bg-slate-100'>
                        <a href={item.href}>{item.name}</a>
                       </li>
                    ))}
                </ul>
            </div>
            <div className='mt-32 mx-auto'>
                <h1 className='font-bold text-3xl'>WELCOMEBACK</h1>
            </div>
        </div>
    </div>
  )
}
