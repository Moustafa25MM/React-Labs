import React, { useState } from 'react';

function Search({ onSearch }) {
    const [query, setQuery] = useState('');
  
    const handleInputChange = e => {
      const value = e.target.value;
      setQuery(value);
      onSearch(value);
    };
  
    return (
      <div className="search">
        <h2>Search</h2>
        <form>
          <input type="text" value={query} onChange={handleInputChange} placeholder="Search by title" className="search-input" />
        </form>
      </div>
    );
  }

export default Search;