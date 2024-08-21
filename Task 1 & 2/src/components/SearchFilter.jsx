import React, { useState } from 'react';

const SearchFilter = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // List of Asian countries
  const items = ['Afghanistan','Armenia','Azerbaijan','Bahrain','Bangladesh','Bhutan','Brunei','Cambodia','China',
    'Cyprus','Georgia','India','Indonesia','Iran','Iraq','Israel','Japan','Jordan','Kazakhstan',
    'Kuwait','Kyrgyzstan','Laos','Lebanon','Malaysia','Maldives','Mongolia','Myanmar','Nepal','North Korea',
    'Oman','Pakistan', 'Palestine', 'Philippines','Qatar','Saudi Arabia','Singapore','South Korea','Sri Lanka',
    'Syria','Taiwan','Tajikistan','Thailand','Timor-Leste','Turkey','Turkmenistan','United Arab Emirates','Uzbekistan',
    'Vietnam',];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-lg mx-auto bg-white shadow-md rounded-lg mt-80 p-6" id='search'>
      <h1 className='text-3xl text-center text-yellow-600 uppercase font-serif'>Search Filter</h1>
      <input
        type="text"
        placeholder="Search for a country..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <ul className="mt-4 max-h-64 overflow-y-auto border-t border-gray-200">
        {filteredItems.length > 0 ? (
          filteredItems.map((item, index) => (
            <li
              key={index}
              className="p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200"
            >
              {item}
            </li>
          ))
        ) : (
          <li className="p-3 text-center text-gray-500">No countries found</li>
        )}
      </ul>
    </div>
  );
};

export default SearchFilter;
