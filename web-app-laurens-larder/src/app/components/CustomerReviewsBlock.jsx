"use client"

import { useState, useEffect } from 'react';
import styles from './CustomerReviewsBlock.module.css';

const reviews = [
  { text: "Superb quality and attention to detail.", author: "Josh Prince"},
  { text: "Great menu with lots of option, we went for the frittarta and beef sliders. It was just perfect and we can't wait to order again soon", author: "Katie Blakes"},
  { text: "Would definitely recommend for any event!", author: "Josh Smith"},
  { text: "I tried the beef tacos on new year's eve. It's definitely the best tacos I ever had, the flavors were absolutely outstanding!", author: "Maddie Horson"},
  { text: "Best catering experience we've ever had!", author: "Tyte Mahony"},
  { text: "As a new mum w/ a partner who works long hours, the Luvarlee meals have been my saving grace. Providing high-quality meals a top priority for us, but with a new baby it was too overwhelming to think about.", author: "Casie O'Meara"},
  { text: "Whenever I have a busy day ahead of me, Luvarlee saves the day by making dinner easy. All I need to do is put a meal in the fridge to defrost throughout the day and am left with a restaurant-quality meal.", author: "Josh Sherwell"},
  { text: "I have seen many offerings of pre packed meals, amny offering alternatives to making your own meals or Uber. But I have NEVER seen such healthy pre-packed meals that chef-created, easy to prepare, nutritious approved", author: "Kim Morrison"},
];

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReviews((prev) => {
        const nextIndex = (reviews.indexOf(prev[0]) + 1) % reviews.length;
        return reviews.slice(nextIndex, nextIndex + 4);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="homepage-section">
      <div className="title-plus-description">
        <div className="title">
            What people say about our food
        </div>
        <div className="description">
          Reviews of our customers following catering deliveries or pop-up serving.
        </div>
      </div>
      <div className={`${styles.container}`}>
      {visibleReviews.map((review, index) => (
        <div key={index} className={`${styles.square}`}> 
          <div className={styles.quote}>{review.text}</div>
          <div className={styles.author}>{review.author}</div>
          {/* {quote} */}
          
        </div>
      ))}
    </div>
    </section>

  );
}
