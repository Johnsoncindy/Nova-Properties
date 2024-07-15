/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { properties } from "../data/Property";
import SearchBar from "../components/properties/SearchBar";
import PropertyList from "../components/properties/PropertyList";
import TestimonialCarousel from "../components/card/TestimonialCarousel";
import PartnerSection from "../components/card/PartnerSection";

const Home: React.FC = () => {
  const [searchResults, setSearchResults] = useState(properties);

  const handleSearch = (query: any) => {
    const filteredProperties = properties.filter((property) => {
      const matchType =
        query.type === "all" ||
        property.type.toLowerCase() === query.type.toLowerCase();
      const matchLocation =
        query.location === "" ||
        property.location.toLowerCase().includes(query.location.toLowerCase());
      const matchPrice =
        (query.minPrice === "" ||
          parseInt(property.price.replace("$", "").replace(",", "")) >=
            parseInt(query.minPrice)) &&
        (query.maxPrice === "" ||
          parseInt(property.price.replace("$", "").replace(",", "")) <=
            parseInt(query.maxPrice));
      return matchType && matchLocation && matchPrice;
    });

    setSearchResults(filteredProperties);
  };

  return (
    <div className="container mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-96 mb-16"
        style={{ backgroundImage: `url('/search.jpg')` }}
      >
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 mb-12">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>
      <div className="mt-12 md:mt-2">
        {searchResults.length > 0 ? (
          <>
            <h2 className="text-2xl font-bold my-4">Search Results</h2>
            <PropertyList properties={searchResults} />
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold my-4">Recent Properties</h2>
            <PropertyList properties={properties} />
            {properties.length === 0 && (
              <p className="text-gray-600 mt-4">
                No properties match the search criteria.
              </p>
            )}
          </>
        )}
      </div>
      <TestimonialCarousel />

      <div className="mt-5">
        <PartnerSection />
      </div>
    </div>
  );
};

export default Home;
