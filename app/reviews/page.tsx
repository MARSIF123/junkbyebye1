"use client"; // required for useState/useEffect in app directory

import { useState, useEffect } from "react";

const reviews = [
  {
    name: "John Doe",
    text: "Goodbye Junk made clearing out my garage so easy! Friendly team and fair prices.",
  },
  {
    name: "Jane Smith",
    text: "Highly reliable and fast. I’ll definitely use them again for my office cleanout.",
  },
  {
    name: "Michael Johnson",
    text: "Professional and courteous. They removed everything without a hassle.",
  },
  {
    name: "Emily Davis",
    text: "Quick, safe, and friendly service. Truly stress-free junk removal.",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <section className="flex flex-col items-center text-black py-20 mt-[80px] mb-60 relative z-[-1999]">
        {/* Content */}
        <div className="w-[90%] max-w-4xl text-center bg-white p-10 rounded-2xl shadow-md">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-6">
            Reviews
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-12 text-gray-800">
            See why Southern California chooses Goodbye Junk! Our customers love
            our reliability, fair prices, and friendly service.
          </p>

          {/* Slider */}
          <div className="relative w-full h-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className={`transition-opacity duration-1000 ${
                  index === currentIndex
                    ? "opacity-100 relative"
                    : "opacity-0 absolute top-0 left-0 w-full"
                }`}
              >
                <div className="bg-white p-8 rounded-xl shadow-md text-gray-900">
                  <p className="text-lg sm:text-xl md:text-2xl font-medium mb-4">
                    "{review.text}"
                  </p>
                  <h3 className="text-base sm:text-lg md:text-xl font-semibold text-primary-red">
                    — {review.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center mt-6 space-x-3">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full ${
                  idx === currentIndex ? "bg-primary-red" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
