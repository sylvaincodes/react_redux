import React, { useEffect ,useState} from 'react'
import { IoIosSearch, IoIosCart, IoIosHeart } from "react-icons/io";
import {
  Link
} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { setProduct } from '../../redux/productRedux'


function ProductItem(props) {

 /* useEffect(() => {
  
  setProduct(props.product);

  }, []);*/

/*  const [product, setProduct] = useState({});
*/
  const dispatch = useDispatch();

  const handleClickProduct = () =>{
    dispatch(
      setProduct(props.product)
    );
  }

  return (
    <>
      <div onClick={handleClickProduct} class="showcase">
        <Link to={`/product/${props.product.slug}`}>
          <div  class="showcase-banner">
            <img src={props.product.img[0]} alt={props.product.title} class="product-img default"
              width="300" />
            <img src={props.product.img[1]} alt={props.product.title} class="product-img hover"
              width="300" />

            <div class="showcase-actions">
              <button class="btn-action">
                <IoIosCart className='search-icon' />
              </button>

              <button class="btn-action">
                <IoIosSearch className='search-icon' />
              </button>

              <button class="btn-action">
                <IoIosHeart className='search-icon' />
              </button>

            </div>
          </div>
        </Link>
      </div>


    </>
  )
}

export default ProductItem