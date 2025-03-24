import Image from "next/image";
import Link from "next/link";
import CanapeMenu from "../components/CateringPageCanapeMenu";
import GrazeMenu from "../components/CateringPageGrazeMenu";
import FingerFoodMenu from "../components/CateringPageFingerFoodMenu";

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
              <a href="#canape" className="hover:underline"> CANAPÉ MENU</a>
              <a href="#graze" className="hover:underline"> GRAZE MENU</a>
              <a href="#finger" className="hover:underline"> FINGER FOOD MENU</a>
              <a href="#lunch" className="hover:underline"> LUNCH MENU</a>
            </div>
          </div>

        <CanapeMenu/>
        <GrazeMenu/>
        <FingerFoodMenu/>




      </section>
    )
}