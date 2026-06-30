import React from 'react'
import {Link} from 'react-router-dom'
const navbar = () => {
  return (
    <div className='flex p-8 justify-between bg-blue-200'>
        <h3 className='text-3xl font-bold'>hola</h3>
        <div className='flex gap-10'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/product'>Product</Link>
            <Link to='/contact'>Contact</Link>
        </div>
   
    </div>
  )
}

export default navbar
