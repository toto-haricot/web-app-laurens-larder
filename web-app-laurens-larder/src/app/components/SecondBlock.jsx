import Link from "next/link";

const SecondBlock = () => {
    return (
      <section className="second-block">
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
  