import React from 'react';
import courses from "../Courses/Courses"

const product = (props) => {
    // console.log(props);
    const {img, name, description, price} = props.product;
    return (
        <div>
           
            
            <div className="card mb-3" style={{width: '100%'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={img} className="card-img" alt="..."/>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title"> {name}</h3>
                        <p className="card-text">{description} </p>
                        <p className="card-text"><small className="text-muted" className= "font-weight-bold">Price: ${price} </small></p>
                        <button type="button" onClick={() => props.handleAddProduct(props.product)} class="btn btn-success">Add to Cart</button>
                    </div>
                    </div>
            </div>
                </div>
        </div>
    );
};

export default product;