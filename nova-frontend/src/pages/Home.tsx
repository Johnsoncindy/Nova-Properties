import React from "react";
import PropertyList from "../components/properties/PropertyList";
import SearchBar from "../components/properties/SearchBar";

const Home: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <div
        className="relative bg-cover bg-center h-96 mb-16"
        style={{ backgroundImage: `url('/search.jpg')` }}
      >
        <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 mb-12">
          <SearchBar />
        </div>
      </div>
      <div className="mt-12 md:mt-16"> {/* Adjust margin top for small screens */}
        <h2 className="text-2xl font-bold my-4">Recent Properties</h2>
        <PropertyList />
      </div>
    </div>
  );
};

export default Home;


