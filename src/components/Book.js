import React from 'react'

export default function Book({booksArr}) {
  const [title, author] = booksArr;
  return (
    <div>
      <h2>{title}</h2>
      <label>{author}</label>
      <button type='button'>Remove </button>
    </div>
  )
}
