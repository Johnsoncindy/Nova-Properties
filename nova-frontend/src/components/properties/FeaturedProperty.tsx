import React from 'react';

const FeaturedProperty: React.FC = () => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
            <div className="flex flex-col md:flex-row">
                <img src="/property4.jpg" alt="Featured Property" className="md:w-1/2 rounded-lg mb-4 md:mb-0 md:mr-4" />
                <div className="md:w-1/2">
                    <h2 className="text-2xl font-bold mb-2">Villa on Hollywood Boulevard</h2>
                    <p className="text-gray-600 mb-4">Hatteras Lane, Hollywood, FL 33019, USA</p>
                    <div className="flex mb-4">
                        <div className="mr-4">
                            <span className="block text-gray-600">Bedrooms</span>
                            <span className="font-bold">3</span>
                        </div>
                        <div className="mr-4">
                            <span className="block text-gray-600">Bathrooms</span>
                            <span className="font-bold">4</span>
                        </div>
                        <div>
                            <span className="block text-gray-600">Area</span>
                            <span className="font-bold">4530 sq ft</span>
                        </div>
                    </div>
                    <span className="text-blue-600 font-bold text-xl">$740,000</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperty;
