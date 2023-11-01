"use client";
import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function Slider() {
  const images = [
    "/image/slider1.webp",
    "/image/slider2.webp",
    "/image/slider3.webp",
  ];

  const zoomProperties = {
    scale: 0.9,
    duration: 500,
    TransitionDuration: 100, // Mengubah 'TransitionDuration' menjadi 'transitionDuration'
    infinite: true,
    arrows: false,
    pauseOnHover: true,
  };

  return (
    <div  className="hero h-[700px] relative w-[500px]">
      <Zoom {...zoomProperties}>
        {images.map((each, index) => (
          <div key={index}>
            <Image
              src={each}
              width={10}
              height={10}
              priority={false} // {false} | {true}
              className="object-fill"
              alt={`Slide ${index + 1}`}
            />
            <div className="hero-content text-center text-neutral-content absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">
                  Hello there
                </h1>
                <p className="mb-5 text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        ))}
      </Zoom>
    </div>
  );
}
