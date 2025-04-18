import ImageModal from "./ImageModal";

import Image from "next/image";
import Link from "next/link";

function GrazeMenu() {
    return (
          <div id="graze" className="title-plus-description w-1/2 mx-auto">
            <div className="title">
                GRAZE MENU
            </div>
            {/* GRAZE MENU ROW 1 */}
            <div className="grid grid-cols-2 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <ImageModal src="/menu-graze-1.jpg" alt="Image menu graze 1/2"/>
                </div>
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <ImageModal src="/menu-graze-2.jpg" alt="Image menu graze 2/2"/>
                </div>
            </div>
        </div>
    );
};

export default GrazeMenu;