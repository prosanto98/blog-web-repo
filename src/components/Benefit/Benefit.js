import React from "react";
import "./Benefit.css";

const Benefit = () => {
  return (
    <div className="my-5">
      <div className="container">
        <div>
          <h1 className="text-center fw-bold mb-3">Travel Benefit For User</h1>
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-10">
              <p className="text-center">
                We are self-service data analytics software that lets you create
                visually appealing data visualizations and insightful dashboards
                in minutes.
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">Cheap than Other</h4>
                  <p>Travelya is cheaper than other travel agency.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit2.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">Secure Payment</h4>
                  <p>You can pay your book without doubt again.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit-3.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">Easy To Book</h4>
                  <p>Follow flow, Click, Pay. Wait just wait e-ticket.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit4.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">24/7 Support</h4>
                  <p>We’re ready help you anytime and anywhere you are.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit5.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">Best Offers</h4>
                  <p>Inform you about all best offers for all destination.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 my-3">
              <div className="p-5 cart-body rounded-3">
                <div>
                  <img className="mb-3" src="img/Benefit6.png" alt="" />
                </div>
                <div>
                  <h4 className="mb-2">Fast Refund</h4>
                  <p>If you canceled. We can refund your money 1*12.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
