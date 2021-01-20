import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "Story time about me ?",
  });
 
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent"> <p style={{textAlign:'start'}}><b>Why I become a coder?</b><br></br>
When I was 14, I used to do stuff I would be called A boy for doing, BCS girls don't know how to do it, At least boys in my secioty think that, I am A very challenging person, so this made strongly Want to be a programmer and now I am one. <br></br><b>You may ask how?</b><br></br>Well, thanks to <b><a href='https://www.facebook.com/aneraRBK/' style={{color:'red'}}>PLUS</a></b> Program & my ability to learn.</p></p>
          <div className="commonBorder"></div>
        </div>
   
      </div>
    </div>
  );
};

export default About;
