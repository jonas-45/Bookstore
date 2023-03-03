import React from 'react';
import Book from '../components/Book';
import { v4 as uuidv4 } from 'uuid';

export default function Books() {
  const booksArr = [
    {
      id: uuidv4(),
      title: 'The Hunger Games',
      author: 'Suzanne Collins'
    },
    {
      id: uuidv4(),
      title: 'Dunes',
      author: 'Frank Herbert'
    },
    {
      id: uuidv4(),
      title: 'Capital in The Twenty First Centurey',
      author: 'Suzanne Collins'
    }
  ]
  return (
    <div>
      {booksArr.map((book) => (
        <Book key={book.id} book={book}/>
      ))}
    </div>
  )
}
