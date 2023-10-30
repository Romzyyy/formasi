"use client";
import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slider () {
  const images = [
    "/image/slider1.webp",
    "/image/slider2.webp",
    "/image/slider3.webp",
  ];

  const zoomProperties = {
    scale: 1,
    duration: 5000,
    TransitionDuration: 100,
    infinite: true,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <di id="Home" className="h-96 md:h-screen w-full">
      <Zoom {...zoomProperties}>
        {images.map((each, index) => (
          <div
          key={index}
          >
            <Image
              className="object-cover flex h-96 md:h-screen w-screen items-center justify-center"
              alt="SlideImage"
              src={each}
              width={10000}
              height={10000}
            />
            <h1 className="absolute text-white text-7xl lg:text-9xl opacity-10 font-extrabold">
              FORMASI
            </h1>
          </div>
        ))}
      </Zoom>
    </di>
  );
};

