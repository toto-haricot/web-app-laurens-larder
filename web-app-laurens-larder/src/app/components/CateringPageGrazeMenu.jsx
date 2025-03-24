import Image from "next/image";
import Link from "next/link";

function GrazeMenu() {
    return (
          <div className="title-plus-description w-4/5">
            <div className="title">
                GRAZE MENU
            </div>
            {/* GRAZE MENU 1/2 */}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <Image
                        src="/menu-graze-1.jpg"
                        alt="Image menu graze 1/2"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="grid grid-rows-2 gap-4 rounded-md  col-span-2">
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 1/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 2/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
            
            {/* GRAZE MENU 2/2 */}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <Image
                        src="/menu-graze-2.jpg"
                        alt="Image menu graze 1/2"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="grid grid-rows-2 gap-4 rounded-md  col-span-2">
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 1/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 2/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrazeMenu;