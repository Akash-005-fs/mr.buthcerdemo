// import React, { useRef, useState } from 'react';
// import "../styles/homeshop.css";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// function HomeShop() {
//   const scrollRef = useRef();
//   const [activeFilter, setActiveFilter] = useState('Pizza');

//   const scrollLeft = () => {
//     scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
//   };

//   const scrollRight = () => {
//     scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
//   };

//   const filters = [
//     { name: 'Chuck', img: '/images/pizza.png' },
//     { name: 'Rib', img: '/images/thai.png' },
//     { name: 'Short Loin', img: '/images/sushi.png' },
//     { name: 'Sirloin', img: '/images/grill.png' },
//     { name: 'Rump', img: '/images/burger.png' },
//     { name: 'Round', img: '/images/pasta.png' },
//     { name: 'Shank', img: '/images/noodles.png' },
//     { name: 'Flank', img: '/images/salad.png' },
//     { name: 'Short Plate', img: '/images/dessert.png' },
//     { name: 'Brisket', img: '/images/dessert.png' },
//   ];

//   const meatCards = [
//     { name: 'Chuck', weight: '250g', calories: '430Kcal', price: 24.99, img: '/images/beef1.jpg' },
//     { name: 'Rib', weight: '200g', calories: '380Kcal', price: 19.99, img: '/images/chicken.jpg' },
//     { name: 'Short Loin', weight: '300g', calories: '520Kcal', price: 29.99, img: '/images/steak.jpg' },
//     { name: 'Sirloin', weight: '220g', calories: '450Kcal', price: 27.99, img: '/images/lamb.jpg' },
//     { name: 'Rump', weight: '350g', calories: '600Kcal', price: 32.99, img: '/images/ribs.jpg' },
//     { name: 'Round', weight: '240g', calories: '390Kcal', price: 23.99, img: '/images/turkey.jpg' },
//     { name: 'Shank', weight: '180g', calories: '330Kcal', price: 17.99, img: '/images/meatballs.jpg' },
//     { name: 'Flank', weight: '260g', calories: '480Kcal', price: 26.99, img: '/images/pork.jpg' },
//     { name: 'Short Plate', weight: '400g', calories: '650Kcal', price: 35.99, img: '/images/mixed.jpg' },
//     { name: 'Brisket', weight: '210g', calories: '410Kcal', price: 21.99, img: '/images/ham.jpg' },
//   ];

//   // Quantity state per card (by index)
//   const [quantities, setQuantities] = useState(() => {
//     const initial = {};
//     meatCards.forEach((_, index) => {
//       initial[index] = 1;
//     });
//     return initial;
//   });

//   const increment = (index) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [index]: prev[index] + 1,
//     }));
//   };

//   const decrement = (index) => {
//     setQuantities((prev) => ({
//       ...prev,
//       [index]: prev[index] > 1 ? prev[index] - 1 : 1,
//     }));
//   };

//   return (
//     <div className='homeshopmain'>
//       <div className="scroll-wrapper">
//         <button className="scroll-btn left" onClick={scrollLeft}>
//           <FaChevronLeft />
//         </button>

//         <div className='filter' ref={scrollRef}>
//           <div className='filter-scroll'>
//             {filters.map((item) => (
//               <div
//                 key={item.name}
//                 className={`filter-item ${activeFilter === item.name ? 'active' : ''}`}
//                 onClick={() => setActiveFilter(item.name)}
//               >
//                 <div
//                   className='filter-img'
//                   style={{ backgroundImage: `url(${item.img})` }}
//                 ></div>
//                 <span>{item.name}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         <button className="scroll-btn right" onClick={scrollRight}>
//           <FaChevronRight />
//         </button>
//       </div>

//       {meatCards.map((item, index) => (
//         <div key={index} className="meatcard flex items-center p-4 bg-white rounded-3xl shadow-md max-w-[600px] w-[90%] mx-auto my-4">
//           <img
//             src={item.img}
//             alt={item.name}
//             className="w-24 h-24 rounded-2xl object-cover bg-amber-100"
//           />
//           <div className="ml-4 flex-1">
//             <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
//             <div className="text-sm text-gray-500 flex gap-4 my-1">
//               <span>⚖️ {item.weight}</span>
//               <span>🔥 {item.calories}</span>
//             </div>

//             <div className="flex justify-between items-center mt-2 flex-wrap">
//               <span className="text-base font-bold text-gray-800">${item.price}</span>

//               <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-2 sm:mt-0">
//                 <button className="bg-red-500 text-white text-sm px-4 py-1 rounded-full hover:bg-red-600">
//                   Add
//                 </button>

//                 <div className="flex items-center justify-center mt-2 sm:mt-0 space-x-2">
//                   <button onClick={() => decrement(index)} className="bg-gray-200 px-2 rounded-full text-sm font-bold">−</button>
//                   <span className="w-6 text-center">{quantities[index]}</span>
//                   <button onClick={() => increment(index)} className="bg-gray-200 px-2 rounded-full text-sm font-bold">+</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default HomeShop;











