import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "flowbite-react";
import { Property } from "../../interfaces/Property";

interface Props {
  properties: Property[];
}

const PropertyList: React.FC<Props> = ({ properties }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(3);
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(properties.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {properties.slice(startIndex, endIndex).map((property) => (
        <Link key={property.id} to={`/property/${property.id}`}>
          <div className="relative bg-white p-4 rounded-lg shadow-md h-full">
            {property.isFeatured && (
              <span className="absolute top-2 left-2 bg-blue-500 text-white px-2 py-1 text-xs rounded-md">
                {property.tag}
              </span>
            )}
            <img
              src={property.images[0]}
              alt={property.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold mb-2">{property.title}</h3>
            <p className="text-gray-600 mb-2">{property.description}</p>
            <div className="flex flex-wrap mb-2">
              {property.bedrooms && (
                <div className="mr-4 mb-2 sm:mb-0">
                  <span className="block text-gray-600">Bedrooms</span>
                  <span className="font-bold">{property.bedrooms}</span>
                </div>
              )}
              {property.bathrooms && (
                <div className="mr-4 mb-2 sm:mb-0">
                  <span className="block text-gray-600">Bathrooms</span>
                  <span className="font-bold">{property.bathrooms}</span>
                </div>
              )}
              <div className="mb-2 sm:mb-0">
                <span className="block text-gray-600">Area</span>
                <span className="font-bold">{property.area} sq ft</span>
              </div>
            </div>
            <span className="text-blue-600 font-bold">{property.price}</span>
          </div>
        </Link>
      ))}

      <div className="mt-4 flex justify-center">
        <Pagination
          layout="navigation"
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          showIcons
        />
      </div>
    </div>
  );
};

export default PropertyList;