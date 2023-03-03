import React from 'react'

export default function AddBook() {
  return (
    <div className='new-book'>
      <h3>ADD NEW BOOK</h3>
      <form className='form'>
        <input type="text" placeholder='Book title' className='book-field title-field'/>
        <select className='book-field category-field'>
          <option></option>
        </select>
        <button type='submit' className='book-field submit-btn'>Add book</button>
      </form>
    </div>
  )
}
