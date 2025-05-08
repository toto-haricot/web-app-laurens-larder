import ImageModal from "./ImageModal";

import Image from "next/image";
import Link from "next/link";

function GrazeMenu() {
    return (
          <div id="graze" className="title-plus-description w-4/5 md:w-1/2 md:mx-auto">
            <div className="title pb-[30px]">
                GRAZE MENU
            </div>
            {/* GRAZE MENU ROW 1 */}
            <div className="grid md:grid-cols-2 gap-4 h-[800px] md:h-[550px] w-full pb-[50px]">
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