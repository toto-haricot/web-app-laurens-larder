import Image from "next/image";
import Link from "next/link";

function CanapeMenu() {
    return (
        <div id="canape" className="title-plus-description w-4/5">
            <div className="title">
                CANAPÉ MENU
            </div>
            {/* CANAPÉ MENU 1/3 */}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-canape-1.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="grid grid-rows-2 gap-4 rounded-md">
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
                <div className="grid grid-rows-2 gap-4 rounded-md">
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 3/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 4/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            {/* CANAPÉ MENU 2/3 */}
            <div className="grid grid-cols-3 gap-4 h-[550px] w-full pb-[50px]">
                <div className="grid grid-rows-2 gap-4 rounded-md">
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
                <div className="grid grid-rows-2 gap-4 rounded-md">
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 3/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 4/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                </div>
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-canape-2.jpg"
                        alt="Image menu canapé 2/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
            </div>

            {/* CANAPÉ MENU 3/3 */}
            <div className="grid grid-cols-3 gap-4 h-[500px] w-full">
                <div className="relative overflow-hidden rounded-md group">
                    <Image
                        src="/menu-canape-3.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 object-top"
                    />
                </div>
                <div className="grid grid-rows-2 gap-4 rounded-md">
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
                <div className="grid grid-rows-2 gap-4 rounded-md">
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 3/4"
                            fill={true}
                            style={{objectFit:'cover'}}
                            className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                    </div>
                    <div className="relative overflow-hidden group">
                        <Image
                            src="/white-placeholder.jpg"
                            alt="Image menu canapé 4/4"
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

export default CanapeMenu;