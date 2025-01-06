import { Pacifico } from "next/font/google";

// FONT
const pacifico = Pacifico({ 
  weight: "400", 
  subsets: ["latin"]
});

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
      </section>
    );
  };
  
  export default FirstBlock;
  