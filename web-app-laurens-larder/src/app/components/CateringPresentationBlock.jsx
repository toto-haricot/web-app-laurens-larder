import Link from "next/link";

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


        <div className="images-row">
          <div className="image-container">
            <img
              src="/food1.jpg"
              className="image"
            />
          </div>
          <div className="image-container">
            <img
              src="/food2.jpg"
              alt="Beautiful dish 2"
              className="image"
            />
          </div>
          <div className="images-column">
            <div className="go-to-catering-menus">
              <img src="/icon-menu.png" alt="menu icone" className="icon"/>
              <p>Explore our catering menus</p>
            </div>
            <div className="image-container image-above-menu">
              <img
                src="/food2.jpg"
                alt="Beautiful dish 2"
                className="image"
              />
            </div>
          </div>
        </div>

      </section>
    );
  };
  
  export default CateringPresentationBlock;
  