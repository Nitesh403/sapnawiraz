// import React from 'react'
// import Navbar from '../components/Navbar'
// import Hero from '../pages/Hero'
// import Card from '../components/Card'
// import Footer from '../components/Footer'


//  const cardData = [
//     {
//       image: "img1.jpg",
//       hoverImage: "img2.jpeg",
//       title: "Trouser dress",
//       description: "Soft rayon or cotton blend for breathable, all-day comfort",
//       price: 4000,
//       rating: 4.5,
//       discount: "25% Off"
//     },
//     {
//       image: "img3.jpg",
//       hoverImage: "img4.jpg",
//       title: "T-shirts",
//       description: "Soft cotton t-shirt for all-day wear perfect fit",
//       price: 400,
//       rating: 4.8,
//       discount: "25% Off"
//     },
//     {
//       image: "img5.jpg",
//       hoverImage: "img5.jpg",
//       title: "Gown dress",
//       description: "Elegant gown with flowing fabric and perfect fit",
//       price: 5000,
//       rating: 4,
//       discount: "20% Off"
//     },
//     {
//       image: "img6.jpg",
//       hoverImage: "img7.jpg",
//       title: "Mini dress",
//       description: "Chic mini dress with soft fabric and comfort",
//       price: 4000,
//       rating: 4.5,
//       discount: "30% Off"
//     }
//   ];


// const Home = () => {
//   return (
//     <div>
//       <Navbar />
//       <Hero />
//       <Card products={cardData}/>
//       <Footer />
//     </div>
//   )
// }

// export default Home
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../pages/Hero';
import Footer from '../components/Footer';
import Indowestern from '../components/Indowestern';
import Cordset from '../components/Cordset';
import Kaftan from '../components/Kaftan';
import Rupatta from '../components/Rupatta';





const Home = () => {
  return (
    <div>
      <Hero />
      <Indowestern />
      <Cordset />
      <Kaftan />
      <Rupatta />
    </div>
  );
};

export default Home;
