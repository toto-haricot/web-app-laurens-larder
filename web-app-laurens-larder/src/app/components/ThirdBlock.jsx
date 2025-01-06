import CustomerReviews from './CustomerReviews';

const ThirdBlock = () => {
    return (
        <section className="third-block">
          <div className="customers-reviews">
            <h1>What our customers are saying</h1>
            <CustomerReviews />
          </div>
        </section>
      );
  };
  
  export default ThirdBlock;