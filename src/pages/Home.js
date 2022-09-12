import React, { useEffect } from 'react'
import Banner from '../components/Main/Banner';
import Footer from '../components/Footer/Footer';
import ProductCategory from '../components/Main/ProductCategory';
import Header from '../components/Header/Header';
import Newsletter from '../components/Main/Newsletter';

export default function Home() {

    useEffect(() => {
        window.addEventListener('scroll', scroll);
        window.addEventListener('scroll', scrollFixed);
    }, []);

    // Animation for product category
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

    // Animation for Menu top sticky
    const scrollFixed = () => {
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
                <Header/>
                <main>
                    <Banner/>
                    <ProductCategory/>
                    <Newsletter/>
                </main>
                <Footer/>
            </div>

        </>
    )
}
