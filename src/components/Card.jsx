// import React, { useState, useEffect } from 'react';
// import { FaStar } from 'react-icons/fa';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// const Card = ({products}) => {
    
//     console.log("Shalu",products)

//   return (
//     <div className="max-w-7xl mx-auto px-4 py-8">
//       <h2 className="text-4xl font-bold text-center uppercase mb-8 text-gray-800">Indo Western Dresses</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 " data-aos="fade-up" data-aos-duration="1500" >
//         {cardData.map((item, index) => (
//           <HoverCard key={index} item={item} />
//         ))}
//       </div>
//     </div>
//   );
// };

// const HoverCard = ({ item }) => {
//   const [hovered, setHovered] = useState(false);

//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration in ms
//       once: true,     // whether animation should happen only once
//     });
//   }, []);

//   return (
//     <div
//       className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <img
//         src={hovered ? item.hoverImage : item.image}
//         alt={item.title}
//         className="w-full h-60 object-cover transition duration-300 ease-in-out"
//         loading="lazy"
//       />
//       <div className="p-4 " >
//         <div className="flex justify-between items-center mb-2">
//           <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
//           <div className="flex items-center text-yellow-500">
//             <FaStar className="mr-1" />
//             <span className="text-sm">{item.rating}</span>
//           </div>
//         </div>
//         <p className="text-sm text-gray-600 mb-3">{item.description}</p>
//         <div className="flex justify-between items-center">
//           <div>
//             <p className="text-lg font-bold text-gray-900">₹{item.price}</p>
//             <p className="text-sm line-through text-gray-400">
//               ₹{Math.round(item.price / (1 - parseInt(item.discount) / 100))}
//             </p>
//           </div>
//           <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
//             {item.discount}
//           </span>
          
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Card;



import React, { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ products = [] }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  console.log("nitesh:", products);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
    

      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        data-aos="fade-up"
        data-aos-duration="1500"
      >
        {products.length > 0 ? (
          products.map((item, index) => (
            <HoverCard key={index} item={item} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No products found.
          </p>
        )}
      </div>
    </div>
  );
};

const HoverCard = ({ item }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      data-aos="zoom-in"
    >
      <img
        src={hovered ? item.hoverImage : item.image}
        alt={item.title}
        className="w-full h-[350px] object-cover transition duration-300 ease-in-out"
        loading="lazy"
      />

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
          <div className="flex items-center text-yellow-500">
            <FaStar className="mr-1" />
            <span className="text-sm">{item.rating}</span>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">{item.description}</p>

        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-bold text-gray-900">₹{item.price}</p>
            <p className="text-sm line-through text-gray-400">
              ₹{Math.round(item.price / (1 - parseInt(item.discount) / 100))}
            </p>
          </div>
          <span className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded-full">
            {item.discount}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
