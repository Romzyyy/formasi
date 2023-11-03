"use client"
import Image from "next/image";
import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import img1 from "../../../public/image/slider1.webp";
import img2 from "../../../public/image/slider2.webp";
import img3 from "../../../public/image/slider3.webp";

const ZoomOutExample = () => {
  const images = [img1, img2, img3];

  return (
    <Zoom scale={1} indicators={false} arrows={false}  infinite={true} pauseOnHover={false}>
      {images.map((each, index) => (
        <div key={index} className="w-full">
          <Image
            className="w-full object-cover"
            src={each}
            alt="Slide Image"
            loading="lazy"
            priority={false}
          />
        </div>
      ))}
    </Zoom>
  );
};

export default ZoomOutExample;
