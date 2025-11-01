"use client";

import { useState } from "react";

const faqs = [
  {
    question: "How does pricing work?",
    answer:
      "Based on how much junk fills our truck. You’ll get an upfront quote before we start.",
  },
  {
    question: "Do you offer same-day service?",
    answer: "Yes! Same-day and next-day service available 24/7.",
  },
  {
    question: "What can you take?",
    answer:
      "Almost everything — furniture, appliances, yard waste, construction debris. No hazardous materials.",
  },
  {
    question: "Do I need to be home?",
    answer:
      "Not always — if items are accessible, we can handle pickup without you present.",
  },
  {
    question: "Do you recycle?",
    answer: "Yes, we donate and recycle to reduce landfill waste.",
  },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="overflow-hidden">
      <div className="flex flex-col items-center py-20 mt-[80px] mb-60">
        <div className="w-[90%] max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-red mb-8">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-12">
            Have questions? We’ve got answers! Check out our FAQs below.
          </p>

          <div className="space-y-4 text-left">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-xl">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left p-4 flex justify-between items-center font-medium text-gray-900 focus:outline-none"
                >
                  <span>{faq.question}</span>
                  <span className="text-primary-red">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-gray-700">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
