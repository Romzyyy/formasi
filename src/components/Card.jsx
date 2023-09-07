import { info } from "autoprefixer";

async function getInfo() {
  const res = await fetch("http://localhost:5000/news");
  return res.json();
}

export default async function Card() {
  const infos = await getInfo();
  return (
    <div
      id="News"
      className="mb-14 flex w-full flex-col px-6 text-slate-800 sm:px-20 lg:px-36 2xl:px-80 "
    >
      <h1 className="mb-4 text-xl md:text-2xl font-semibold">Information</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {infos.map((news, index) => (
          <div className="card w-full bg-gray-300 bg-opacity-25 text-slate-800 hover:shadow-xl ">
            <div key={news.id} className="card-body rounded-md">
              <h2 className="card-title text-base">{news.title}</h2>
              <div className="bg-blue- h-24 w-full overflow-hidden">
                <p>{news.content}</p>
              </div>
              <div className="card-actions w-fit">
                <p className="cursor-pointer font-medium underline transition hover:text-gray-500">
                  Selengkapnya
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
