import React from 'react'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import HeaderStyle from '../../styles/scss/Header.module.scss'
import Link from 'next/link'

function Header() {
  return (
    <header className={`header row h-20 d-flex align-items-center justify-content-end ${HeaderStyle.header}`}>
        <ul className='col-lg-6 col-md-8 col-sm-12 px-10 d-flex mt-4 align-items-center justify-content-center fs-3'>
            <li className='mx-auto list-group-item'><Link href={'/'}>Home</Link></li>
            <li className='mx-auto list-group-item'><Link href={'/product'}>Product</Link></li>
            <div className={`${HeaderStyle.ShoppingIcon}`}>              
              <ShoppingCart/>
            </div>
        </ul>
    </header>
  )
}

export default Header