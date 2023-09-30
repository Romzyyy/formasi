import Image from "next/image";

const images = [
  { title: "image1", src: "/image/slider2.jpeg" },
  { title: "image2", src: "/image/slider1.jpeg" },
  { title: "image3", src: "/image/slider2.jpeg" },
  { title: "image4", src: "/image/slider3.jpeg" },
  { title: "image5", src: "/image/slider1.jpeg" },
  { title: "image6", src: "/image/slider2.jpeg" },
  { title: "image7", src: "/image/slider3.jpeg" },
  { title: "image8", src: "/image/slider2.jpeg" },
];

export default async function Galery() {
  return (
    <div
      id="Galery"
      className="relative flex w-full flex-col bg-slate-800 px-6 sm:px-20 lg:px-36"
    >
      <h1 className="mb-4 mt-14 cursor-pointer text-2xl font-bold text-slate-200 hover:text-slate-50">
        Galery
      </h1>
      <div className="flex flex-row">
        <div className="mb-10 columns-2 md:columns-3 lg:columns-4">
          {images.map((image) => (
            <Image
              key={image.title}
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