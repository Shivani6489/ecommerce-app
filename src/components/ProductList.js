import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Filter from './Filter';
import Sort from './Sort';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(response => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      });
  }, []);

  const applyFilter = (filterType, value) => {
    // Example filter logic
    const filtered = products.filter(product => product[filterType] === value);
    setFilteredProducts(filtered);
  };

  const applySort = (sortType) => {
    const sorted = [...filteredProducts].sort((a, b) => {
      if (sortType === 'price_asc') return a.price - b.price;
      if (sortType === 'price_desc') return b.price - a.price;
      return 0;
    });
    setFilteredProducts(sorted);
  };

  return (
    <div>
      <Filter applyFilter={applyFilter} />
      <Sort applySort={applySort} />
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
