import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BOOKSTORE_BASE_URL from '../../Consts';

const initialState = {
  isLoading: true,
  books: [],
};

export const getAllBooks = createAsyncThunk('bookstore', () => {
  const books = fetch(`${BOOKSTORE_BASE_URL}/books`)
    .then((resp) => resp.json())
    .catch((error) => console.log(error));

  return books;
});

export const postBook = createAsyncThunk('addbook', (newBookObj) => (fetch(`${BOOKSTORE_BASE_URL}/books`, {
  method: 'POST',
  body: JSON.stringify(newBookObj),
  headers: {
    'Content-Type': 'application/json',
  },
}).then(() => newBookObj)
  .catch(() => false)));

export const removeBook = createAsyncThunk('removebook', (bookId) => (fetch(`${BOOKSTORE_BASE_URL}/books/${bookId}`, {
  method: 'DELETE',
  headers: {
    'Content-Type': 'application/json',
  },
}).then(() => bookId)
  .catch(() => false)));

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (action) => {
      postBook(action.payload);
      // ...state,
      // books: [...state.books, action.payload],
    },
    removeBook: (state, action) => {
      const id = action.payload;
      return {
        ...state,
        books: state.books.filter((book) => (book.itemId !== id)),
      };
    },
  },
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      const books = action.payload;
      const booksArr = Object.keys(books).map((bookId) => ({
        itemId: bookId,
        ...books[bookId][0],
      }));
      return { ...state, isLoading: false, books: booksArr };
    },
    [postBook.fulfilled]: (state, action) => {
      state.books.push(action.payload);
    },
    // [postBook.pending]: (state) => state,
    // [postBook.fulfilled]: () => (getAllBooks()),
    // [postBook.rejected]: (state) => state,
  },
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
