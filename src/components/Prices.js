import React from "react";

const Prices = () => {
  const [header] = React.useState({
    subHeading: "TECHNICAL SKILLS",
    text:
      '"Learn as though you would never be able to master it; hold it as though you would be in fear of losing it."',
  });
  const [state] = React.useState([
    {
      id: 1,
      heading: "FrontEnd",
      exp: 65,
      msg1: "React js",
      msg2: "Bootstrap/Mterial Ui",
    },
    {
      id: 2,
      heading: "BackEnd",
      exp: 60,
      msg1: "Express",
      msg2: "Django",
    },
    {
      id: 3,
      heading: "DataBase",
      exp: 50,
      msg1: "MongoDb",
      msg2: "My SQL",
    },
  ]);
  return (
    <div className="prices">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row">
          {state.map((prices) => (
            <div className="col-4" key={prices.id}>
              <div className="price">
                <div className="priceHeading">{prices.heading}</div>
                <div className="price__rs">
                  <span>%</span>
                  {prices.exp}
                </div>
                <ul>
                  <li>{prices.msg1}</li>
                  <li>{prices.msg2}</li>
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prices;
