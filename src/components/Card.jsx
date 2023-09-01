export default function Card({ title, desc }) {
    return (
        <div className='card w-full bg-gray-50 text-stone-950 hover:shadow-xl'>
            <div className='card-body  rounded-lg'>
                <h2 className='card-title mb-4'>{title}</h2>
                <div className='w-full h-44 bg-blue- overflow-hidden'>
                    <p>{desc}</p>
                </div>
                <div className='card-actions w-fit mt-6'>
                    <p className='cursor-pointer font-medium hover:text-gray-500 transition'>
                        Selengkapnya
                    </p>
                </div>
            </div>
        </div>
    )
}
