import React from 'react'
import BgImage from "../assets/bg-image.png"
export default function Home() {
  return (
    <div>
      <h1 className='text-[30px] font-bold capitalize'>home</h1>
      <img src={BgImage} alt="bg image" />
    </div>
  )
}
