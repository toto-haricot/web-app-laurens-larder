import Image from "next/image";
import Link from "next/link";

const ImageFrieze = () => {
  return (
    <div className="grid grid-cols-3 gap-4 h-[400px] w-4/5">

      {/* 1ER COLONNE */}
      <div className="relative overflow-hidden group rounded-md">
        <Image
          src="/food1.jpg"
          alt="Image 1"
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* 2E COLONNE */}
      <div className="relative overflow-hidden group rounded-md">
        <Image
          src="/food2.jpg"
          alt="Image 2"
          layout="fill"
          objectFit="cover"
          className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
        />
      </div>

      {/* 3E COLONNE */}
      <div className="grid grid-rows-4 gap-4 rounded-md">
        {/* 3E COLONNE - IMAGE 1 */}
        <div className="relative row-span-3 overflow-hidden group">
          <Image
            src="/food1.jpg"
            alt="Image 3"
            layout="fill"
            objectFit="cover"
            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>
        {/* 3E COLONNE - IMAGE 2 */}
        <Link href="/catering" className="relative overflow-hidden rounded-md group row-span-1 block">
          <Image
            src="/food2.jpg"
            alt="Image 4"
            layout="fill"
            objectFit="cover"
            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </Link>
        
      </div>
    </div>
  );
};

export default ImageFrieze;
