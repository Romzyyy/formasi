import Image from "next/image";
import React from "react";

const avatar = [
  {
    name: "Rachel Miller",
    jobtitle: "Ketua",
    src: "/asd1.jpg"
  },
  {
    name: "Ethan Turner",
    jobtitle: "Wakil",
    src: "/asd2.jpg"
  },
  {
    name: "Olivia Walker",
    jobtitle: "Sekretaris",
    src: "/asd3.jpg"
  },
  {
    name: "Jackson Bennett",
    jobtitle: "Bendahara",
    src: "/asd4.jpg"
  },
  {
    name: "Sophia Mitchell",
    jobtitle: "Koordinator",
    src: "/slider1.jpeg"
  },
  {
    name: "Liam Anderson",
    jobtitle: "TIM Kreative",
    src: "/slider2.jpeg"
  },
  {
    name: "Ava Collins",
    jobtitle: "TIM IT",
    src: "/slider3.jpeg"
  }
]

export default async function Avatar() {
  return (
    <div id="Team" className=" w-full pb-20 md:pb-10">
      <h1 className=" my-20 md:my-10 text-center text-xl md:text-3xl font-semibold text-slate-800">
        Meet Our Team Members
      </h1>
      <div
        
        className=" flex flex-wrap  justify-center px-6 sm:px-20 lg:px-36 2xl:px-80 "
      >
        {avatar.map((item) => (
          <div
            key={item.name}
            className="my-2 mx-2 justify-center justify-items-center w-28 md:w-44 xl:w-52"
          >
            <div className="my-2 mx-auto  h-24 w-24  md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40 ">
              <Image
                className=" h-full w-full rounded-full object-cover"
                alt="image"
                width={1000}
                height={1000}
                src={item.src}
              />
            </div>
            <p className="text-center font-medium md:font-semibold md:text-xl">
              {item.name}
            </p>
            <p className="text-center">{item.jobtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
