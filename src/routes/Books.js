import React from 'react'
import Book from '../components/Book'

export default function Books() {
  const booksArr = [
    {
      title: 'The Hunger Games',
      suthor: 'Suzanne Collins'
    },
    {
      title: 'Dunes',
      suthor: 'Frank Herbert'
    },
    {
      title: 'Capital in The Twenty First Centurey',
      suthor: 'Suzanne Collins'
    }
  ]
  return (
    <div>
      <Book />
    </div>
  )
}
