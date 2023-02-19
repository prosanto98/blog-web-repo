import React from 'react';
import { AiFillCalendar, AiOutlineUser } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";


import './Banner.css';

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container banner-padding'>
                <div className='row justify-content-md-start justify-content-center'>
                    <div className='col-lg-7 col-md-10 col-12'>
                        <div className='row justify-content-md-start justify-content-center'>
                            <div className='col-12 col-md-10 col-lg-9'>
                                <div>
                                    <h1 className='text-md-start text-center banner-text mb-3'>Start Exploring to Find Inner Peace
                                        by Traveling
                                    </h1>
                                    <p className='text-md-start text-center mb-4'>
                                        Lost yourself with Vacation and Travel into the place that you never visit before. We have thousand places in our database for you.
                                    </p>
                                </div>
                                <div className='d-flex justify-content-center justify-content-md-start mb-5'>
                                    <a href="/" className='banner-btn'>Discover Now</a>
                                </div>
                            </div>
                            <div className='col-11 col-md-12 py-3 px-4 bg-white shadow-lg rounded-3'>
                                <div>
                                    <div className='row'>
                                        <div class=" col-6 col-lg-3">
                                            <label for="validationCustom04" class="form-label border-0 d-flex align-items-center">
                                                <FaMapMarkerAlt className='fs-4 me-2' />
                                                <span>Location</span>
                                            </label>
                                            <select class="py-2 px-1 border-0 input-outline" id='validationCustom04' required>
                                                <option selected disabled value="">Enter your location</option>
                                                <option>Bangladesh</option>
                                                <option>India</option>
                                                <option>Pakistan</option>
                                                <option>Nepal</option>
                                                <option>Bhutan</option>
                                                <option>Japan</option>
                                                <option>South Korea</option>
                                                <option>Myanmar</option>
                                            </select>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <label for="validationCustom04" class="form-label border-0 d-flex align-items-center">
                                                <AiFillCalendar className='fs-4 me-2' />
                                                <span>Date</span>
                                            </label>
                                            <input className='input-outline py-2 border-0 rounded-3' type="date" name="date" id="" />
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <label for="validationCustom04" class="form-label border-0 d-flex align-items-center">
                                                <AiOutlineUser className='fs-4 me-2' />
                                                <span>People</span>
                                            </label>
                                            <select class="py-2 px-1 border-0 input-outline" id="validationCustom04" required>
                                                <option selected disabled value="">How many people</option>
                                                <option>1</option>
                                                <option>2</option>
                                                <option>3</option>
                                                <option>4</option>
                                                <option>5</option>
                                                <option>6</option>
                                                <option>7</option>
                                                <option>8</option>
                                                <option>9+</option>
                                            </select>
                                        </div>
                                        <div class="col-6 col-lg-3">
                                            <div className='d-flex align-content-center justify-content-end'>
                                                <div className='banner-search mt-2'>
                                                    <BsSearch className='fs-3' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;