import React from 'react';
import { useGlobalContext } from './context';

const SearchForm = () => {
  const { query, searchHandler } = useGlobalContext();

  return (
    <form className="search-form">
      <h2>search hacker news</h2>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => searchHandler(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
