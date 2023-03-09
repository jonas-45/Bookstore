import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBook = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const booksArr = useSelector((state) => state.books.books);

  const newBook = {
    id: `item${booksArr.length + 1}`,
    title,
    author,
  };

  const submitBook = () => {
    if (title && author) {
      dispatch(addBook(newBook));
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
