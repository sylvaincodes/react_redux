import React, { useEffect, useState, StyleSheet } from 'react';
import { useLocation } from 'react-router-dom';
/*import { product } from '../../data/dataArray';
*/import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'


function ProductDetailItem() {


  const location = useLocation();  //Get the path route params
  const slug = location.pathname.split('/')[2];
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");
  const dispatch = useDispatch();

  const product = useSelector(state => state.product.product)


  const handleQuantity = (type) => {
    if (type == 'dec') {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  }

  const handleClick = () => {
    dispatch(
      addProduct({ ...product,quantity,color ,size })
    );
  };


  return (
    <>

      <div className='product-detail' style={{ backgroundColor : color }}>
        <div className='img' >
          <img src={product.img[0]} alt={product.title} class="product-img default"
            width="300" />
          <img src={product.img[1]} alt={product.title} class="product-img hover"
            width="300" />
        </div>
        <div className='content'>
          <h1>{product.title}</h1>
          <p>{product.desc}</p>

          <span className='price'>$ {product.price}</span>

          <div className='filters'>

            <div className='input-group'>
              <label >Color</label>

              {product.colors.map((c) => (
              
              <div onClick={()=> setColor(c)}  className='color-container' style={{ backgroundColor : c }}>
                
              </div>

              ))}

            
            </div>

            <div className='input-group'>
              <label> Taille </label>
              <select onChange={(e)=> setSize(e.target.value)} name="size">
                {product.sizes.map((s) => (
                <option value={s}>{s}</option>
                   ))}
              </select>
            </div>

          </div>

          <div className='btn-actions'>

            <div className='quantity'>
              <IoIosRemove onClick={() => handleQuantity('dec')} className='btn-icon' />
              <input type="text" name="quantity" value={quantity} />
              <IoIosAdd onClick={() => handleQuantity('inc')} className='btn-icon' />
            </div>

            <button onClick={handleClick}>
              ajouter
            </button>

          </div>
        </div>
      </div>
    </>
  )
}

export default ProductDetailItem