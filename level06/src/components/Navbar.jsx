import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const navList = [
    {
      path: "/",
      name: "home"
    },
    {
      path: "/books",
      name: "bookLayout"
    },
    {
      path: "/books/1",
      name: "book 1"
    },
    {
      path: "/books/2",
      name: "book 2"
    },
    {
      path: "/books/new",
      name: "book new"
    },
  ]
  return (
    <>
      <ul>
        {navList.map((item, index) => (
          <li key={`_nav__links_${index}`}><Link to={item.path}>{item.name}</Link></li>
        ))}
      </ul>
      <br />
    </>
  )
}
