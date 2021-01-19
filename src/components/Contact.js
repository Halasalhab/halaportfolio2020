import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub
} from "react-icons/fa";
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              {/* <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div> */}
              <p style={{textAlign: "center"}}>
              Feel free to DM or reach me out any time, I'm available.
              </p>
              <ul className="contactCircles">
                <li>
                <a href="https://www.facebook.com/20011hs">
                      <FaFacebookF className="headerIcon" />
                    </a>
                </li>
                <li>
                <a href="https://www.instagram.com/halosh_salhab/">
                <FaInstagram className="headerIcon" />
            </a>
                </li>
                <li>
                <a href="https://github.com/Halasalhab">
                <FaGithub className="headerIcon" />
            </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
