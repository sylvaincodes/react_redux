import React, { useEffect, useState } from 'react'
import { products } from '../../data/dataArray'
import ProductItem from './ProductItem';
import { useLocation } from 'react-router-dom'

function ProductList() {
    
    //FIlters 
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("asc");
    const [product, setProduct] = useState([]);

    //Get the path route params
    const location = useLocation();
    const cat = location.pathname.split('/')[2];


    //Handle filters
    const handleFilters  = (e) => {

        const value = e.target.value;

        setFilters({ ...filters,
            [e.target.name]: value
        });
    }
    
console.log(product);

    return (
        <>
            <section className='products'>
                <h3>Tous les articles</h3>
                <div className='container'>
                    <div className='product-sort-list'>
                        <div className='sort-left'>
                            <h4>filtres par </h4>
                            <select name="color" onChange={handleFilters}> Couleur
                                <option value="blanc">Blanc</option>
                                <option value="noir">Noir</option>
                                <option value="rouge">Rouge</option>
                                <option value="bleu">Bleue</option>
                                <option value="jaune">Jaune</option>
                                <option value="vert">Vert</option>
                            </select>
                            <select name="size" onChange={handleFilters}> Taille
                                <option value="XS">XS</option>
                                <option value="S">S</option>
                                <option value="N">N</option>
                                <option value="L">L</option>
                                <option value="XL">XL</option>
                            </select>
                        </div>
                        <div className='sort-right'>
                            <h4>filtrer par date</h4>
                            <select onChange={ (e) => setSort(e.target.value)}>
                                <option value="asc">Nouveaux</option>
                                <option value="desc">anciens</option>
                            </select>
                        </div>
                    </div>
                    <div className="product-grid">
                        {products.map((product) => (
                            <ProductItem  product={product} key={product.id} />
                        ))}
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProductList