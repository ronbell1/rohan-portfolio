import Image from "next/image";
import React from "react";
import { Heading } from "./Heading";
import { twMerge } from "tailwind-merge";

export const TechStack = () => {
  const stack = [
    {
      title: "React.js",
      src: "/images/logos/React.webp",

      className: "h-10 w-14",
    },
    {
      title: "HTML",
      src: "/images/logos/732212.png",

      className: "h-10 w-10",
    },
    {
      title: "CSS",
      src: "/images/logos/CSS3_logo.png",

      className: "h-10 w-10",
    },
    {
      title: "Tailwind",
      src: "/images/logos/tailwind.png",

      className: "h-10 w-24",
    },
    {
      title: "Figma",
      src: "/images/logos/figma.png",

      className: "h-10 w-8",
    },

    {
      title: "Java",
      src: "/images/logos/java-logo-1.png",

      className: "h-10 w-12",
    },
    {
      title: "C++",
      src: "/images/logos/C++_logo.png",

      className: "h-10 w-24",
    },
  ];
  return (
    <div>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Tech Stack
      </Heading>
      <div className="flex flex-wrap">
        {stack.map((item) => (
          <Image
            src={item.src}
            key={item.src}
            width={`200`}
            height={`200`}
            alt={item.title}
            className={twMerge("object-contain mr-4 mb-4", item.className)}
          />
        ))}
      </div>
    </div>
  );
};
