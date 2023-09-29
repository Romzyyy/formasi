

const information = [
  {
    title: "web developer",
    content: "Web developer akan terlibat dalam proses pembuatan dari awal mulai dari mendesain tampilan hingga coding."
  },
  {
    title: "Database Administrator",
    content: "Pekerjaannya meliputi mengurutkan dan mengatur data dalam susunan tertentu untuk memudahkan pengguna data tertentu untuk mengaksesnya secara eksklusif."
  },
  {
    title: "Programmer",
    content: "Dikutip dari Techopedia, programmer adalah individu yang membuat software atau aplikasi komputer dengan memberikan instruksi pemrograman khusus di komputer."
  },
  {
    title: "System Engineer",
    content: "Profesi ini bertugas untuk merancang dan mengimplementasikan software untuk berbagai informasi dan aplikasi berbasis teknologi serta prosedur pengujian untuk"
  }
]


export default async function Card() {
  return (
    <div
      id="Information"
      className="mb-14 flex w-full flex-col px-6 text-slate-800 sm:px-20 lg:px-36 "
    >
      <h1 className="mb-4 mt-14 text-2xl font-bold">Information</h1>
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
        {information.map((info) => (
          <div className="card w-full bg-gray-300 bg-opacity-25 text-slate-800 hover:shadow-xl ">
            <div key={info.title} className="card-body rounded-md">
              <h2 className="card-title text-base">{info.title}</h2>
              <div className="bg-blue- h-24 w-full overflow-hidden">
                <p>{info.content}</p>
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
