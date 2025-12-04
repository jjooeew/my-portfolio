"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectDetailProps = {
  images?: string[];
  title: string;
};

export default function ProjectDetail({
  images = [],
  title,
}: ProjectDetailProps) {
  const [index, setIndex] = useState(0);
  const hasImages = images.length > 0;

  const nextOne = () => {
    if (!hasImages) return;
    setIndex(index + 1);
  };

  const prevOne = () => {
    if (!hasImages) return;
    if (index == images.length) return;
    setIndex(index - 1);
  };

  return (
    <div className="h-[100%] w-full py-5">
      {images && (
        <div className="relative w-full h-[66%] overflow-hidden">
          <Image
            src={images[index]}
            alt={"Project Images"}
            fill
            className="object-contain"
          />
          {index > 0 && (
            <button
              onClick={prevOne}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-md text-white"
            >
              ‹
            </button>
          )}

          {index < images.length - 1 && (
            <button
              onClick={nextOne}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-2 py-1 text-md text-white"
            >
              ›
            </button>
          )}
        </div>
      )}

      <h1 className="">{title}</h1>
    </div>
  );
}
