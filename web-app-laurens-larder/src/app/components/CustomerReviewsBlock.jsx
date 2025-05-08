"use client";

import { useState, useEffect } from "react";

const reviews = [
  { text: "Superb quality and attention to detail.", author: "Josh Prince" },
  { text: "Great menu with lots of option, we went for the frittarta and beef sliders. It was just perfect and we can't wait to order again soon", author: "Katie Blakes" },
  { text: "Would definitely recommend for any event!", author: "Josh Smith" },
  { text: "I tried the beef tacos on new year's eve. It's definitely the best tacos I ever had, the flavors were absolutely outstanding!", author: "Maddie Horson", },
  { text: "Best catering experience we've ever had!", author: "Tyte Mahony" },
  { text: "As a new mum w/ a partner who works long hours, the Luvarlee meals have been my saving grace. Providing high-quality meals a top priority for us, but with a new baby it was too overwhelming to think about.", author: "Casie O'Meara" },
  { text: "Whenever I have a busy day ahead of me, Luvarlee saves the day by making dinner easy. All I need to do is put a meal in the fridge to defrost throughout the day and am left with a restaurant-quality meal.", author: "Josh Sherwell" },
  { text: "I have seen many offerings of pre packed meals, amny offering alternatives to making your own meals or Uber. But I have NEVER seen such healthy pre-packed meals that chef-created, easy to prepare, nutritious approved", author: "Kim Morrison" },
];

export default function CustomerReviews() {
  const [visibleReviews, setVisibleReviews] = useState([]);
  const [reviewsToShow, setReviewsToShow] = useState(4);

  // Detect screen size to set number of reviews
  useEffect(() => {
    const updateReviewsToShow = () => {
      setReviewsToShow(window.innerWidth < 768 ? 1 : 4); // Tailwind's md breakpoint is 768px
    };

    updateReviewsToShow();
    window.addEventListener("resize", updateReviewsToShow);
    return () => window.removeEventListener("resize", updateReviewsToShow);
  }, []);

  // Cycle through the correct number of reviews
  useEffect(() => {
    setVisibleReviews(reviews.slice(0, reviewsToShow));

    const interval = setInterval(() => {
      setVisibleReviews((prev) => {
        const nextIndex = (reviews.indexOf(prev[0]) + reviewsToShow) % reviews.length;
        return reviews.slice(nextIndex, nextIndex + reviewsToShow);
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [reviewsToShow]);

  return (
    <section className="homepage-section">
      <div className="title-plus-description">
        <div className="title">
          What people say about our food
        </div>
        <div className="description">
          Reviews of our customers following catering deliveries or pop-up
          serving.
        </div>
      </div>

      <div className="flex overflow-hidden w-full md:w-4/5 h-[300px] gap-4 mx-auto">
        {visibleReviews.map((review, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full md:flex-1 md:min-w-[20%] bg-gray-100 border border-gray-400 flex items-center justify-center p-4 text-center rounded-md text-base"
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[95%] italic leading-relaxed">
              {review.text}
            </div>
            <div className="absolute bottom-2 right-2 text-black font-bold text-sm text-right px-2">
              {review.author}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
