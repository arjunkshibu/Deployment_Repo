import React, { useState } from 'react';

function Help() {
  const [faqs, setFaqs] = useState([
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, and American Express."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time. Your access to the course content will remain until the end of your current billing cycle."
    },
    {
      question: "How do I reset my password?",
      answer: "To reset your password, click on the 'Forgot Password' link on the login page and follow the instructions provided."
    },
    {
      question: "Is technical support available?",
      answer: "Yes, we provide technical support via email and live chat during business hours."
    },
    {
      question: "Are the courses mobile-friendly?",
      answer: "Yes, our courses are optimized for mobile devices so you can learn anytime, anywhere."
    }
  ]);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-100 h-full py-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6">
          <h2 className="text-lg font-semibold text-gray-900">Frequently Asked Questions</h2>
        </div>
        <div className="border-t border-gray-200">
          <dl>
            {faqs.map((faq, index) => (
              <div key={index} className="border-t border-gray-200">
                <dt className="text-lg">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="flex justify-between items-center w-full py-4 px-4 text-left focus:outline-none"
                  >
                    <span>{faq.question}</span>
                    <span className={activeIndex === index ? "transform rotate-180" : "transform rotate-0"}>&#9660;</span>
                  </button>
                </dt>
                {activeIndex === index && (
                  <dd className="px-4 pb-4">
                    <p className="text-base text-gray-700">{faq.answer}</p>
                  </dd>
                )}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Help;