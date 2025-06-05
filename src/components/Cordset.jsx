import React from 'react'
import Card from './Card';
const Data = [
    {
        image: "img8.png",
        hoverImage: "img2.jpeg",
        title: "Plazo dress",
        description: "Soft rayon or cotton blend for breathable, all-day comfort",
        price: 3000,
        rating: 3.5,
        discount: "25% Off"
    },
    {
        image: "img9.jpg",
        hoverImage: "img4.jpg",
        title: "Kurta Sets",
        description: "Soft cotton t-shirt for all-day wear perfect fit",
        price: 4050,
        rating: 4.9,
        discount: "25% Off"
    },
    {
        image: "img10.jpg",
        hoverImage: "img5.jpg",
        title: "Kurta Sets",
        description: "Elegant gown with flowing fabric and perfect fit",
        price: 5000,
        rating: 5,
        discount: "20% Off"
    },
    {
        image: "img11.jpg",
        hoverImage: "img7.jpg",
        title: "Lulusar dress",
        description: "Chic mini dress with soft fabric and comfort",
        price: 6500,
        rating: 4.5,
        discount: "30% Off"
    }
];
const Cordset = () => {
    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center uppercase mb-2 text-gray-800">
                    Co-ord Sets
                </h2>
            </div>
            <Card products={Data} />
        </div>
    )
}

export default Cordset
