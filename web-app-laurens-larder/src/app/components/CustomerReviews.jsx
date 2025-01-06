"use client"

import { useState, useEffect } from 'react';
import styles from './CustomerReviews.module.css';

const reviews = [
  { text: "Amazing service and delicious food!", author: "Bruce Willis"},
  { text: "The team was super professional and friendly!", author: "Jason Statam"},
  { text: "Our guests were thrilled with the presentation.", author: "King Kong"},
  { text: "Would definitely recommend for any event!", author: "God"},
  { text: "The flavors were absolutely outstanding!", author: "Obama"},
  { text: "Best catering experience we've ever had!", author: "Léon Marchand"},
  { text: "Superb quality and attention to detail.", author: "Antoine Dupond"},
  { text: "Yum the nachos are very good", author: "Maradona"},
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
    <div className={`${styles.container}`}>
      {visibleReviews.map((review, index) => (
        <div key={index} className={`${styles.square} pour-une-classe`}>  {/* DIV DE LA CRITIQUE */}
          <div className={styles.quote}>{review.text}</div>
          <div className={styles.author}>{review.author}</div>
          {/* {quote} */}
          
        </div>
      ))}
    </div>
  );
}