import React, { useRef, useState } from 'react';
import "../styles/homeshop.css";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Meat filter icons
import chuckIcon from '../pictures/p12.png';
import ribIcon from '../pictures/p12.png';
import shortLoinIcon from '../pictures/p12.png';
import sirloinIcon from '../pictures/p12.png';
import rumpIcon from '../pictures/p12.png';
import roundIcon from '../pictures/p12.png';
import shankIcon from '../pictures/p12.png';
import flankIcon from '../pictures/p12.png';
import shortPlateIcon from '../pictures/p12.png';
import brisketIcon from '../pictures/p12.png';

// Meat card images
import chuckImg from '../pictures/p12.png';
import ribImg from '../pictures/p12.png';
import shortLoinImg from '../pictures/p12.png';
import sirloinImg from '../pictures/p12.png';
import rumpImg from '../pictures/p12.png';
import roundImg from '../pictures/p12.png';
import shankImg from '../pictures/p12.png';
import flankImg from '../pictures/p12.png';
import shortPlateImg from '../pictures/p12.png';
import brisketImg from '../pictures/p12.png';

function HomeShop() {
  const scrollRef = useRef();
  const [activeFilter, setActiveFilter] = useState('Chuck');

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
  };

  const filters = [
    { name: 'Chuck', img: chuckIcon },
    { name: 'Rib', img: ribIcon },
    { name: 'Short Loin', img: shortLoinIcon },
    { name: 'Sirloin', img: sirloinIcon },
    { name: 'Rump', img: rumpIcon },
    { name: 'Round', img: roundIcon },
    { name: 'Shank', img: shankIcon },
    { name: 'Flank', img: flankIcon },
    { name: 'Short Plate', img: shortPlateIcon },
    { name: 'Brisket', img: brisketIcon },
  ];

  const meatCards = [
    { name: 'Chuck', weight: '250g', calories: '430Kcal', price: 24.99, img: chuckImg },
    { name: 'Rib', weight: '200g', calories: '380Kcal', price: 19.99, img: ribImg },
    { name: 'Short Loin', weight: '300g', calories: '520Kcal', price: 29.99, img: shortLoinImg },
    { name: 'Sirloin', weight: '220g', calories: '450Kcal', price: 27.99, img: sirloinImg },
    { name: 'Rump', weight: '350g', calories: '600Kcal', price: 32.99, img: rumpImg },
    { name: 'Round', weight: '240g', calories: '390Kcal', price: 23.99, img: roundImg },
    { name: 'Shank', weight: '180g', calories: '330Kcal', price: 17.99, img: shankImg },
    { name: 'Flank', weight: '260g', calories: '480Kcal', price: 26.99, img: flankImg },
    { name: 'Short Plate', weight: '400g', calories: '650Kcal', price: 35.99, img: shortPlateImg },
    { name: 'Brisket', weight: '210g', calories: '410Kcal', price: 21.99, img: brisketImg },
  ];

  const [quantities, setQuantities] = useState(() => {
    const initial = {};
    meatCards.forEach((_, index) => {
      initial[index] = 1;
    });
    return initial;
  });

  const increment = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: prev[index] + 1,
    }));
  };

  const decrement = (index) => {
    setQuantities((prev) => ({
      ...prev,
      [index]: prev[index] > 1 ? prev[index] - 1 : 1,
    }));
  };

  const handleAddToCart = (item, quantity) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingItemIndex = cart.findIndex((i) => i.name === item.name);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...item, quantity });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    toast.success(`${item.name} x${quantity} added to cart!`);
  };

  const sortedMeatCards = [...meatCards].sort((a, b) => {
    if (a.name === activeFilter) return -1;
    if (b.name === activeFilter) return 1;
    return 0;
  });

  return (
    <div className='homeshopmain'>
      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className='filter' ref={scrollRef}>
          <div className='filter-scroll'>
            {filters.map((item) => (
              <div
                key={item.name}
                className={`filter-item ${activeFilter === item.name ? 'active' : ''}`}
                onClick={() => setActiveFilter(item.name)}
              >
                <div
                  className='filter-img'
                  style={{ backgroundImage: `url(${item.img})` }}
                ></div>
                <span>{item.name}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="scroll-btn right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>

      {sortedMeatCards.map((item, index) => (
        <div
          key={index}
          className={`meatcard ${item.name === activeFilter ? 'highlighted' : ''}`}
        >
          <img
            src={item.img}
            alt={item.name}
            className="w-24 h-24 rounded-2xl object-cover bg-amber-100"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
            <div className="text-sm text-gray-500 flex gap-4 my-1">
              <span>⚖️ {item.weight}</span>
              <span>🔥 {item.calories}</span>
            </div>

            <div className="flex justify-between items-center mt-2 flex-wrap">
              <span className="text-base font-bold text-gray-800">${item.price}</span>

              <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mt-2 sm:mt-0">
                <button
                  className="bg-red-500 text-white text-sm px-4 py-1 rounded-full hover:bg-red-600"
                  onClick={() => handleAddToCart(item, quantities[index])}
                >
                  Add
                </button>

                <div className="flex items-center justify-center mt-2 sm:mt-0 space-x-2">
                  <button onClick={() => decrement(index)} className="bg-gray-200 px-2 rounded-full text-sm font-bold">−</button>
                  <span className="w-6 text-center">{quantities[index]}</span>
                  <button onClick={() => increment(index)} className="bg-gray-200 px-2 rounded-full text-sm font-bold">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={2000} hideProgressBar />
    </div>
  );
}

export default HomeShop;












