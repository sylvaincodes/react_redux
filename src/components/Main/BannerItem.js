import React from 'react'
import {Link} from 'react-router-dom'

export default function BannerItem() {
    return (
        <>
            <section className='slider-item'>
                <img src="/images/banners/1.jpg" alt="" />
                <div className="content">
                    <h2 className="content-title">
                        <span className='letter'>c</span>
                        <span className='letter'>r</span>
                        <span className='letter'>e</span>
                        <span className='letter'>a</span>
                        <span className='letter'>t</span>
                        <span className='letter'>i</span>
                        <span className='letter'>v</span>
                        <span className='letter'>e </span>
                    </h2>
                    <p className='content-p'> style and fashion</p>
                    <span> Faites la différence avec les lunettes modernes.</span>
                    <button className='button-86'>
                        <Link className='link' to="/products">shop now</Link>
                    </button>
                </div>
            </section>
        </>
    )
}
