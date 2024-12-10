import React from 'react'
import BgImage from "../assets/bg-image-books.png"
import { Outlet, useParams } from 'react-router-dom'
export default function Books() {
  const { id } = useParams()
  return (
    <div>
      <h1 className='text-[30px] font-bold capitalize'>books{id}</h1>
      <img src={BgImage} alt="bg image" className='w-[400px]'/>
    </div>
  )
}
