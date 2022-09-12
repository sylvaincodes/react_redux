import React from 'react'
import Footer from '../components/Footer/Footer'
import Header from '../components/Header/Header'
import Newsletter from '../components/Main/Newsletter'
import ProductDetailItem from '../components/Main/ProductDetailItem'
import Breadcrumbs from '../components/Main/Breadcrumbs';


function ProductDetail() {
    return (
        <>
            <div className='page'>
                <Header />
                <main>
                    <Breadcrumbs/>
                    <ProductDetailItem/>
                    <Newsletter />
                    
                </main>
                <Footer />
            </div>

        </>
    )
}

export default ProductDetail