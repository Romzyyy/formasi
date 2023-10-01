import Image from "next/image";
import React from "react";

const avatar = [
  {
    name: "Rachel Miller",
    jobtitle: "Ketua",
    src: "/image/asd1.webp"
  },
  {
    name: "Ethan Turner",
    jobtitle: "Wakil",
    src: "/image/asd2.webp"
  },
  {
    name: "Olivia Walker",
    jobtitle: "Sekretaris",
    src: "/image/asd3.webp"
  },
  {
    name: "Jackson Bennett",
    jobtitle: "Bendahara",
    src: "/image/asd4.webp"
  },
  {
    name: "Sophia Mitchell",
    jobtitle: "Koordinator",
    src: "/image/slider1.webp"
  },
  {
    name: "Liam Anderson",
    jobtitle: "TIM Kreative",
    src: "/image/slider2.webp"
  },
  {
    name: "Ava Collins",
    jobtitle: "TIM IT",
    src: "/image/slider3.webp"
  }
]

export default async function Avatar() {
  return (
    <div id="Team" className=" w-full pb-20 md:pb-10">
      <h1 className=" my-20 md:my-10 text-center text-2xl font-semibold text-slate-800">
        Meet Our Team Members
      </h1>
      <div
        
        className=" flex flex-wrap  justify-around px-6 sm:px-20 lg:px-36"
      >
        {avatar.map((item) => (
          <div
            key={item.name}
            className="my-2 justify-center justify-items-center w-24"
          >
            <div className="my-2 mx-auto  h-24 w-24 ">
              <Image
                className=" h-full w-full rounded-full object-cover"
                alt="image"
                width={1000}
                height={1000}
                src={item.src}
              />
            </div>
            <p className="text-center font-semibold">
              {item.name}
            </p>
            <p className="text-center">{item.jobtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
