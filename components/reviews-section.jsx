import React, { useEffect, useRef, useState } from 'react';

const reviews = [
  {
    name: 'Malik I',
    review: 'Thanks, you SAMI for helping me out since very begninng and for ongoing support. Appreciate your frequent help.',
    rating: 5,
  },
  {
    name: 'Cookie T',
    review: 'Absolute legend to deal with.',
    rating: 5,
  },
  {
    name: 'Malsha R',
    review: 'I recently bought a car from them and the experience was fantastic. The staff was professional, friendly, and truly listened to my needs, helping me find the perfect vehicle within my budget. Thank you Sami! ',
    rating: 5,
  },
  {
    name: 'Eileen H',
    review: 'Just brought one from them, professional and excellent customer service! they provided positive attitude with solution when I reported a tiny issue of the car. So worthy to come here! ',
    rating: 5,
  },
  {
    name: 'Kate H',
    review: 'Excellent service, with reasonable charges. ',
    rating: 5,
  },
  {
    name: 'Sherman L',
    review: 'Excellent staff and great cars. Very good price and top quality! Will surely buy from them again! Thumbs up! 👍👍 ',
    rating: 5,
  },

];

function getStars(rating) {
  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: 5 }, (_, i) => (
        <span key={i} className={i < rating ? 'text-blue-400 text-xl' : 'text-gray-300 text-xl'}>★</span>
      ))}
    </div>
  );
}

const REVIEWS_PER_SLIDE = 3;

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef(null);
  const totalSlides = reviews.length;

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 3500);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  // Show 3 reviews, but scroll one by one
  let slideReviews = [];
  for (let i = 0; i < REVIEWS_PER_SLIDE; i++) {
    slideReviews.push(reviews[(current + i) % reviews.length]);
  }

  return (
    <section className="relative w-full py-16 px-4 md:px-8 mt-10 bg-background overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none select-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <h2 className="text-4xl font-bold text-center text-white mb-2">Our Client Testimonial</h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Read what our customers are saying about us through their genuine Google reviews, based on real experiences with our services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 transition-all duration-700">
          {slideReviews.map((review, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center transition-transform duration-300
                ${idx === 1 ? 'scale-110 z-10 p-12 md:p-16 border-4 border-blue-200 dark:border-blue-900' : 'scale-95 opacity-80 p-8 md:p-10'}
                hover:scale-105`}
              style={idx === 1
                ? { minWidth: '360px', maxWidth: '420px', minHeight: '380px' }
                : { minWidth: '280px', maxWidth: '340px', minHeight: '300px' }}
            >
              <h3 className={`font-semibold ${idx === 1 ? 'text-3xl' : 'text-xl'} text-gray-800 dark:text-white mb-4 text-center`}>{review.name}</h3>
              <p className={`text-gray-500 dark:text-gray-300 text-center ${idx === 1 ? 'text-lg' : 'text-base'} mb-4`}>"{review.review}"</p>
              {getStars(review.rating)}
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${current === idx ? 'bg-blue-500' : 'bg-gray-300'} transition`}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
        <p className="text-xs text-center text-gray-400 mt-6 mb-2">
          Reviews displayed are sourced from Google and may be abbreviated for privacy.
        </p>
        <div className="text-center mt-8">
          <a
            href="https://www.google.com/search?q=bespoke+prestige+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow hover:bg-blue-600 transition"
          >
            See More on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
