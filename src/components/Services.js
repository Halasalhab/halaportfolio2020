import React from "react";
import {
  FaGithub,
} from "react-icons/fa";
const Services = () => {
  const [header] = React.useState({
    subHeading: "RECENT PROJECTS",
    text:
      "Click on the Github icon to go to the source code.",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <a href='https://github.com/Halasalhab/FoodDoseRepo'><FaGithub className="commonIcons" /></a>,
      heading: "FoodDose",
      text:
        "It is an app that allows the user to find a certain meal and the restaurant that offers this meal and give users more details about the restaurant.",
    },
    {
      id: 2,
      icon: <a href='https://github.com/Pythons4/pythons'><FaGithub className="commonIcons" /></a>,
      heading: "Sparkles",
      text:
        "Through this website, we can provide many cleaning services such as home cleaning, commercial cleaning, cleaning products, and many useful cleaning tips shared by website users.",
    },
  ]);
  return (
    <div className="services">
      <div className="container">
        <div className="services__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain" >
            {state.map((info,i) => (
              <div className="col-4 bgMain" key={i} >
                <div className="services__box">
                  {info.icon} 
                  <div className="services__box-header">{info.heading}</div>
                  <div className="services__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
