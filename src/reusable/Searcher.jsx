import React, { useState } from 'react';

export default function Searcher({ data, searchKey, render }) {
  const [searchTerm, setSearchTerm] = useState('');
  const filteredData = data.filter((item) => {
    const valueToSearch = item[searchKey]?.toLowerCase() || '';
    return valueToSearch.includes(searchTerm.toLowerCase());
  });

  return (
    <div className="space-y-6">
      
      <div className="max-w-md mx-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Buscar mangas o cómics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2.5 pl-10 pr-4 text-zinc-900 bg-white border border-zinc-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all placeholder-zinc-400 shadow-sm"
          />
          
          <div className="absolute left-3 top-3.5 pointer-events-none">
            <svg 
              className="w-5 h-5 text-zinc-400" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      {render(filteredData)}
    </div>
  );
}