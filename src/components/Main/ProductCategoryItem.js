import React from 'react'
import {
  Link
} from "react-router-dom";

function ProductCategoryItem(props) {
    return (
        <>
              <Link to={`/products/${props.category.title}`}>

                <li className='product-item' >
                        <img src={props.category.img} alt="{props.category.title}" />
                        <div className='content'>
                            <h2>{props.category.title}</h2>
                        </div>
                </li>

            </Link>
        </>
    )
}

export default ProductCategoryItem;