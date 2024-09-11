const Sort = ({ applySort }) => {
    return (
      <div>
        <label>Sort by:</label>
        <select onChange={(e) => applySort(e.target.value)}>
          <option value="price_asc">Price Low to High</option>
          <option value="price_desc">Price High to Low</option>
        </select>
      </div>
    );
  };
  
  export default Sort;
  