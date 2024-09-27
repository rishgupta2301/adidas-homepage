import React from 'react';
import './QuotesSection.css';

const quotes = [
  {
    text: "The only way to prove you are a good sport is to lose.",
    author: "- Ernie Banks",
  },
  {
    text: "What seems impossible today will one day become your warm-up.",
    author: "- Nipsey Hussle",
  },
  {
    text: "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing.",
    author: "- Pelé",
  },
];

const QuotesSection = () => {
    return (
      <div className="quotes-section">
        <h2>Motivational Quotes</h2>
        <div className="quotes-container">
          {quotes.map((quote, index) => (
            <div key={index} className="quote-card">
              <p className="quote-text">"{quote.text}"</p>
              <p className="quote-author">- {quote.author}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default QuotesSection;
