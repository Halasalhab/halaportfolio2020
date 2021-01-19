import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "Story time about me ?",
  });
  const [state] = React.useState([
    { id: 2, title: "Email:", text: "halasalhab0@gmail.com" },
    { id: 3, title: "Whatsapp:", text: "+970592567855" },
    { id: 4, title: "Linkedin", text: "Hala Salhab" },
    { id: 1, title: "Spirit animal:", text: "Wolf *-* " },
  ]);
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent"> <p style={{textAlign:'start'}}><b>Why I become a coder?</b><br></br>
When I was 14, I used to do stuff I would be called A boy for doing, BCS girls don't know how to do it, At least boys in my secioty think that, I am A very challenging person, so this made strongly Want to be a programmer and now I am one. <br></br><b>You may ask how?</b><br></br>Well, thanks to <b><a href='https://www.facebook.com/aneraRBK/' style={{color:'red'}}>PLUS</a></b> Program & my ability to learn.</p></p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              {/* <img src="/images/man-01.png" alt="man" /> */}
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hi There, It's Hala, your worse nightmare !!</h1>
              <div className="about__info-p1">
              Just kidding, something you should know about me, I am a very stubborn person, so I will stick tell I get what I want, It's always the Bug or me.
              </div>
              <div className="about__info-p2">If you like to know me better, here's my contact information, don't be shy ;). I would be thrilled if I heard from you.
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
      </div>
    </div>
  );
};

export default About;
