import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Newsletter from '../components/Main/Newsletter'
import ProductCart from '../components/Main/ProductCart'
import Breadcrumbs from '../components/Main/Breadcrumbs';
import StripeCheckout from 'react-stripe-checkout';

function Cart() {

const KEY = process.env.STRIPE_PUBLIC_KEY;

    return (

        <>
            <div className='page'>
                <Header />
                <main>
                
                    <Breadcrumbs/>
                    <ProductCart/>
                    <Newsletter />
                    
                </main>
                <Footer />
            </div>

        </>
    )
}

export default Cart