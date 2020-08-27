import React from 'react';
import Course from '../Courses/Courses'


const Cart = (props) => {
    const cart = props.cart;
    let total = cart.reduce((total, prd) => total + prd.price,0)
    return (
        <div>
            <h1>Your order list</h1>
    <p>Item ordered:{cart.length}</p>
    <p>Total price:{total.toFixed(2)} </p>
        </div>
    );
};

export default Cart;