import Link from "next/link";
import ImageFrieze from "./ImageFrieze";

const CateringPresentationBlock = () => {
    return (
      <section className="homepage-section">
        <div className="title-plus-description">
          <div className="title">
            Catering
          </div>
          <div className="description">
            Lauren’s Larder is a premier catering service based in Esperance, Western Australia, specializing in crafting delicious and beautifully presented meals for all occasions. 
            Whether it’s weddings, parties, or corporate functions, we offer tailored menus featuring fresh, high-quality ingredients to suit every taste and dietary requirement. 
          </div>
        </div>
        <ImageFrieze 
          images={[
            "/laurens-larder-41.jpg",
            "/laurens-larder-38.jpg",
            "/catering1.jpg"
          ]}
          textUrl="Explore catering menu"
          linkUrl="/catering"
        />
      </section>
    );
  };
  
  export default CateringPresentationBlock;
  