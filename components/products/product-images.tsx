"use client";

import Image from "next/image";
import React, { useState } from "react";

const ProductImages = ({ imgSrcs }: { imgSrcs: string[] }) => {
  const [activeImage, setActiveImage] = useState(0);
  return (
    <div className="w-full md:w-1/2 flex flex-col gap-4">
      <div className="shrink-0 max-w-md lg:max-w-lg mx-auto">
        <Image
          className="rounded-lg h-80 object-contain"
          width={500}
          height={500}
          src={imgSrcs[activeImage]}
          alt="Product image"
          loading="lazy"
        />
      </div>
      <div className="grid grid-flow-col gap-4 place-items-center overflow-x-auto">
        {imgSrcs.map((imgSrc, index) => (
          <div
            key={index}
            className="shrink-0 max-w-[24] cursor-pointer"
            onClick={() => setActiveImage(index)}
          >
            <Image
              className="rounded-lg h-24 w-24 object-contain"
              width={500}
              height={500}
              src={imgSrc}
              alt="Product image"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductImages;
