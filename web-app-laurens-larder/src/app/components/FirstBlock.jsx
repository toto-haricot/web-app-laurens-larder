"use client";
import { Pacifico } from "@next/font/google";

const pacifico = Pacifico({ weight: "400", subsets: ["latin"] });

const FirstBlock = () => {
    return (
      <section className="first-block">
        <div className="description">
          <h1 className={pacifico.className}>Welcome to Lauren's Larder</h1>
          <p>
          Discover the art of catering with Lauren's Larder. 
          From intimate gatherings to bustling pop-up stores, we deliver culinary excellence with style and passion.
          </p>
        </div>
        <style jsx>{`
          .first-block {
            text-align: center;
            padding: 50px 20px;
            background-color: #f9f9f9;
          }
          .description p {
            font-size: 1.2rem;
            color: #555;
            line-height: 1.6;
            max-width: 600px;
            margin: 0 auto;
          }
        `}</style>
      </section>
    );
  };
  
  export default FirstBlock;
  