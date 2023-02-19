import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
import "./Remember.css";

const Remember = () => {
  return (
    <div className="py-5 remember">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="row py-5 px-2">
              <div className="col-md-6 col-12">
                <h1>Go Travel, Discover Remember Us</h1>
                <p>
                  We are self-service data analytics software that lets you
                  create visually appealing data visualizations and insightful
                  dashboards in minutes.
                </p>
                <div className="d-flex align-items-center">
                  <span>
                    <AiOutlineCheck className="fs-4 me-2 text-success" />
                  </span>
                  <span>
                    We are self-service data software visually appealing data
                    visualizations.
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span>
                    <AiOutlineCheck className="fs-4 me-2 text-success" />
                  </span>
                  <span>
                    We are self-service data software visually appealing data
                    visualizations.
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <span>
                    <AiOutlineCheck className="fs-4 me-2 text-success" />
                  </span>
                  <span>
                    We are self-service data software visually appealing data
                    visualizations.
                  </span>
                </div>
                <button className="text-white mt-5 discover-btn">
                  Discover Place
                </button>
              </div>
              <div className="col-md-6 mt-5 mt-md-0 col-12 px-lg-5">
                <div className="row">
                  <div className="col-6 rounded-3 cart-border p-4">
                    <div className="mb-3">
                      <img src="img/Remember-1.png" alt="Remember" />
                    </div>
                    <div>
                      <h2>500K+</h2>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                  <div className="col-6 rounded-3 cart-border p-4">
                    <div className="mb-3">
                      <img src="img/Remember-2.png" alt="Remember" />
                    </div>
                    <div>
                      <h2>500K+</h2>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                  <div className="col-6 rounded-3 cart-border p-4">
                    <div className="mb-3">
                      <img src="img/Remember-3.png" alt="Remember" />
                    </div>
                    <div>
                      <h2>500K+</h2>
                      <h5>Satisfied Clients</h5>
                    </div>
                  </div>
                  <div className="col-6 rounded-3 cart-border p-4">
                    <div className="mb-3">
                      <img src="img/Remember-4.png" alt="Remember" />
                    </div>
                    <div>
                      <h2>500K+</h2>
                      <h5>Satisfied Clients</h5>
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

export default Remember;
