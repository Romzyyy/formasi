"use client";
import Image from "next/image";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "#Home" },
  { name: "Profile", href: "#Profile" },
  { name: "Information", href: "#Information" },
  { name: "Galery", href: "#Galery" },
  { name: "Team", href: "#Team" },
  { name: "Contact", href: "#Contact" },
];

export default function Navbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="navbar-center fixed left-0 right-0 top-0 z-50 flex h-12 lg:h-14 items-center bg-slate-900 text-slate-50">
      <div className="flex w-full justify-between items-center px-6  sm:px-20 lg:px-32">
        <div className="flex cursor-pointer items-center">
          <Image
            src={"/logo.png"}
            width={100}
            height={100}
            className="h-8 w-8"
          />
          <div className="ml-2 hidden flex-col sm:flex">
            <a className="text-lg font-bold">FORMASI</a>
            <a className="text-sm">forum sistem informasi</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="w-full rounded-md font-medium text-slate-50">
            <ul className="flex flex-col gap-2 px-1 md:flex-row md:gap-10 ">
              {navigation.map((item) => (
                <li
                  key={item.name}
                  className="cursor-pointer transition hover:text-gray-400"
                >
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div
          className="cursor-pointer transition lg:hidden"
          onClick={() => setToggle(toggle ? false : true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-8 w-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                toggle
                  ? "M6 18L18 6M6 6l12 12"
                  : "M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
              }
            />
          </svg>
          <div className={`${toggle ? "block" : "hidden"} lg:hidden`}>
            <div className="absolute right-3 top-full w-40 rounded-md bg-white/90 bg-opacity-5 p-4 font-medium text-slate-800 backdrop-blur-sm">
              <ul className="flex flex-col gap-2 px-1 ">
                {navigation.map((item) => (
                  <li
                    key={item.name}
                    className="cursor-pointer transition hover:text-gray-400"
                  >
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
