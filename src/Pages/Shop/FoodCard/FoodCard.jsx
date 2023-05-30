import React from 'react';

const FoodCard = ({ item }) => {
    const { _id, image, name, price, recipe } = item
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <img className='object-cover' src={image} alt="Shoes" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <p className='bg-black text-white px-2 py-1 absolute top-3 right-3 rounded'>${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline bg-gray-100 border-0 border-b-4">Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;