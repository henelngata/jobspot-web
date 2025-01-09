"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // TODO: Implement search functionality
  };

  return (
    <div className="bg-white p-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search or start new chat"
          className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-green-500"
          value={query}
          onChange={handleSearch}
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Search className="w-5 h-5 text-gray-500" />
        </div>
      </div>
    </div>
  );
}
