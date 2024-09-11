// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const FAQ = () => {
//   const [faqs, setFaqs] = useState([]);
//   const [error, setError] = useState(null);
//   const [activeIndex, setActiveIndex] = useState(null);

//   useEffect(() => {
//     const fetchFaqs = async () => {
//       try {
//         const response = await axios.get('https://perenual.com/api/article-faq-list', {
//           params: {
//             key: 'sk-RQmk66dbeb376c7216761', // Replace with your actual API key
//             page: 1 // You can adjust the page number if necessary
//           }
//         });
//         setFaqs(response.data.data);
//       } catch (err) {
//         setError('Error fetching FAQ data');
//       }
//     };

//     fetchFaqs();
//   }, []);

//   const toggleAccordion = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <div className="faq-container max-w-4xl mx-auto p-4">
//       <h1 className="text-4xl font-bold text-center mb-8 text-green-900">Frequently Asked Questions</h1>
//       {error ? (
//         <p className="text-red-500">{error}</p>
//       ) : (
//         faqs.map((faq, index) => (
//           <div key={faq.id} className="faq-item border-b mb-4">
//             <div
//               className={`faq-question cursor-pointer p-4 flex justify-between items-center ${activeIndex === index ? 'bg-[#8a9d68] text-white' : 'bg-gray-100 text-green-900 hover:bg-[#8a9d68] hover:text-white'}`}
//               onClick={() => toggleAccordion(index)}
//             >
//               <h2 className="text-xl">{faq.question}</h2>
//               <span>{activeIndex === index ? '-' : '+'}</span>
//             </div>
//             {activeIndex === index && (
//               <div className="faq-answer p-4 bg-white">
//                 <p className="mb-4">{faq.answer}</p>
//                 <div className="faq-tags mb-2">
//                   <strong>Tags:</strong> {faq.tags.join(', ')}
//                 </div>
//                 {faq.default_image && (
//                   <img
//                     src={faq.default_image.medium_url}
//                     alt={faq.question}
//                     className="w-full h-auto mt-4 rounded-lg"
//                   />
//                 )}
//               </div>
//             )}
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default FAQ;

import React, { useState } from 'react';

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sections = [
    {
      title: 'Spider Plant',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> What light conditions does the Spider Plant need? <br /><strong>A:</strong> It prefers bright, indirect light. Avoid direct sunlight.</li>
            <li><strong>Q:</strong> How often should I water my Spider Plant? <br /><strong>A:</strong> Water when the top inch of soil dries out.</li>
            <li><strong>Q:</strong> What is the ideal temperature for a Spider Plant? <br /><strong>A:</strong> It thrives in temperatures between 65-75°F (18-24°C).</li>
            <li><strong>Q:</strong> Does the Spider Plant need high humidity? <br /><strong>A:</strong> Moderate humidity is ideal.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Avoid direct sunlight to prevent leaf burn.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Aloe Vera',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> How much light does Aloe Vera need? <br /><strong>A:</strong> Needs bright, indirect sunlight but can tolerate some direct sunlight.</li>
            <li><strong>Q:</strong> How often should I water Aloe Vera? <br /><strong>A:</strong> Water when the soil is completely dry. Reduce watering in winter.</li>
            <li><strong>Q:</strong> What temperature is best for Aloe Vera? <br /><strong>A:</strong> Ideal between 59-77°F (15-25°C).</li>
            <li><strong>Q:</strong> What about humidity for Aloe Vera? <br /><strong>A:</strong> Low humidity is fine.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Ensure proper drainage to prevent root rot.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Areca Palm',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> What light conditions are best for Areca Palm? <br /><strong>A:</strong> Prefers bright, indirect light but can tolerate low light.</li>
            <li><strong>Q:</strong> How often should I water Areca Palm? <br /><strong>A:</strong> Keep soil consistently moist but not soggy; water less in winter.</li>
            <li><strong>Q:</strong> What is the ideal temperature for Areca Palm? <br /><strong>A:</strong> Best in 65-75°F (18-24°C).</li>
            <li><strong>Q:</strong> Does Areca Palm need high humidity? <br /><strong>A:</strong> High humidity is beneficial.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Mist regularly to increase humidity.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Money Plant (Pothos)',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> What light conditions does Money Plant prefer? <br /><strong>A:</strong> Prefers low to bright, indirect light.</li>
            <li><strong>Q:</strong> How often should I water Money Plant? <br /><strong>A:</strong> Allow the top inch of soil to dry out between waterings.</li>
            <li><strong>Q:</strong> What is the ideal temperature for Money Plant? <br /><strong>A:</strong> Best in 60-85°F (15-29°C).</li>
            <li><strong>Q:</strong> Does Money Plant need high humidity? <br /><strong>A:</strong> Low to moderate humidity is acceptable.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Can tolerate neglect but avoid waterlogging.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Snake Plant',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> What light does Snake Plant need? <br /><strong>A:</strong> Tolerates low light but grows best in indirect sunlight.</li>
            <li><strong>Q:</strong> How often should I water Snake Plant? <br /><strong>A:</strong> Water infrequently; let soil dry out completely.</li>
            <li><strong>Q:</strong> What temperature is best for Snake Plant? <br /><strong>A:</strong> Ideal between 60-75°F (15-24°C).</li>
            <li><strong>Q:</strong> What about humidity for Snake Plant? <br /><strong>A:</strong> Low humidity is suitable.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Very drought-tolerant; avoid overwatering.</li>
          </ul>
        </div>
      ),
    },
    {
      title: 'Rubber Plant',
      content: (
        <div>
          <p><strong>FAQs:</strong></p>
          <ul className="list-disc pl-5">
            <li><strong>Q:</strong> What light conditions are best for Rubber Plant? <br /><strong>A:</strong> Prefers bright, indirect light.</li>
            <li><strong>Q:</strong> How often should I water Rubber Plant? <br /><strong>A:</strong> Water when the top inch of soil is dry.</li>
            <li><strong>Q:</strong> What is the ideal temperature for Rubber Plant? <br /><strong>A:</strong> Thrives in 60-75°F (15-24°C).</li>
            <li><strong>Q:</strong> Does Rubber Plant need high humidity? <br /><strong>A:</strong> Moderate to high humidity is ideal.</li>
            <li><strong>Q:</strong> Any additional care tips? <br /><strong>A:</strong> Wipe leaves occasionally to remove dust.</li>
          </ul>
        </div>
      ),
    },
    // Repeat for the rest of the plants following the same structure
  ];

  return (
    <div className="accordion-container max-w-4xl mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-green-900">Plant FAQs</h1>
      {sections.map((section, index) => (
        <div key={index} className="accordion-item border-b mb-4">
          <div
            className={`accordion-header cursor-pointer p-4 flex justify-between items-center ${activeIndex === index ? 'bg-[#8a9d68] text-white' : 'bg-gray-100 text-green-900 hover:bg-[#8a9d68] hover:text-white'}`}
            onClick={() => toggleAccordion(index)}
          >
            <h2 className="text-xl">{section.title}</h2>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </div>
          {activeIndex === index && (
            <div className="accordion-content p-4 bg-white">
              {section.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
