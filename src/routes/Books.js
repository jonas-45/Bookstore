import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { getAllBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => (<Book key={book.itemId} book={book} />))}
      <hr className="horizontal-line" />
      <AddBook />
    </div>
  );
}
