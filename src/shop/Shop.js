import React, { useState } from 'react';
import fakeData from '../fakeData';
import './Shop.css';
import Product from '../product/Product';
import Cart from '../header/cart/Cart';

const Shop = () => {
    const firstProducts = fakeData.slice(0, 10)
    const [products, setProducts] = useState(firstProducts)
    const [cart, setCart] = useState([])
    
    const handleProductAdd=(product) =>{
        console.log('clicked', product);
       const newCount =[...cart ,product]
       setCart(newCount)
    }
    return (
        <div className="container">
            <div className="product-container">

                {
                    products.map(pd => <Product 
                        handleProductAdd = {handleProductAdd} 
                        product={pd} >

                        </Product>)
                }

            </div>
            <div className="product-cart">
            
               <Cart cart={cart}></Cart>
            </div>
                
        </div>
    );
};

export default Shop;