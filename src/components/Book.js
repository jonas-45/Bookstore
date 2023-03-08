import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { title, author, category } = book;
  return (
    <div className="book">
      <span className="category">{category}</span>
      <h2>{title}</h2>
      <span className="author">{author}</span>
      <br />
      <span className="remove">Remove </span>
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
