import React from 'react';


const Enrol = (props) => {
    console.log(props);
    return (
        <div>
           
            
            <div className="card mb-3" style={{width: '100%'}}>
                <div className="row no-gutters">
                    <div className="col-md-4">
                    <img src={props.enrol.img} className="card-img" alt="..."/>
                </div>
                    <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title"> {props.enrol.name}</h3>
                        <p className="card-text">{props.enrol.description} </p>
                        <p className="card-text"><small className="text-muted" className= "font-weight-bold">Price: ${props.enrol.price} </small></p>
                        <button type="button" class="btn btn-success">Buy Now</button>
                    </div>
                    </div>
            </div>
                </div>
        </div>
    );
};

export default Enrol;