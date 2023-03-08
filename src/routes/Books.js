import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import AddBook from '../components/AddBook';

export default function Books() {
  const { books } = useSelector((state) => state.books);

  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <hr className="horizontal-line" />
      <AddBook />
    </div>
  );
}
