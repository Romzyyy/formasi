export default function Card({ title, desc }) {
    return (
        <div className='card w-full bg-gray-100 text-stone-950 hover:shadow-xl hover:bg-gray-50'>
            <div className='card-body rounded-none'>
                <h2 className='card-title text-base'>{title}</h2>
                <div className='w-full h-28 bg-blue- overflow-hidden'>
                    <p>{desc}</p>
                </div>
                <div className='card-actions w-fit'>
                    <p className='cursor-pointer font-medium hover:text-gray-500 transition'>
                        Selengkapnya
                    </p>
                </div>
            </div>
        </div>
    )
}
