import React from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails: React.FC = () => {
    useParams<{ id: string; }>();

    // Fetch property details using the id
    const property = {
        title: 'Beautiful House',
        description: 'A beautiful house in the city.',
        price: 250000,
        imageUrl: 'https://via.placeholder.com/150',
        details: 'More details about the property...',
    };

    return (
        <div className="container mx-auto p-4">
            <img className="w-full h-96 object-cover" src={property.imageUrl} alt={property.title} />
            <h1 className="text-3xl font-bold mt-4">{property.title}</h1>
            <p className="text-gray-700 mt-2">{property.description}</p>
            <p className="text-gray-900 font-bold mt-2">${property.price}</p>
            <p className="mt-4">{property.details}</p>
        </div>
    );
};

export default PropertyDetails;
