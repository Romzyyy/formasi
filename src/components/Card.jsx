export default function Card({ title, desc }) {
    return (
        <div className='card w-full bg-gray-50 text-slate-800 hover:shadow-xl '>
            <div className='card-body rounded-none'>
                <h2 className='card-title text-base'>{title}</h2>
                <div className='w-full h-24 bg-blue- overflow-hidden'>
                    <p>{desc}</p>
                </div>
                <div className='card-actions w-fit'>
                    <p className='cursor-pointer font-medium hover:text-gray-500 transition underline'>
                        Selengkapnya
                    </p>
                </div>
            </div>
        </div>
    )
}
