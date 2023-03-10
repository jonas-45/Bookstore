import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { postBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const category = ['Fiction', 'Action', 'Comedy', 'Adventure', 'Crime', 'Classics', 'Fairy Tale', 'Horror', 'Fantasy'];
  const randomNumber = Math.floor(Math.random() * 9);

  const newBook = {
    item_id: uuidv4(),
    title,
    author,
    category: category[randomNumber],
  };

  const submitBook = () => {
    if (title && author) {
      dispatch(postBook(newBook));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="new-book">
      <h3>ADD NEW BOOK</h3>
      <form className="form">
        <input type="text" value={title} placeholder="Book title" className="book-field title-field" onChange={(e) => setTitle(e.target.value)} />
        <input type="text" value={author} placeholder="Book author" className="book-field category-field" onChange={(e) => setAuthor(e.target.value)} />
        <button type="button" className="book-field submit-btn" onClick={() => submitBook()}>Add book</button>
      </form>
    </div>
  );
};

export default AddBook;
