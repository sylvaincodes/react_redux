import React from 'react'
import ProductCategoryItem from './ProductCategoryItem'
import { categories } from '../../data/dataArray'

export default function ProductCategory() {
    return (
        <div className='product-category'>
            <ul className='container'>

                {categories.map((category) => (
                    <ProductCategoryItem category={category} key={category.id}/>
                ))}
                
            </ul>
        </div>
    )
}
