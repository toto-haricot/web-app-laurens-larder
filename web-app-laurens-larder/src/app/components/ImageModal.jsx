"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageModal({ src, alt }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Clickable Image */}
      <Image
        src={src}
        alt={alt}
        fill={true}
        style={{objectFit:'cover'}}
        className="cursor-pointer rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
        onClick={() => setIsOpen(true)}
      />

      {/* Fullscreen Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setIsOpen(false)}
        >
            <div className="flex items-center justify-center z-51">
                <Image
                    src={src}
                    alt={alt}
                    height={0}
                    width={0}
                    className="h-[60vh] w-auto"
                />
                </div>
        </div>
      )}
    </>
  );
}
