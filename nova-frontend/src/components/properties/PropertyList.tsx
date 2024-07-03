import React from 'react';

const PropertyList: React.FC = () => {
    const properties = [
        {
            id: 1,
            image: "/property1.jpg",
            title: "Home in Merrick Way",
            description: "Enchanting three bedroom, three bath home with spacious one bedroom...",
            bedrooms: 3,
            bathrooms: 3,
            area: 4300,
            price: "$540,000",
            isFeatured: true,
            tag: "Hot"
        },
        {
            id: 2,
            image: "/property2.jpg",
            title: "Villa in Coral Gables",
            description: "Enjoy serenity of Deering Bay whole day from this spectacular...",
            bedrooms: 4,
            bathrooms: 3.5,
            area: 3500,
            price: "$825,000",
            isFeatured: true,
            tag: "Featured"
        },
        {
            id: 3,
            image: "/property3.jpg",
            title: "Villa on Hollywood Boulevard",
            description: "The very best waterfront location in Harbor Islands complete with...",
            bedrooms: 4,
            bathrooms: 4,
            area: 4530,
            price: "$740,000",
            isFeatured: true,
            tag: "Trendy"
        }
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
                <div key={property.id} className="relative bg-white p-4 rounded-lg shadow-md">
                    {property.isFeatured && (
                        <span className={`absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded-md`}>
                            {property.tag}
                        </span>
                    )}
                    <img src={property.image} alt={property.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-bold mb-2">{property.title}</h3>
                    <p className="text-gray-600 mb-2">{property.description}</p>
                    <div className="flex mb-2">
                        <div className="mr-4">
                            <span className="block text-gray-600">Bedrooms</span>
                            <span className="font-bold">{property.bedrooms}</span>
                        </div>
                        <div className="mr-4">
                            <span className="block text-gray-600">Bathrooms</span>
                            <span className="font-bold">{property.bathrooms}</span>
                        </div>
                        <div>
                            <span className="block text-gray-600">Area</span>
                            <span className="font-bold">{property.area} sq ft</span>
                        </div>
                    </div>
                    <span className="text-blue-600 font-bold">{property.price}</span>
                </div>
            ))}
        </div>
    );
};

export default PropertyList;
