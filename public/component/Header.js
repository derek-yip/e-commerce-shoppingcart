import React from 'react'
import ShoppingCart from './ShoppingCart/ShoppingCart'
import HeaderStyle from '../../styles/scss/Header.module.scss'
import Link from 'next/link'

function Header() {
  return (
    <header className={`header row h-20 d-flex align-items-center justify-content-end ${HeaderStyle.header}`}>
        <ul className='col-lg-8 col-md-8 col-sm-12 px-10 d-flex mt-4 align-items-center justify-content-center fs-3'>
            <li className='mx-auto list-group-item'><Link href={'/'}><a>Home</a></Link></li>
            <li className='mx-auto list-group-item'><Link href={'/product'}><a>Prouct</a></Link></li>
            <li className='mx-auto list-group-item'><Link href={'/aboutus'}><a>About Us</a></Link></li>
            <Link href={'/shoppingCart'}><a className={HeaderStyle.ShoppingIcon}><ShoppingCart/></a></Link>
        </ul>
    </header>
  )
}

export default Header