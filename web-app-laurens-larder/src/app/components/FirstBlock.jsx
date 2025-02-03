const FirstBlock = () => {
    return (
      <section className="homepage-first-block">
        <h1>
          Welcome to Lauren's Larder
        </h1>
        <p>
          Discover the art of catering with Lauren's Larder. 
          From intimate gatherings to bustling poxp-up stores, we deliver culinary excellence with style and passion.
        </p>
        <div className="images-row">
          <div className="image-container homepage-first-block-image-container homepage-first-block-image-left">
            <img
              src="/food1.jpg"
              className="image-narrow"
            />
          </div>
          <div className="image-container homepage-first-block-image-container homepage-first-block-image-right">
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
  
export default FirstBlock;
  