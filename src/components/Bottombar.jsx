import Link from "next/link";
import React from "react";
const navigationSide = [
  { name: "Home", href: "Dashboard" },
  { name: "Profile", href: "Profile" },
  { name: "Information", href: "Information" },
  { name: "Galery", href: "Galery" },
  { name: "Team", href: "Team" },
];

export default function Bottombar() {
  return (
    <div className="fixed bottom-0 w-screen">
      <div className=" flex justify-evenly items-center bg-slate-50 h-fit p-4 ">
        <ul className="flex gap-1">
          {navigationSide.map((item) => (
            <li key={item.name} className=" rounded-full cursor-pointer py-1 px-2 border border-slate-300">
              <Link  href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
