import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { title, author } = book;
  return (
    <div className="book">
      <span className="category">To be added later</span>
      <h2>{title}</h2>
      <span className="author">{author}</span>
      <br />
      <div className="book-actions-container">
        <p className="book-actions">Comments</p>
        <p className="action-separator">|</p>
        <p className="book-actions">Remove </p>
        <p className="action-separator">|</p>
        <p className="book-actions">Edit</p>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    author: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};
