export default function Card({ title, desc }) {
    return (
        <div className="card w-full bg-gray-300 bg-opacity-25 text-slate-800 hover:shadow-xl ">
            <div className="card-body rounded-lg">
                <h2 className="card-title text-base">{title}</h2>
                <div className="bg-blue- h-24 w-full overflow-hidden">
                    <p>{desc}</p>
                </div>
                <div className="card-actions w-fit">
                    <p className="cursor-pointer font-medium underline transition hover:text-gray-500">
                        Selengkapnya
                    </p>
                </div>
            </div>
        </div>
    )
}
