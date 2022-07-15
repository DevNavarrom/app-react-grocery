import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser, faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../../assets/logo.svg'
import '../../sass/_components.scss'


export const NavBar = () => {

    const dispatch = useDispatch()
    const { products = [] } = useSelector(state => state.cart)

    return (
        <header className="header-navbar">
            <div id="iconNavbar">
                <img src={logo} height="40" alt="logo" />
                <p style={{ color: '#40AA54' }}>e</p>Grocery
            </div>
            <div id="menuNavbar">
                <Link
                    to='/products'
                    className='link-other'>
                    Products
                </Link>
                <Link
                    to='/cart'
                    className='link-btn-cart relative'>
                    <FontAwesomeIcon id='faIconCart' icon={faCartShopping} color='#40AA54' />
                    {products.length > 0 && <div className="badge-count absolute">{products.length}</div>}
                </Link>
                <div id="iconUser">
                    <FontAwesomeIcon icon={faCircleUser} size="lg" />
                </div>
            </div>
        </header>
    )
}
