import React from 'react'
import Card from './Card'

const Data = [
    {
        image: "img12.jpg",
        hoverImage: "img2.jpeg",
        title: "Top Crape ",
        description: "Soft rayon or cotton blend for breathable, all-day comfort",
        price: 2000,
        rating: 4.5,
        discount: "25% Off"
    },
    {
        image: "img13.jpg",
        hoverImage: "img4.jpg",
        title: "crape Dress",
        description: "Soft cotton t-shirt for all-day wear perfect fit",
        price: 4400,
        rating: 4.8,
        discount: "25% Off"
    },
    {
        image: "img14.jpg",
        hoverImage: "img5.jpg",
        title: "Kurta Duppata dress",
        description: "Elegant gown with flowing fabric and perfect fit",
        price: 5500,
        rating: 4,
        discount: "20% Off"
    },
    {
        image: "img16.jpg",
        hoverImage: "img7.jpg",
        title: "Crape dress",
        description: "Chic mini dress with soft fabric and comfort",
        price: 3500,
        rating: 4.5,
        discount: "30% Off"
    }
];

const Kaftan = () => {
    return (
        <div>
            <div>
                <h2 className="text-4xl font-bold text-center uppercase mb-2 text-gray-800">
                    Kaftan
                </h2>
            </div>
            <Card products={Data} />
        </div>
    )
}

export default Kaftan
