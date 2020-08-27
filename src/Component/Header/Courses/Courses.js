import React from 'react';
import Fakedata from '../../../Fakedata/data'
import {useState} from 'react';
import './Courses.css';
import Enrol from '../Enrol/Enrol';


const Courses = () => {
    
    const data = Fakedata;
    const [enrol, setEnrol] = useState(data);
    console.log(data);

    return (
        <div className= "allcourses-container">
            <div className="course-container">
                {
                    enrol.map(enr => <Enrol enrol={enr}></Enrol>)
            
                }
            </div> 

            <div className="cart-container">
                <h3>This is cart</h3>
            </div>
        
        </div>
    );
};

export default Courses;