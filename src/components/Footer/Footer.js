import React from 'react';
import './Footer.css';
import { TiSocialTwitter, TiSocialLinkedin, TiSocialPinterest, TiSocialFacebook } from "react-icons/ti";

const Footer = () => {
    return (
        <div className='container'>
            <div className='my-5'>
                <div className='row'>
                    <div className="col-12 col-lg-4 mb-3 mb-lg-0">
                        <img src="img/logo.png" alt="" />
                        <div className='mt-4'>
                            <a className='p-2 ms-2 rounded-3 bg-success' href="/">
                                <TiSocialFacebook className='fs-1 text-white' />
                            </a>
                            <a className='p-2 ms-2 rounded-3 bg-success' href="/">
                                <TiSocialTwitter className='fs-1 text-white' />
                            </a>
                            <a className='p-2 ms-2 rounded-3 bg-success' href="/">
                                <TiSocialLinkedin className='fs-1 text-white' />
                            </a>
                            <a className='p-2 ms-2 rounded-3 bg-success' href="/">
                                <TiSocialPinterest className='fs-1 text-white' />
                            </a>
                        </div>
                        <div className='mt-5'>
                            <p className='mb-1'>Business Number : +12 4825415478</p>
                            <p className='mb-1'>3131 Doctor Drive. LA, California</p>
                            <p className='mb-1'>Complaints/Enquiries: pack&go@mail.com</p>
                        </div>
                    </div>
                    <div className="col-4 col-lg-2">
                        <h3>Tour</h3>
                        <a className=' text-decoration-none text-dark' href="/">Thailand</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Vietnam</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Korea</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Mexico</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Italy</a>
                    </div>
                    <div className="col-4  col-lg-3">
                        <h3>Support</h3>
                        <a className=' text-decoration-none text-dark' href="/">Account</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Legal</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Contact</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Affiliate Program</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Privacy Policy</a>
                    </div>
                    <div className="col-4  col-lg-3">
                        <h3>Useful Pages</h3>
                        <a className=' text-decoration-none text-dark' href="/">Account</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Deals</a><br />
                        <a className=' text-decoration-none text-dark' href="/">FAQs</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Why Choose Us</a><br />
                        <a className=' text-decoration-none text-dark' href="/">Subscribe</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;