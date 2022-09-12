import React from 'react'

import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Newsletter from '../components/Main/Newsletter'
import ProductList from '../components/Main/ProductList'

function Product() {

    return (

        
        <>
            <div className='page'>
                <Header />
                <main>
                    
                    <ProductList/>
                    <Newsletter />
                    
                </main>
                <Footer />
            </div>

        </>
    )
}

export default Product