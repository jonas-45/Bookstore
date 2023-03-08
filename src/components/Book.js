import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

export default function Book({ book }) {
  const { itemId, title, author } = book;
  const dispatch = useDispatch();

  return (
    <div className="book">
      <span className="category">To be added later</span>
      <h2>{title}</h2>
      <span className="author">{author}</span>
      <br />
      <div className="book-actions-container">
        <button type="button" className="book-actions">Comments</button>
        <p className="action-separator">|</p>
        <button type="button" className="book-actions" onClick={() => dispatch(removeBook(itemId))}>Remove</button>
        <p className="action-separator">|</p>
        <button type="button" className="book-actions">Edit</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    itemId: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
