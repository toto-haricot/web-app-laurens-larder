import Image from "next/image";
import Link from "next/link";

function ImageFrieze({ images, textUrl, linkUrl }) {
  return (
    <>
      {/* DESKTOP VERSION */}
      <div className="hidden md:grid grid-cols-3 gap-4 h-[400px] w-4/5">
        {/* 1ER ET 2E COLONNE */}
        {images.slice(0, 2).map((src, index) => (
          <div key={index} className="relative overflow-hidden rounded-md group">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              fill={true}
              style={{ objectFit: 'cover' }}
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>
        ))}

        {/* 3E COLONNE */}
        <div className="grid grid-rows-4 gap-4 rounded-md">
          {/* IMAGE 3 */}
          <div className="relative row-span-3 overflow-hidden group">
            <Image
              src={images[2]}
              alt="Image 3"
              fill={true}
              style={{ objectFit: 'cover' }}
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex justify-center items-center overflow-hidden rounded-md group row-span-1 bg-[var(--pink)]">
            <Link href={linkUrl}>
              <div className="text-[var(--pink-background)]">
                {textUrl}
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* MOBILE VERSION */}
      <div className="block md:hidden w-4/5 mx-auto">
        <div className="flex flex-col gap-4 h-[400px]">
          {/* First Image */}
          <div className="relative flex-1 overflow-hidden rounded-md group">
            <Image
              src={images[0]}
              alt="Image 1"
              fill={true}
              style={{ objectFit: 'cover' }}
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          </div>

          {/* Text Block */}
          <div className="h-1/4 flex justify-center items-center overflow-hidden rounded-md bg-[var(--pink)]">
            <Link href={linkUrl}>
              <div className="text-[var(--pink-background)]">
                {textUrl}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default ImageFrieze;

