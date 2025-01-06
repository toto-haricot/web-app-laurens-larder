"use client"

import { useState, useEffect } from 'react';
import styles from './CustomerReviews.module.css';

const reviews = [
  "Amazing service and delicious food!",
  "The team was super professional and friendly!",
  "Our guests were thrilled with the presentation.",
  "Would definitely recommend for any event!",
  "The flavors were absolutely outstanding!",
  "Best catering experience we've ever had!",
  "Superb quality and attention to detail.",
];

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState(reviews.slice(0, 4));

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleReviews((prev) => {
        const nextIndex = (reviews.indexOf(prev[0]) + 1) % reviews.length;
        return reviews.slice(nextIndex, nextIndex + 4);
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`${styles.container} pour-une-classe`}>
      {visibleReviews.map((quote, index) => (
        <div key={index} className={styles.square}>
          {quote}
        </div>
      ))}
    </div>
  );
}
