import React from 'react';
import Fakedata from '../../../Fakedata/data'
import {useState} from 'react';
import './Courses.css';
import Product from '../Enrol/Product';
import Cart from '../Cart/Cart';



const Courses = () => {
    
    const data = Fakedata;
    const [product, setproduct] = useState(data);
    const [cart, setCart] = useState([]);

    const handleAddProduct = (product) => {
        // console.log('object',product);
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className= "allcourses-container">
            <div className="course-container">
                {
                   product.map(product => <Product
                    handleAddProduct = {handleAddProduct}
                    product={product}></Product>)
                }
            </div> 
            <Cart cart={cart}></Cart>
        
    </div>
    );
};

export default Courses;