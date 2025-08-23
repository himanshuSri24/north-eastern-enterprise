import React from "react";
import Image from "next/image";

const Logos = () => {
  return (
    <div className="grid grid-cols-4 gap-4 w-full sm:w-1/2 px-10 sm:px-0">
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r11.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r12.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r13.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r14.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r21.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r22.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r23.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r24.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r31.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r32.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r33.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r34.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r41.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r42.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r43.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
      <div className="relative w-full h-16 flex items-center justify-center">
        <Image
          src="/home/r44.png"
          alt="Partner Logo"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export const Logosforab = () => {
  // Using all 42 images from /public/home
  // Organized column-wise: first 4 columns have 10 images, last column has 2
  const images = [
    // Column 1 (10 images)
    "/home/r11.png",
    "/home/r12.png",
    "/home/r13.png",
    "/home/r14.png",
    "/home/r15.png",
    "/home/r21.png",
    "/home/r22.png",
    "/home/r23.png",
    "/home/r24.png",
    "/home/r25.png",

    // Column 2 (10 images)
    "/home/r31.png",
    "/home/r32.png",
    "/home/r33.png",
    "/home/r34.png",
    "/home/r41.png",
    "/home/r42.png",
    "/home/r43.png",
    "/home/r44.png",
    "/home/r51.png",
    "/home/r52.png",

    // Column 3 (10 images)
    "/home/r53.png",
    "/home/r54.png",
    "/home/r61.png",
    "/home/r62.png",
    "/home/r63.png",
    "/home/r64.png",
    "/home/r71.png",
    "/home/r72.png",
    "/home/r73.png",
    "/home/r74.png",

    // Column 4 (10 images)
    "/home/r81.png",
    "/home/r82.png",
    "/home/r83.png",
    "/home/r84.png",
    "/home/r91.png",
    "/home/r92.png",
    "/home/r93.png",
    "/home/r94.png",
    "/home/r101.png",
    "/home/r102.png",

    // Column 5 (2 images)
    "/home/r103.png",
    "/home/r104.png",
  ];

  return (
    <div className="w-full my-20 px-[10%]">
      <div className="grid grid-cols-5 gap-4 w-full">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative w-full h-16 flex items-center justify-center"
          >
            <Image
              src={src}
              alt={`Partner Logo ${index + 1}`}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logos;
