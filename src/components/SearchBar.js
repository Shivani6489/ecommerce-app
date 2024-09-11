import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/slices/productSlice';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    const cachedResult = localStorage.getItem(query);
    if (cachedResult) {
      dispatch(setProducts(JSON.parse(cachedResult)));
    } else {
      const result = await axios.get(`http://localhost:5000/api/products?search=${query}`);
      setSuggestions(result.data);
      localStorage.setItem(query, JSON.stringify(result.data));
    }
  };

  useEffect(() => {
    if (query.length > 2) {
      handleSearch();
    }
  }, [query]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
      />
      <ul>
        {suggestions.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
