import React, { useEffect } from 'react'
import "../assets/css/style.css";
import HeaderTop from '../components/HeaderTop';
import HeaderMain from '../components/HeaderMain';
import HeaderFixed from '../components/HeaderFixed';
import Banner from '../components/Banner';

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', scroll);

        window.addEventListener('scroll', scrollFixed);


        return () => {

        }
    }, []);

    const scroll = () => {
        var reveals = document.querySelectorAll('.product-item');

        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 180;

            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            } else {
                reveals[i].classList.remove("active");
            }
        }
    }

    const scrollFixed = () => {

        // Menu sticky

        const menu_desktop = document.querySelector("[data-desktop-menu-top-fixed]");
        
            if (window.scrollY > 250) {
                menu_desktop.classList.add('active');
            } else {
                menu_desktop.classList.remove('active');
            }
       
    }


    return (
        <>
            <div className='page'>
                <header>
                    <div className='container'>
                        <HeaderTop />
                        <HeaderMain />
                        <HeaderFixed />
                    </div>
                </header>

                <main>
                    <div className='container'>
                        <Banner />
                    </div>

                    <div className='container'>
                        <ul className='product-category'>
                            <li className='product-item'>
                                <img src="./images/category/1.jpg" alt="" />
                                <div className='content'>
                                    <h2>loisirs</h2>
                                </div>
                            </li> <li className='product-item'>
                                <img src="./images/category/2.jpg" alt="" />
                                <div className='content'>
                                    <h2>voyages</h2>
                                </div>
                            </li> <li className='product-item'>
                                <img src="./images/category/3.jpg" alt="" />
                                <div className='content'>
                                    <h2>detentes</h2>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className='container'>
                        <div className='newsletter'>
                            <input type="text" name="newsletter" placeholder="Entrer votre email" />
                            <button className='newsletter-btn' type="submit">Envoyer</button>
                        </div>
                    </div>

                </main>


                <footer>
                    <div className="container">

                        <p>copyrights 2022</p>
                        <h3>luna</h3>
                        <img src="./images/pay.png" alt="" />

                    </div>

                </footer>




            </div >

        </>
    )
}
