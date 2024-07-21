import React, { useEffect, useState } from 'react';

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const apiKey = 'dd84a805a14b40b9b8ad08c3fff463e6';
const Search = ({ apiData, setApiData }) => {
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${apiKey}`);
      const data = await res.json();

      setApiData(data.results);
    }
    fetchFood();
  }, [searchData]);
  return (
    <div className=" searchContainer d-flex mx-5 ">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setSearchData(e.target.value)}
      />

      <button
        onClick={() => {}}
        className="btn btn-outline-success"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
