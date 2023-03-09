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
  }, [dispatch]);

  return (
    <div>
      {books.map((book) => {
        // const itemId = book[0];
        // const data = book[1][0];
        // const bookData = { ...data, itemId };
        console.log('BOOK BOOK BOOK: ', book);
        return <Book key={book.itemId} book={book} />;
      })}
      <hr className="horizontal-line" />
      <AddBook />
    </div>
  );
}
