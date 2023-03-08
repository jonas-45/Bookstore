import React from 'react';
// import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import Book from '../components/Book';
import Form from '../components/Form';

export default function Books() {
  const { books } = useSelector((state) => state.books);
  // const booksArr = [
  //   {
  //     id: uuidv4(),
  //     title: 'The Hunger Games',
  //     author: 'Suzanne Collins',
  //   },
  //   {
  //     id: uuidv4(),
  //     title: 'Dunes',
  //     author: 'Frank Herbert',
  //   },
  //   {
  //     id: uuidv4(),
  //     title: 'Capital in The Twenty First Centurey',
  //     author: 'Suzanne Collins',
  //   },
  // ];
  return (
    <div>
      {books.map((book) => (
        <Book key={book.item_id} book={book} />
      ))}
      <hr className="horizontal-line" />
      <Form />
    </div>
  );
}
