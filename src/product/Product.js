import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css';


const Product = (props) => {
  console.log(props);
  const {img,name,seller,price,stock} = props.product
    return (
        <div className="product-details">
          <div className="product-pic">
            <img src={img} alt=""/>
          </div> 
          <div className="product-name">
            <h3 className="product-heading">{name}</h3>
            <h5>By <small>{seller}</small></h5>
            <p>Price  ${price} only</p>
            <br/>
            <p>only {stock} left in stock buy soon</p>
            <br/>
            <button onClick={()=> props.handleProductAdd(props.product)}
            class="add-cart-btn"><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
          </div>
        </div>
    );
};

export default Product;