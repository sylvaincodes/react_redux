import React ,{useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import StripeCheckout from 'react-stripe-checkout';


function ProductCart() {


    const cart = useSelector(state => state.cart);
    const total = cart.total;
    const products = cart.products;

    const shipping = total>49 ? 0 : (total/100);
/*    const KEY = process.env.STRIPE_PUBLIC_KEY;
*/    const KEY = "pk_test_51LhDZ3JpOn8aP1UipYxoElo4S3s8NydKZ7bR3mvneuXnMFKfgjOFVoKWhmCittMXInC8QggFtVDAIdd5D5uIjxWe00gjFhf6PZ";

    const [stripeToken, setStripeToken] = useState(null);


    const onToken = (token) =>{
        setStripeToken(token);
    }

    console.log(stripeToken);

    return (
        <div className='cart'>
            <div className='container'>
               <div className="cart-list">

                     {products.map((product) => (
               
                    <div className="cart-item">
                         <img width = '200px' height = '200px' src={product.img[0]} alt="{product.title}" />
                         <div className="content-details">
                              <p> <span>Produit : </span>{product.title}</p>
                              <p> <span> ID N°: </span> {product.id}</p>
                              <div className="color-container" style={{ backgroundColor: product.color? product.color : product.colors[0] }}>

                              </div>
                              <p><span>Taille : {product.size ? product.size  : product.sizes[0]} </span></p>
                         </div>  

                         <div className="content-price">
                            <p><span>qté :  </span>{product.quantity}</p>
                            <p><span>prix :  </span> {product.price}</p>
                            <p><span>total :  </span> {product.price* product.quantity}</p>
                         </div> 
                    </div>
                     ))}
            
               </div>

               <div className="order-summary">

                        <h3>BILAN COMMANDE</h3>
                        <ul>
                            <li><span>Sous Total </span> <small> {total}</small></li>
                            <li><span>Frais livraison </span>  <small>{shipping} </small> </li>
                            <li><span>Total </span>  <small> {total+shipping} </small> </li>
                            <li >
                            <StripeCheckout
                              name="Sylaincodes"
                              image="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Emblem.png"
                              billingAddress
                              shippingAddress
                              description={`Your total is $${total+shipping}`}
                              amount={(total+shipping) * 100}
                              token={onToken}
                              stripeKey={KEY}
                            >
                              <button className="btn-shop">PAYER</button>
                            </StripeCheckout>

                            </li>
                        </ul>
                </div>


               <div>
                    
               </div>
            </div>
        </div>
    )
}

export default ProductCart