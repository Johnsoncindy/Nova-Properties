
import React, { useState } from 'react';
import { Button } from 'flowbite-react';

const types = ["buy", "rent", "lease"];

const SearchBar: React.FC = () => {
    const [query, setQuery] = useState({
        type: "buy",
        location: "",
        minPrice: "",
        maxPrice: "",
    });

    const switchType = (val: string) => {
        setQuery((prev) => ({ ...prev, type: val }));
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(query); // For demonstration, you can replace this with your logic
    };

    return (
        <div className="bg-yellow-100 p-6 rounded-lg shadow-md mb-10 mx-4">
            <div className="flex justify-start mb-4 gap-2">
                {types.map((type) => (
                    <Button
                        key={type}
                        pill
                        onClick={() => switchType(type)}
                        color={`${query.type === type ? "success" : "light"}`}
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
                    onChange={(e) => setQuery({ ...query, minPrice: String(e.target.value) })}
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
                    onChange={(e) => setQuery({ ...query, maxPrice: String(e.target.value) })}
                />
                <Button
                    size="sm"
                    type="submit"
                    color="success"
                    pill
                >
                    Search
                </Button>
            </form>
        </div>
    );
};

export default SearchBar;
