import React from 'react';
import banner from '../../Image/welcome3.jpg';
import { BsFillArrowUpRightSquareFill } from 'react-icons/bs';
import { Link } from "react-router-dom";

const Welcomepage = () => {
    return (
        <div className='container'>
            <img src={banner} className='img-fluid' alt="banner" />
            <h1 className='text-center mt-3 fw-bolder' style={{ color: 'orange' }}>Welcome to Contact Fetch</h1>
            <h5 className='text-center'>To see all data please go to <Link to='/home'>Home <BsFillArrowUpRightSquareFill></BsFillArrowUpRightSquareFill></Link> </h5>
        </div>
    );
};

export default Welcomepage;