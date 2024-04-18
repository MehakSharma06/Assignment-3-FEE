// components/ExtendedSearchBar.js
import React, { useState } from 'react';
import './ExtendedSearchBar.css';

function ExtendedSearchBar({ onSearch }) {
  const [searchParams, setSearchParams] = useState({
    searchType: 'title',
    searchTerm: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchParams({
      ...searchParams,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchParams);
  };

  return (
    <form onSubmit={handleSubmit} className="extended-search-bar">
      <select
        name="searchType"
        value={searchParams.searchType}
        onChange={handleChange}
        className="search-type-dropdown"
      >
        <option value="title">All Residential</option>
        <option value="description">Flat/Apartment</option>
      </select>
      <input
        type="text"
        name="searchTerm"
        placeholder="Featured projects across India..."
        value={searchParams.searchTerm}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default ExtendedSearchBar;
