import React from 'react';
import './Subscribe.css';

const Subscribe = () => {
    return (
        <div className='bg-success'>
            <div className='container'>
                <div className='py-5 row justify-content-center'>
                    <div className="col-lg-6 col-md-8 col-12">
                        <h1 className='fw-bolder mb-3 text-white text-center'>Subscribe To Get The Latest News About Us</h1>
                        <p className='text-center mb-5 text-white'>We Recommended you to subscribe to our newspaperm, enter your email below to get daily update about us.</p>
                        <div className=' position-relative'>
                            <input className='w-100 py-4 px-3 rounded-3 border-0' type="search" name="search" placeholder='Enter your email address' />
                            <button className='subscribe-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;