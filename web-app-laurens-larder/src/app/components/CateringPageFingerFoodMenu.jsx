import Image from "next/image";
import Link from "next/link";

function FingerFoodMenu() {
    return (
        <div id="finger" className="title-plus-description w-4/5">
            <div className="title">
                FINGER MENU
            </div>
            {/* CANAPÉ MENU ROW 1*/}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-finger-food-1.jpg"
                        alt="Image menu finger food 1/4"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-finger-food-2.jpg"
                        alt="Image menu finger food 2/4"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-finger-food-3.jpg"
                        alt="Image menu finger food 3/4"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
            </div>
            {/* CANAPÉ MENU ROW 1*/}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className=" col-start-2 col-span-1 relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-finger-food-4.jpg"
                        alt="Image menu finger food 4/4"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
            </div>
        </div>
    );
};

export default FingerFoodMenu;