"use client";

import Link from "next/link";

const SecondBlock = () => {
    return (
      <section className="second-block">
        <div className="images-container">
          <img
            src="/food1.jpg"
            className="image-narrow"
          />

          <img
            src="/food2.jpg"
            alt="Beautiful dish 2"
            className="image-wide"
          />
        </div>

        <style jsx>{`
          .second-block {
            display: flex;
            justify-content: center;
            padding: 30px 20px;
            border: 1px solid red;
            height: 500px;
          }
          .images-container {
            width: 80%;
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
            border: 1px solid green;
          }
          .image-wide {
            right: 0;
            width: 65%;
            border-radius: 6px;
            object-fit: cover;
            border: 1px solid blue;
          }
          .image-narrow {
            width: 30%;
            border-radius: 6px;
            object-fit: cover;
            border: 1px solid blue;
          }
          img {
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          }
        `}</style>
      </section>
    );
  };
  
  export default SecondBlock;
  