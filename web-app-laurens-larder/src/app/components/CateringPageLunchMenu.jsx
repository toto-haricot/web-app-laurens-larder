import ImageModal from "./ImageModal";

import Image from "next/image";
import Link from "next/link";

function LunchMenu() {
    return (
          <div id="lunch" className="title-plus-description w-4/5 md:w-1/2 md:mx-auto">
            <div className="title pb-[30px]">
                LUNCH MENU
            </div>
            {/* GRAZE MENU ROW 1 */}
            <div className="grid md:grid-cols-2 gap-4 h-[800px] md:h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <ImageModal src="/menu-lunch-1.jpg" alt="Image menu lunch 1/2"/>
                </div>
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <ImageModal src="/menu-lunch-2.jpg" alt="Image menu lunch 2/2"/>
                </div>
            </div>
        </div>
    );
};

export default LunchMenu;