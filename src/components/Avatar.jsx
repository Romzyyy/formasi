import Image from "next/image";
import React from "react";

async function getAvatars() {
  const res = await fetch("http://localhost:5000/avatar");
  return res.json();
}

export default async function Avatar() {
  const avatar = await getAvatars();
  return (
    <div className=" w-full pb-10">
      <h1 className=" my-10 text-center text-xl md:text-2xl font-semibold text-slate-800">
        Meet Our Team Members
      </h1>
      <div
        id="Team"
        className=" flex flex-wrap justify-center px-6 sm:px-20 lg:px-36 2xl:px-80 "
      >
        {avatar.map((avatars, index) => (
          <div
            key={avatars.id}
            className="my-2 flex flex-col mx-4 justify-items-center w-24"
          >
            <div className="my-2  h-24 w-24 md:mx-6 md:h-32 md:w-32 xl:h-40 xl:w-40 ">
              <Image
                className=" h-full w-full rounded-full object-cover"
                alt="image"
                width={1000}
                height={1000}
                src={avatars.src}
              />
            </div>
            <p className="text-center font-medium md:font-semibold md:text-xl">
              {avatars.name}
            </p>
            <p className="text-center">{avatars.jobtitle}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
