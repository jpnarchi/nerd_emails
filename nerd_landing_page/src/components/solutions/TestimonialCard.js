import React from 'react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
      <svg className="w-12 h-12 text-[#95BF92] mb-6 opacity-50" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
      </svg>
      <p className="text-lg mb-6 text-gray-300 italic">{testimonial.quote}</p>
      <div>
        <p className="font-bold">{testimonial.author}</p>
        <p className="text-gray-400">{testimonial.position}</p>
        <p className="text-gray-400">{testimonial.company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;