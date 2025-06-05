import React from 'react'
import Card from './Card';

const Data = [
    {
        image: "img1.jpg",
        hoverImage: "img2.jpeg",
        title: "Trouser dress",
        description: "Soft rayon or cotton blend for breathable, all-day comfort",
        price: 4000,
        rating: 4.5,
        discount: "25% Off"
    },
    {
        image: "img3.jpg",
        hoverImage: "img4.jpg",
        title: "T-shirts",
        description: "Soft cotton t-shirt for all-day wear perfect fit",
        price: 400,
        rating: 4.8,
        discount: "25% Off"
    },
    {
        image: "img5.jpg",
        hoverImage: "img5.jpg",
        title: "Gown dress",
        description: "Elegant gown with flowing fabric and perfect fit",
        price: 5000,
        rating: 4,
        discount: "20% Off"
    },
    {
        image: "img6.jpg",
        hoverImage: "img7.jpg",
        title: "Mini dress",
        description: "Chic mini dress with soft fabric and comfort",
        price: 4000,
        rating: 4.5,
        discount: "30% Off"
    }
];


const Indowestern = () => {
    return (
        <>
            <div>
                <h2 className="text-4xl font-bold text-center uppercase mb-2 text-gray-800">
                    Indo Western Dresses
                </h2>
            </div>
            <Card products={Data} />
        </>
    )
}

export default Indowestern
