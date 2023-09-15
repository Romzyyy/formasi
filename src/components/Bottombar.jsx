import React from "react";
const navigationSide = [
  { name: "Home", href: "Home" },
  { name: "Profile", href: "Profile" },
  { name: "Information", href: "Information" },
  { name: "Galery", href: "Galery" },
  { name: "Team", href: "Team" },
];

export default function Bottombar() {
  return (
    <div className="fixed bottom-0 w-screen mt-20 bg-red-500">
      <div className=" flex justify-evenly items-center w-screen bg-slate-50 h-20">
        <ul className="flex  gap-2">
          {navigationSide.map((item) => (
            <li key={item.name} className=" rounded-full cursor-pointer py-2 px-3 border border-slate-300">
              <a href={item.href}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
