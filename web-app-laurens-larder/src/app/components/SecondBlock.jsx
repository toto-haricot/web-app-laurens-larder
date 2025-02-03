import Link from "next/link";

const SecondBlock = () => {
    return (
      <section className="homepage-second-block">
        <h1>
          What we do
        </h1>
        <p>
          "At Lauren’s Larder, we do things two ways—catering for your events and popping up with fresh, seasonal food. 
          Our catering is all about bringing tasty, homemade-style meals to your gathering, whether it’s a small get-together or something bigger. 
          And when we’re not catering, you’ll find us hosting pop-ups, serving up a changing menu in different spots around town. 
          Good food, made with care—that’s what we’re all about."
        </p>
        <div className="images-row">
          <div className="image-container image-left">
            <img
              src="/food1.jpg"
              className="image-narrow"
            />
          </div>
          <div className="image-container image-right">
            <img
              src="/food2.jpg"
              alt="Beautiful dish 2"
              className="image-wide"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default SecondBlock;
  