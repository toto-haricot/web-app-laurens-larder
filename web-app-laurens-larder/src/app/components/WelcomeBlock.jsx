const WelcomeBlock = () => {
    return (
      <section className="homepage-section">
        <div className="title-plus-description">
          <div className="title">
            Welcome to Lauren's Larder
          </div>
          <div className="description">
            Discover the art of catering with Lauren's Larder. 
            From intimate gatherings to bustling pop-ups, we deliver culinary excellence with style and passion.
          </div>
        </div>

        <div className="images-row">
          <div className="image-container homepage-welcome-section-image-left">
            <img
              src="/food1.jpg"
              className="image-narrow"
            />
          </div>
          <div className="image-container homepage-welcome-section-image-right">
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
  
export default WelcomeBlock;
  