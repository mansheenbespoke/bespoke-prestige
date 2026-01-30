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
    <section id="reviews" className="relative w-full py-16 px-4 md:px-8 mt-10 bg-background overflow-hidden">
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
        <h2 className="text-4xl font-bold text-center text-white mb-2">
          Our Client <span className="text-cyan-500" style={{ color: 'hsl(185, 72%, 49%)' }}>Testimonial</span>
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
          Read what our customers are saying about us through their genuine Google reviews, based on real experiences with our services.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 transition-all duration-700">
          {slideReviews.map((review, idx) => (
            <div
              key={idx}
              className={`bg-white dark:bg-gray-900 rounded-2xl shadow-2xl flex flex-col items-center transition-transform duration-300
                ${idx === 1 ? 'scale-105 z-10 p-7 md:p-9 border-2 border-blue-200 dark:border-blue-900' : 'scale-95 opacity-90 p-5 md:p-6'}`}
              style={{
                width: idx === 1 ? '400px' : '320px',
                minHeight: idx === 1 ? '260px' : '200px',
                maxHeight: idx === 1 ? '340px' : '260px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                overflow: 'hidden',
              }}
            >
                <h3 className={`font-semibold ${idx === 1 ? 'text-xl' : 'text-lg'} text-gray-800 dark:text-white mb-3 text-center`}>{review.name}</h3>
                <p className={`text-gray-500 dark:text-gray-300 text-center ${idx === 1 ? 'text-base' : 'text-sm'} mb-3`}>"{review.review}"</p>
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
            href="https://www.google.com/search?sca_esv=ae1e161c6b0f2947&sxsrf=ANbL-n66UUFBQlRSny2q7cmNi5MFyEiv5Q:1769721932555&si=AL3DRZHrmvnFAVQPOO2Bzhf8AX9KZZ6raUI_dT7DG_z0kV2_x959I3Tfh3lfmZC70MNgpVSME5xxC-PyoMr0ZBNu8vhMT0tsEh69DYqLD5MGbDlgF6G9Do-WJQ93XPjqrqX5RXp6s8Yn&q=Bespoke+Motors+Reviews&sa=X&ved=2ahUKEwjfrpD517GSAxVnSGwGHTBKMikQ0bkNegQIJBAH&biw=1536&bih=695&dpr=1.25&aic=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 text-white font-semibold py-2 px-6 rounded-full shadow transition"
          >
            See More on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
