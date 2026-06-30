import React from 'react'
import {Link, Outlet} from 'react-router-dom'
const Product = () => {
  return (
    <div>
      <h1>product page</h1>
      <div className='gap-30 h-50 w-full'>
        <Link to='Men'>Man</Link>
        <Link to='Women'>Women</Link>
      </div>
      <Outlet/>
    </div>
  )
}

export default Product
