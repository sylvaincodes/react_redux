import React from 'react'
import { IoIosSearch, IoIosCart } from "react-icons/io";
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'

export default function HeaderMain() {

    // useSeletor sert a lire les datas depuis le state global
    const quantity = useSelector(state => state.cart.quantity)
    const cart = useSelector(state => state.cart)
    console.log(cart)
    return (
        <>
            <section className="header-main">

                <div className='container'>
                    <div className='header-main-left'>
                        <div className='search-container'>
                            <div>FR</div>
                            <div className='search-input'>
                                <input type="text" name="search" placeholder="Recherche" className='search-field' />
                                <IoIosSearch className='search-icon' />
                            </div>
                        </div>
                    </div>
                    <h1>
                        <Link className='header-logo' to="/">luna</Link>  
                    </h1>
                    <ul className='header-main-actions'>
                        <li>
                            <a href="#">SE CONNECTER</a>
                        </li>
                        <li>
                            <a href="#">SINSCRIRE</a>
                        </li>
                    <Link to={"/cart"}>

                        <li>
                            <IoIosCart className='cart-icon' />
                            <span className='count-product'>{quantity}</span>
                        </li>
                    </Link>

                    </ul>

                </div>


            </section>
        </>

    )
}
