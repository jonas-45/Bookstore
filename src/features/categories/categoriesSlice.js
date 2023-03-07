import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: ['under construction'],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => [...state],
  }
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;