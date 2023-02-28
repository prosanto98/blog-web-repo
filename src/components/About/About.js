import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./About.css";
const Gallary = () => {
  return (
    <>
      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <h1 className="heading">
            <span>A</span>
            <span>b</span>
            <span>o</span>
            <span>u</span>
            <span>t</span>
            <span>u</span>
            <span>s</span>
          </h1>
          <div className="section-header align-text">
            <p className="color-p">
              Aperiam dolorum et et wuia molestias qui eveniet numquam nihil
              porro incidunt dolores placeat sunt id nobis omnis tiledo stran
              delop
            </p>
          </div>

          <div className="row gy-4">
            <div className="col-lg-6">
              <h3>Voluptatem dignissimos provident quasi corporis</h3>
              <img
                src="img/about.jpg"
                className="img-fluid rounded-4 mb-4"
                alt=""
              />
              <p className="color-p">
                Ut fugiat ut sunt quia veniam. Voluptate perferendis
                perspiciatis quod nisi et. Placeat debitis quia recusandae odit
                et consequatur voluptatem. Dignissimos pariatur consectetur
                fugiat voluptas ea.
              </p>
              <p className="color-p">
                Temporibus nihil enim deserunt sed ea. Provident sit expedita
                aut cupiditate nihil vitae quo officia vel. Blanditiis eligendi
                possimus et in cum. Quidem eos ut sint rem veniam qui. Ut ut
                repellendus nobis tempore doloribus debitis explicabo similique
                sit. Accusantium sed ut omnis beatae neque deleniti repellendus.
              </p>
            </div>
            <div className="col-lg-6">
              <div className="content ps-0 ps-lg-5">
                <p className="fst-italic color-p">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul>
                  <li className="odc">
                    <FaCheckCircle />
                    <i className="bdc">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </i>
                  </li>
                  <li className="odc">
                    <FaCheckCircle />
                    <i className="bdc">
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </i>
                  </li>
                  <li className="odc">
                    <FaCheckCircle />
                    <i className="bdc">
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate
                      trideta storacalaperda mastiro dolore eu fugiat nulla
                      pariatur.
                    </i>
                  </li>
                </ul>
                <p className="color-p">
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore eu fugiat nulla pariatur. Excepteur sint
                  occaecat cupidatat non proident
                </p>
                <div className="position-relative mt-4">
                  <img
                    src="img/about-2.jpg"
                    className="img-fluid rounded-4"
                    alt=""
                  />
                  <a
                    className="glightbox play-btn"
                    href="https://www.youtube.com/watch?v=LXb3EKWsInQ"
                  >
                    1
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallary;
