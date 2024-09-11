import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'products',
  initialState: {
    list: [],
    filteredList: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload;
    },
    filterProducts: (state, action) => {
      state.filteredList = action.payload;
    },
  },
});

export const { setProducts, filterProducts } = productSlice.actions;
export default productSlice.reducer;
