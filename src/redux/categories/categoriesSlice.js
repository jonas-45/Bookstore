import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
  status: 'under construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => ({
      ...state,
      status: 'Under construction2',
    }),
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
