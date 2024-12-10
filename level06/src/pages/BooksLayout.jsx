import React from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import Books from './Books'

export default function BooksLayout() {
  return (
    <div>
      <h1 className='text-[30px] font-bold capitalize'>BooksLayout</h1>
      <br />
      samudmod
      <Outlet />
    </div>
  )
}
