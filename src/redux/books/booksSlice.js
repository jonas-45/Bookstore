import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import BOOKSTORE_BASE_URL from '../../Consts';

const initialState = {
  isLoading: true,
  books: [],
};

export const getAllBooks = createAsyncThunk('bookstore', () => {
  const books = fetch(`${BOOKSTORE_BASE_URL}/books`)
    .then((resp) => resp.json())
    .catch(() => false);

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
  reducers: {},
  extraReducers: {
    [getAllBooks.fulfilled]: (state, action) => {
      const books = action.payload;
      const booksArr = Object.keys(books).map((bookId) => ({
        id: bookId,
        ...books[bookId][0],
      }));
      return { ...state, isLoading: false, books: booksArr };
    },
    [postBook.fulfilled]: (state, action) => {
      const { item_id: id, ...rest } = action.payload;
      const addedBook = {
        id,
        ...rest,
      };
      state.books.push(addedBook);
    },
    [removeBook.fulfilled]: (state, action) => {
      const id = action.payload;
      const filteredBooks = state.books.filter((book) => (book.id !== id));
      return {
        ...state,
        books: filteredBooks,
      };
    },
  },
});

export default booksSlice.reducer;
