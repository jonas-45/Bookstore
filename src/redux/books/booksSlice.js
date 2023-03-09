import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BOOKSTORE_BASE_URL from '../../Consts';

const initialState = {
  isLoading: true,
  books: [
    {
      itemId: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      itemId: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      itemId: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};


export const getAllBooks = createAsyncThunk('bookstore', () => {
  return fetch(BOOKSTORE_BASE_URL + "/books")
                  .then((resp) => resp.json())
                  .catch((error) => console.log(error));
});

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => ({
      ...state,
      books: [...state.books, action.payload],
    }),
    removeBook: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => (book.itemId !== id)),
      };
    },
  },
  extraReducers: {
    [getAllBooks.pending]: (state) => {
      return state;
    },
    [getAllBooks.fulfilled]: (state, action) => {
      return {...state, isLoading: false, books: action.payload};
    },
    [getAllBooks.rejected]: (state) => {
      return state;
    }
  }
});

// const booksSlice = createSlice({
//   name: 'books',
//   initialState,
//   reducers: {
//     addBook: (state, action) => ({
//       ...state,
//       books: [...state.books, action.payload],
//     }),
//     removeBook: (state, action) => {
//       const id = action.payload;
//       return {
//         ...state,
//         books: state.books.filter((book) => (book.itemId !== id)),
//       };
//     },
//   },
// });

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
