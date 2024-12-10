import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import NotFound from './pages/NotFound'
import Books from './pages/Books'
import NewBook from './pages/NewBook'
import BooksLayout from './pages/BooksLayout'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books' element={<BooksLayout />}>
          <Route path='' element={<Books />} />
          <Route path=':id' element={<Books />} />
          <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}
