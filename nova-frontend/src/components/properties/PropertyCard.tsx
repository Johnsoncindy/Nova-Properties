import React from 'react';

interface PropertyCardProps {
    title: string;
    description: string;
    price: number;
    imageUrl: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ title, description, price, imageUrl }) => {
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-bold">{title}</h3>
                <p className="text-gray-700">{description}</p>
                <p className="text-gray-900 font-bold">${price}</p>
            </div>
        </div>
    );
};

export default PropertyCard;
