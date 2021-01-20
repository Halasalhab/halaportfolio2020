import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub
} from "react-icons/fa";
const Contact = () => {
  const [state] = React.useState([
    { id: 2, title: "Email", text: "halasalhab0@gmail.com" },
    { id: 3, title: "Whatsapp", text: "+970592567855" },
    { id: 4, title: "Linkedin", text: "Hala Salhab" },
  ]);
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              {/* <div className="contactSection-logo">
                <img src="/images/logo.png" alt="" />
              </div> */}
                   <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              {/* <img src="/images/man-01.png" alt="man" /> */}
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <div className="about__info-p2"><h1>If you like to know me better, here's my contact information, don't be shy ;). I would be thrilled if I heard from you.</h1>
              </div>
              <div className="info__contacts">
                <div className="row">
                  {state.map((info,i) => (
                    <div className="col-6" key={i}>
                      <strong>{info.title}</strong>
                      <p>{info.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
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
