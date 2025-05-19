import React, { useState, useEffect } from 'react';
import "../styles/faqs.css";
import order1 from '../pictures/order1.png';
import order2 from '../pictures/order2.png';
import order3 from '../pictures/order3.png';

const slides = [
  {
    image: order1,
    text: "Browse through our listings and add to cart"
  },
  {
    image: order2,
    text: "added cart items is booked "
  },
  {
    image: order3,
    text: "Secure payment options"
  },
    {
    image: order3,
    text: "Secure payment options"
  }
  
];


function Faqs() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000); // 3 seconds per slide
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='faqsmain'>
      <div className='smallheader'>
        <h1>know how order is purchased?</h1>
      </div>

      <div className='slidehelp'>
        <div className='slideimage'>
          <img  src={slides[current].image} alt="slide" className="slideimg" />
        </div>

        <div className='slidetext'>
          <p>{slides[current].text}</p>
        </div>

        <div className='slideprogressbar'>
          {slides.map((_, index) => (
            <div
              key={index}
              className={`dot ${index === current ? "active" : ""}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
