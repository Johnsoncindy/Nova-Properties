/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Button } from "flowbite-react";

const types = ["buy", "rent", "lease"];

const SearchBar: React.FC<{ onSearch: (query: any) => void }> = ({ onSearch }) => {
  const [query, setQuery] = useState({
    type: "all",
    location: "",
    minPrice: "",
    maxPrice: "",
  });

  const switchType = (val: string) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <div className="p-6 rounded-lg shadow-md mb-10 mx-4" style={{ backgroundColor: '#ffc72c' }}>
      <div className="flex justify-start mb-4 gap-2">
        {types.map((type) => (
          <Button
            key={type}
            pill
            onClick={() => switchType(type)}
            className={`${query.type === type ? "bg-[#022F6B] text-white" : "bg-[#ffffff] text-black"}`}
          >
            {type}
          </Button>
        ))}
      </div>
      <form onSubmit={handleFormSubmit} className="flex flex-wrap items-center gap-4">
        <input
          type="text"
          id="location"
          name="location"
          placeholder="City Location"
          className="p-2 border rounded"
          value={query.location}
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
        />
        <input
          type="number"
          id="minPrice"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="p-2 border rounded"
          value={query.minPrice}
          onChange={(e) => setQuery({ ...query, minPrice: e.target.value })}
        />
        <input
          type="number"
          id="maxPrice"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="p-2 border rounded"
          value={query.maxPrice}
          onChange={(e) => setQuery({ ...query, maxPrice: e.target.value })}
        />
        <Button size="sm" type="submit" className="bg-[#022F6B] text-white" pill>
          Search
        </Button>
      </form>
    </div>
  );
};

export default SearchBar;

