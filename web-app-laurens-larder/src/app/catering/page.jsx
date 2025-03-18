import Image from "next/image";
import Link from "next/link";

export default function Catering() {
    return (
        <section className="homepage-section">
        <div className="title-plus-description">
          <div className="title">
            Browse our catering menus
          </div>
          <div className="description pb-[30px]">
            Lauren's Larder offers exceptional catering services tailored to your needs, including full-service catering, convenient drop-off, and beautifully prepared platter collection. Whether you're hosting an intimate gathering or a large event, we bring fresh, high-quality food to your table. Explore our caterings options :
          </div>
          <div className="catering-menus-overview flex w-3/4 justify-around font-bold text-xl underline">
            <div>CANAPÉ MENU</div>
            <div>GRAZE MENU</div>
            <div>FINGER FOOD MENU</div>
            <div>LUNCH MENU</div>
          </div>
        </div>
        {/* CANAPÉ MENU */}
        <div className="title-plus-description w-4/5 border border-solid border-black">
          <div className="title">
            CANAPÉ MENU
          </div>
          <div className="grid grid-cols-3 gap-4 border border-solid border-black h-[500px] w-full">
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
                        src="/lavande.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
                <div className="relative overflow-hidden group">
                    <Image
                        src="/lavande.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
            </div>
            <div className="grid grid-rows-2 gap-4 rounded-md">
                <div className="relative overflow-hidden group">
                    <Image
                        src="/lavande.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
                <div className="relative overflow-hidden group">
                    <Image
                        src="/lavande.jpg"
                        alt="Image menu canapé 1/3"
                        fill={true}
                        style={{objectFit:'cover'}}
                        className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105"
                    />
                </div>
            </div>
          </div>


        </div>
      </section>
    )
}