import React, { useState,useHistory } from 'react';
// import {  } from 'react-router-dom';

const SearchPage = () => {
  const history = useHistory();
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = () => {
    if (searchValue.trim() !== '') {
      history.push(`/search?q=${encodeURIComponent(searchValue)}`);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchPage;
