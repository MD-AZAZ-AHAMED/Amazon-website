import React from 'react'
import { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/product';
import Cart from '../Cart/cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10);
    const[cart, setCart] = useState([]);

    const handleAddProduct = (product ) => { 
        const newCart =[...cart,product];
        setCart(newCart);
        
        
    }
    return (
        <div className='shop-container'>
            <div className='product-container'> 
                    {
                        products.map(pd=> <Product
                            handleAddProduct={handleAddProduct} product ={pd}> </Product>)
                    }
            </div>
                <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;
