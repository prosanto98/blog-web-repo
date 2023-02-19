import React from 'react';
import './Explore.css'
import { Card, Col, Row } from 'react-bootstrap';
import { RiMapPinLine } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";


const Explore = () => {
    return (
        <div className='container my-5'>
            <div>
                <div>
                    <h1 className='text-center mb-3'>Explore Top Destination</h1>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 col-md-10'>
                            <p className='text-center'>
                                We are self-service data analytics software that lets you create visually appealing data visualizations and insightful dashboards in minutes.
                            </p>
                        </div>
                    </div>
                </div>
                <div>
                    <div className='over-nav text-center mt-3 m-md-0'>
                        <a className=' text-white' href="/">Popular Destination</a>
                        <a className=' text-white' href="/">Destination For Art & Culture</a>
                        <a className=' text-white' href="/">Destination For Outdoor Adventer</a>
                        <a className=' text-white' href="/">Mountain</a>
                        <a className=' text-white' href="/">Beach Destination</a>
                    </div>
                </div>
            </div>
            <div className='mt-4'>
                <Row xs={1} md={2} lg={4} className="g-4">
                    <Col>
                        <Card className=' border-0 p-3 cart-body'>
                            <Card.Img variant="top" src="img/Explore-1.png" />
                            <Card.Body>
                                <Card.Text className='d-flex align-items-center'>
                                    <AiFillStar className=' text-warning fs-4 me-2'></AiFillStar>
                                    <span>5</span>
                                </Card.Text>
                                <Card.Title>Mount Agung, Bali</Card.Title>
                                <Card.Text>
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam
                                </Card.Text>
                                <Card.Text className=' d-flex align-items-center'>
                                    <RiMapPinLine className='me-3 fs-4'></RiMapPinLine>
                                    <span>Indonesia</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className=' border-0 p-3 cart-body'>
                            <Card.Img variant="top" src="img/Explore-1.png" />
                            <Card.Body>
                                <Card.Text className='d-flex align-items-center'>
                                    <AiFillStar className=' text-warning fs-4 me-2'></AiFillStar>
                                    <span>5</span>
                                </Card.Text>
                                <Card.Title>Mount Agung, Bali</Card.Title>
                                <Card.Text>
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam
                                </Card.Text>
                                <Card.Text className=' d-flex align-items-center'>
                                    <RiMapPinLine className='me-3 fs-4'></RiMapPinLine>
                                    <span>Indonesia</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className=' border-0 p-3 cart-body'>
                            <Card.Img variant="top" src="img/Explore-1.png" />
                            <Card.Body>
                                <Card.Text className='d-flex align-items-center'>
                                    <AiFillStar className=' text-warning fs-4 me-2'></AiFillStar>
                                    <span>5</span>
                                </Card.Text>
                                <Card.Title>Mount Agung, Bali</Card.Title>
                                <Card.Text>
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam
                                </Card.Text>
                                <Card.Text className=' d-flex align-items-center'>
                                    <RiMapPinLine className='me-3 fs-4'></RiMapPinLine>
                                    <span>Indonesia</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className=' border-0 p-3 cart-body'>
                            <Card.Img variant="top" src="img/Explore-1.png" />
                            <Card.Body>
                                <Card.Text className='d-flex align-items-center'>
                                    <AiFillStar className=' text-warning fs-4 me-2'></AiFillStar>
                                    <span>5</span>
                                </Card.Text>
                                <Card.Title>Mount Agung, Bali</Card.Title>
                                <Card.Text>
                                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua minim veniam
                                </Card.Text>
                                <Card.Text className=' d-flex align-items-center'>
                                    <RiMapPinLine className='me-3 fs-4'></RiMapPinLine>
                                    <span>Indonesia</span>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Explore;