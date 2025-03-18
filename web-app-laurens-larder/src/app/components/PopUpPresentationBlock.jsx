import Link from "next/link";
import ImageFrieze from "./ImageFrieze";

const PopUpPresentationBlock = () => {
    return (
      <section className="homepage-section">
        <div className="title-plus-description">
          <div className="title">
            Pop-up Stores
          </div>
          <div className="description">
          Our pop-up stores bring fresh, tasty food to markets and events year-round. 
          From hearty brekkie burgers to loaded nachos, we serve up crowd favorites wherever we go. Keep an eye out for us!
          </div>
        </div>
        <ImageFrieze 
          images={[
            "/popup1.jpeg",
            "/popup2.jpeg",
            "/popup3.jpeg"
          ]}
          textUrl="Explore pop-up menu"
          linkUrl="/pop-up"
        />
      </section>
    );
  };
  
  export default PopUpPresentationBlock;