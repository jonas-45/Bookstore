import React from 'react';

export default function Form() {
  return (
    <div className="new-book">
      <h3>ADD NEW BOOK</h3>
      <form className="form">
        <input type="text" placeholder="Book title" className="book-field title-field" />
        <input type="text" className="book-field category-field" />
        <button type="submit" className="book-field submit-btn">Add book</button>
      </form>
    </div>
  );
}
