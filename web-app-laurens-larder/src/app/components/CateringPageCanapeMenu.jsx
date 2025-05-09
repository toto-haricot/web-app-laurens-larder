import ImageModal from "./ImageModal";

import Image from "next/image";
import Link from "next/link";


function CanapeMenu() {

    return (
        <div id="canape" className="title-plus-description w-4/5">
            <div className="title pb-[30px]">
                CANAPÉ MENU
            </div>
            {/* CANAPÉ MENU */}
            <div className="grid md:grid-cols-3 gap-4 h-[1200px] md:h-[550px] w-full">
                <div className="relative overflow-hidden rounded-md group">
                    <ImageModal src="/menu-canape-1.jpg" alt="Image menu canapé 1/3"/>
                </div>
                <div className="relative overflow-hidden rounded-md group">
                    <ImageModal src="/menu-canape-2.jpg" alt="Image menu canapé 2/3"/>
                </div>
                <div className="relative overflow-hidden rounded-md group">
                    <ImageModal src="/menu-canape-3.jpg" alt="Image menu canapé 2/3"/>
                </div>
            </div>
        </div>    
    );
};

export default CanapeMenu;