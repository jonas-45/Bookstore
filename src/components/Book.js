import React from 'react'

export default function Book({book}) {
  console.log('book object', book);
  const {title, author} = book;
  return (
    <div className='book'>
      <h2>{title}</h2>
      <label className='author'>{author}</label><br/><br/>
      <label className='remove'>Remove </label>
    </div>
  )
}
