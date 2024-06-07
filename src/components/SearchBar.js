import React from 'react';
import './SearchBar.css'

const SearchBar = ({ query, setQuery }) => {
    return (
        <input 
            className='SearchBar'
            type="text" 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="⌕ Search for a book"
        />
    );
};

export default SearchBar;