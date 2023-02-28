import React from "react";
import "./Contactus.css";
const Contactus = () => {
  return (
    <section>
      <h1 className="heading">
        <span>c</span>
        <span>o</span>
        <span>n</span>
        <span>t</span>
        <span>a</span>
        <span>c</span>
        <span>t</span>
      </h1>

      <div className="contact">
        <div className="">
          <img height={"500px"} src="img/contact-img.svg" alt="" />
        </div>

        <form action="">
          <div className="inputBox">
            <input type="text" placeholder="name" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <input type="number" placeholder="number" />
            <input type="text" placeholder="subject" />
          </div>
          <textarea
            placeholder="message"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <input type="submit" className="btn1" value="send message" />
        </form>
      </div>
    </section>
  );
};

export default Contactus;
