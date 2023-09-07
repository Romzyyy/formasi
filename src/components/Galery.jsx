import Image from "next/image";

async function getImages() {
  const res = await fetch("http://localhost:5000/images");
  return res.json();
}

export default async function Galery() {
  const images = await getImages();
  return (
    <div
      id="Galery"
      className="relative flex w-full flex-col bg-slate-900 px-6 sm:px-20 lg:px-36 2xl:px-80 "
    >
      <h1 className="my-6 cursor-pointer text-xl md:text-3xl font-semibold text-slate-200 hover:text-slate-50">
        Galery
      </h1>
      <div className="flex flex-row">
        <div className="mb-10 columns-2 md:columns-3 lg:columns-4">
          {images.map((image, index) => (
            <Image
              key={image.id}
              src={image.src}
              alt={image.title}
              width={1000}
              height={1000}
              className="mb-5 aspect-auto w-full rounded-md"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
