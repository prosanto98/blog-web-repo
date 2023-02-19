import React from 'react';
import './Selected.css';
import { AiOutlineSearch, AiOutlineCheck } from "react-icons/ai";
import { Accordion } from 'react-bootstrap';


const Selected = () => {
    return (
        <div className='container py-5'>
            <div className='row justify-content-center'>
                <div className="col-12 col-lg-11">
                    <div className="row align-items-center">
                        <div className='col-12 col-md-6 text-center text-md-start'>
                            <h1>We have more than 1000 selected Destination</h1>
                            <p>
                                You can choose one of many option that we have on our website. Every destination have been 4+ star rated by our user before. You can search by clicking our button on below of the this text man.
                            </p>
                            <a className='selected-btn mt-4 mt-md-5' href="/">
                                Search Destination
                            </a>
                        </div>
                        <div className='col-12 col-md-6 mt-4 mt-md-0'>
                            <img className='w-100' src="img/selected-1.png" alt="selected" />
                            <div className='row mt-4 justify-content-center justify-content-md-start'>
                                <div className='col-12 col-md-10'>
                                    <div className='position-relative'>
                                        <input className='search-input w-100 py-2 px-5 border-0' type="search" name="search" placeholder='Recommended Destination' />
                                        <AiOutlineSearch className='icon-search'></AiOutlineSearch>
                                    </div>
                                </div>
                                <div className='col-12 col-md-10'>
                                    <div className=' mt-2 text py-2 '>
                                        <p className='m-0 d-flex justify-content-between px-5'>
                                            <span>Venice, Italy</span>
                                            <AiOutlineCheck className='text-success' />
                                        </p>
                                    </div>
                                    <div className=' mt-2 text py-2'>
                                        <p className='m-0 d-flex justify-content-between px-5'>
                                            <span>Berlin, Germany</span>
                                            <AiOutlineCheck className='text-success' />
                                        </p>
                                    </div>
                                    <div className=' mt-2 text py-2 '>
                                        <p className='m-0 d-flex justify-content-between px-5'>
                                            <span>Andalucia, Spain</span>
                                            <AiOutlineCheck className='text-success' />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row my-5 justify-content-center'>
                <div className='col-12 col-lg-11'>
                    <div className='row align-items-center'>
                        <div className='col-12 col-md-6'>
                            <img className='w-100' src="img/Selected-2.png" alt="Selected" />
                        </div>
                        <div className='col-12 col-md-6 mt-5 mt-md-0'>
                            <div className='row justify-content-center justify-content-md-end'>
                                <div className='col-12 col-md-11'>
                                    <div className='text-center text-md-start'>
                                        <h1 className='mb-3'>Always give you promo
                                            on every Month / Event
                                        </h1>
                                        <p>
                                            We make sure give you a lot of promo every motnh or event based on calendar. If you want, just Subscribe on Newsletter.
                                        </p>
                                    </div>
                                    <div className=' mt-5 row row-cols-2'>
                                        <p className='d-flex align-items-center'>
                                            <AiOutlineCheck className=' text-success fs-4 me-3' />
                                            <span>25% for New Members</span>
                                        </p>
                                        <p className='d-flex align-items-center'>
                                            <AiOutlineCheck className=' text-success fs-4 me-3' />
                                            <span>Cancelled refund 100%</span>
                                        </p>
                                        <p className='d-flex align-items-center'>
                                            <AiOutlineCheck className=' text-success fs-4 me-3' />
                                            <span>Up 50% on your birthday</span>
                                        </p>
                                        <p className='d-flex align-items-center'>
                                            <AiOutlineCheck className=' text-success fs-4 me-3' />
                                            <span>Reward for 1000% Points</span>
                                        </p>
                                        <p className='d-flex align-items-center'>
                                            <AiOutlineCheck className=' text-success fs-4 me-3' />
                                            <span>Cashback 10% via OVO</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row py-5 align-items-center'>
                <div className="col-12 col-md-6">
                    <div className="row justify-content-center justify-content-lg-start">
                        <div className="col-md-10 col-12">
                            <div className='text-center text-md-start'>
                                <h1 className='mb-3'>100% Money back Guarantee If you Cancel</h1>
                                <p className='mb-5'>We Promises in this case. We still want to refund your money when you cancel order.
                                </p>
                            </div>
                            <div>
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Friendly, Quick, Easy</Accordion.Header>
                                        <Accordion.Body>
                                            Business messaging that feels just like the messenger apps you and your customers
                                            use every day.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Fast Response Answer</Accordion.Header>
                                        <Accordion.Body>
                                            Business messaging that feels just like the messenger apps you and your customers
                                            use every day.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Money Back Guarantee</Accordion.Header>
                                        <Accordion.Body>
                                            Business messaging that feels just like the messenger apps you and your customers
                                            use every day.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <img className='w-100 mt-5 mt-lg-0' src="img/selected-3.png" alt="selected" />
                </div>
            </div>
        </div>
    );
};

export default Selected;