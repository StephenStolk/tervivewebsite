import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FAQ = () => {
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await axios.get('https://perenual.com/api/article-faq-list', {
          params: {
            key: 'sk-RQmk66dbeb376c7216761', // Replace with your actual API key
            page: 1 // You can adjust the page number if necessary
          }
        });
        setFaqs(response.data.data);
      } catch (err) {
        setError('Error fetching FAQ data');
      }
    };

    fetchFaqs();
  }, []);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-900">Frequently Asked Questions</h1>
      {error ? (
        <p className="text-red-500">{error}</p>
      ) : (
        faqs.map((faq, index) => (
          <div key={faq.id} className="faq-item border-b mb-4">
            <div
              className={`faq-question cursor-pointer p-4 flex justify-between items-center ${activeIndex === index ? 'bg-[#8a9d68] text-white' : 'bg-gray-100 text-green-900 hover:bg-[#8a9d68] hover:text-white'}`}
              onClick={() => toggleAccordion(index)}
            >
              <h2 className="text-xl">{faq.question}</h2>
              <span>{activeIndex === index ? '-' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer p-4 bg-white">
                <p className="mb-4">{faq.answer}</p>
                <div className="faq-tags mb-2">
                  <strong>Tags:</strong> {faq.tags.join(', ')}
                </div>
                {faq.default_image && (
                  <img
                    src={faq.default_image.medium_url}
                    alt={faq.question}
                    className="w-full h-auto mt-4 rounded-lg"
                  />
                )}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default FAQ;
