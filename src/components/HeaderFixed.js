import React from 'react'
import { IoIosSearch, IoIosCart } from "react-icons/io";

export default function HeaderFixed() {
    return (
        <>
                <section className="header-main fixed" data-desktop-menu-top-fixed>
                    <div className='header-main-left'>
                        <div className='search-container'>
                            <div>FR</div>
                            <div className='search-input'>
                                <input type="text" name="search" placeholder="Recherche" className='search-field' />
                                <IoIosSearch className='search-icon' />
                            </div>
                        </div>
                    </div>
                    <h1 className='header-logo'>luna</h1>
                    <ul className='header-main-actions'>
                        <li>
                            <a href="#">SE CONNECTER</a>
                        </li>
                        <li>
                            <a href="#">SINSCRIRE</a>
                        </li>
                        <li>
                            <IoIosCart className='search-icon' />
                        </li>
                    </ul>

                </section>
        </>

    )
}
