import React, { useEffect } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';
import { getAllBooks } from '../redux/books/booksSlice';

export default function Books() {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBooks());
  });

  return (
    <div>
      {books.map((book) => {
        const itemId = book[0];
        const data = book[1][0];
        const bookData = { ...data, itemId };
        return <Book key={itemId} book={bookData} />;
      })}
      <hr className="horizontal-line" />
      <AddBook />
    </div>
  );
}
