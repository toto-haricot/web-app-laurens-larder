import Image from "next/image";
import Link from "next/link";

function FingerFoodMenu() {
    return (
        <div className="title-plus-description w-4/5">
        <div className="title">
            FINGER MENU
        </div>
        {/* FINGER MENU 1/4 */}
        <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
            <div className="relative overflow-hidden rounded-md group col-span-1">
                <Image
                    src="/menu-finger-food-1.jpg"
                    alt="Image menu finger food 1/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                />
            </div>
            <div className="relative overflow-hidden rounded-md group col-span-2">
                <Image
                    src="/white-placeholder.jpg"
                    alt="Image menu canapé 1/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>

        {/* FINGER MENU 2/4 */}
        <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
            <div className="relative overflow-hidden rounded-md group col-span-2">
                <Image
                    src="/white-placeholder.jpg"
                    alt="Image menu finger food 1/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                />
            </div>
            <div className="relative overflow-hidden rounded-md group col-span-1">
                <Image
                    src="/menu-finger-food-2.jpg"
                    alt="Image menu canapé 2/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>

        {/* FINGER MENU 3/4 */}
        <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
            <div className="relative overflow-hidden rounded-md group col-span-1">
                <Image
                    src="/menu-finger-food-3.jpg"
                    alt="Image menu finger food 3/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                />
            </div>
            <div className="relative overflow-hidden rounded-md group col-span-2">
                <Image
                    src="/white-placeholder.jpg"
                    alt="Image menu canapé 1/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>

        {/* FINGER MENU 4/4 */}
        <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
            <div className="relative overflow-hidden rounded-md group col-span-2">
                <Image
                    src="/white-placeholder.jpg"
                    alt="Image menu finger food 1/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                />
            </div>
            <div className="relative overflow-hidden rounded-md group col-span-1">
                <Image
                    src="/menu-finger-food-4.jpg"
                    alt="Image menu canapé 3/4"
                    fill={true}
                    style={{objectFit:'cover'}}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                />
            </div>
        </div>
        </div>
    );
};

export default FingerFoodMenu;