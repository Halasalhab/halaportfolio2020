import React from "react";

const Banner = () => {
  const [state] = React.useState({
    title: "Hala Salhab",
    text:
      "I am web developer, Fond of programming.",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <h1>{state.title}</h1>
                <h2><b>{state.text}</b></h2>
              </div>
            </div>
          </div>
          {/* <div className="col-6">
            <div className="banner__img">
              <img src={'https://miro.medium.com/max/2408/1*SzN6u2U98S4RyhWo_WyaHQ.png'} alt="man" />
            </div>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Banner;
