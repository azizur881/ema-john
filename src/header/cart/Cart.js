import React from 'react';
import Product from '../../product/Product';

const Cart = (props) => {
  const length = props.cart.length
  const cart = props.cart
    let total = (0)
    for(var i =0 ; i < cart.length;i++){
     const   product = cart[i]
     total = total + product.price
    }
    let shipping = 0;
    if (total===0){
        shipping = 0
    }
   else if(total > 40.99){
        shipping = 0;
    }
    else if(total < 40.99){
        shipping = 12.99
    }
    let tax = total/20
  
    return (
        <div>
            <h2>Order Summery</h2>
            <h5>Items Added :  {length}</h5>
            <h4>Total Price :  $ {(total).toFixed(2)}</h4>
            <p>shipping cost : $ {shipping}</p>
            <p>tax + vat :$ {tax.toFixed(2)}</p>
            <h4>total Amount : $ {(total + shipping+tax).toFixed(2)}</h4>
        </div>
    );
};

export default Cart;