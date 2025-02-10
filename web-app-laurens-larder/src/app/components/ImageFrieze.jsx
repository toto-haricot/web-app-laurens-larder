import Image from "next/image";
import Link from "next/link";

function ImageFrieze({ images, linkUrl }) {
  return (
    <div className="grid grid-cols-3 gap-4 h-[400px] w-4/5">

      {/* 1ER ET 2E COLONNE */}
      {images.slice(0, 2).map((src, index) => (
        <div key={index} className="relative overflow-hidden rounded-md group">
          <Image
            src={src}
            alt={`Image ${index + 1}`}
            fill={true}
            style={{objectFit:'cover'}}
            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
      ))}

      {/* 3E COLONNE */}
      <div className="grid grid-rows-4 gap-4 rounded-md">
        {/* 3E COLONNE - IMAGE 1 */}
        <div className="relative row-span-3 overflow-hidden group">
          <Image
            src={images[2]}
            alt="Image 3"
            fill={true}
            style={{objectFit:'cover'}}
            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        {/* 3E COLONNE - IMAGE 2 */}
        <div className="relative overflow-hidden rounded-md group row-span-1">
        {linkUrl ? (
            <Link href={linkUrl} className="block">
              <Image
                src={images[3]}
                alt="Image 4 Cliquable"
                fill={true}
                style={{objectFit:'cover'}}
                className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </Link>
          ) : (
            <Image
              src={images[3]}
              alt="Image 4"
              fill={true}
              style={{objectFit:'cover'}}
              className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
            />
          )}
        </div>
        
      </div>
    </div>
  );
};

export default ImageFrieze;
