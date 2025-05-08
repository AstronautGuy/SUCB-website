'use client';

import { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const items = [
        "Personal",
        "Small Business",
        "Wealth Management",
        "Businesses & Institutions",
        "Security",
        "About Us",
    ];

    const filteredItems = items.filter(item =>
        item.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <div className="flex justify-center relative">
            <div className="relative w-32">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Search className="text-gray-400 h-4 w-4" />
                </div>
                <input
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="pl-9 pr-3 border border-gray-300 rounded-2xl w-full focus:outline-none focus:ring-2 focus:ring-black"
                />
                {/* Only show dropdown when query is not empty */}
                {query && (
                    <div className="absolute top-full left-0 mt-1 bg-white shadow-lg w-full rounded-md border border-gray-200 z-10">
                        {filteredItems.length > 0 ? (
                            <ul className="max-h-40 overflow-y-auto">
                                {filteredItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <div className="px-4 py-2 text-gray-400 text-sm">No results found</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}