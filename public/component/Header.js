import React from 'react'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import HeaderStyle from '../../styles/scss/Header.module.scss'

function Header() {
  return (
    <header className={`header w-100 h-20 d-flex align-items-center justify-content-end ${HeaderStyle.header}`}>
        <ul className='w-75 px-10 d-flex mt-4 align-items-center justify-content-center fs-3'>
            <li className='mx-auto list-group-item'><a>Home</a></li>
            <li className='mx-auto list-group-item'><a>Products</a></li>
            <li className='mx-auto list-group-item'><a>About Us</a></li>
            <a className={HeaderStyle.ShoppingIcon}><ShoppingCart/></a>
        </ul>
    </header>
  )
}

export default Header