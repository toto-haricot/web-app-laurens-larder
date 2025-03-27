import Image from "next/image";
import Link from "next/link";

function LunchMenu() {
    return (
          <div id="graze" className="title-plus-description w-1/2 mx-auto">
            <div className="title">
                LUNCH MENU
            </div>
            {/* GRAZE MENU ROW 1 */}
            <div className="grid grid-cols-2 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <Image
                        src="/menu-lunch-1.jpg"
                        alt="Image menu lunch 1/2"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="relative overflow-hidden rounded-md group col-span-1">
                    <Image
                        src="/menu-lunch-2.jpg"
                        alt="Image menu lunch 2/2"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
            </div>
        </div>
    );
};

export default LunchMenu;