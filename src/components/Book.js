import React from 'react';
import PropTypes from 'prop-types';

export default function Book({ book }) {
  const { title, author } = book;
  return (
    <div className="book">
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
  }).isRequired,
};
