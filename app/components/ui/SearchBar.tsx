"use client";

import { ChangeEvent, useCallback, useState } from "react";
import { useDebounce } from "../../hooks/common/use-debounce";
import { SearchBarProps } from "../../lib/types/ui";

export default function SearchBar({ onSearch, placeholder }: SearchBarProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);

  useDebounce(searchTerm, 600, onSearch);

  return (
    <div
      role="search"
      aria-label="Stock search"
      className="sticky top-0 bg-gray-900 p-4 z-10"
    >
      <label htmlFor="stock-search" className="sr-only">
        Search stocks
      </label>
      <input
        id="stock-search"
        type="search"
        placeholder={placeholder}
        value={searchTerm}
        onChange={handleChange}
        className="w-full max-w-2xl mx-auto block px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-blue-500"
      />
    </div>
  );
}
