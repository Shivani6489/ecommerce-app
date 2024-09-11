const Filter = ({ applyFilter }) => {
    return (
      <div>
        <label>Color:</label>
        <select onChange={(e) => applyFilter('color', e.target.value)}>
          <option value="all">All</option>
          <option value="red">Red</option>
          <option value="blue">Blue</option>
        </select>
      </div>
    );
  };
  
  export default Filter;
  