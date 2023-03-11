import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import Status from './Status';
import Progress from './Progress';

export default function Book({ book }) {
  const dispatch = useDispatch();
  const {
    id, title, author, category,
  } = book;

  return (
    <div className="book">
      <div className="book-details">
        <span className="category">{category}</span>
        <h2>{title}</h2>
        <span className="author">{author}</span>
        <br />
        <div className="book-actions-container">
          <button type="button" className="book-actions">Comments</button>
          <p className="action-separator">|</p>
          <button type="button" className="book-actions" onClick={() => dispatch(removeBook(id))}>Remove</button>
          <p className="action-separator">|</p>
          <button type="button" className="book-actions">Edit</button>
        </div>
      </div>

      <div className="status-and-progress">
        <Status />
        <div>|</div>
        <Progress />
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
