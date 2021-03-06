import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Services from "./components/Services";
import About from "./components/About";
import Prices from "./components/Prices";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <Nav />
      <section id='home'><Banner /></section>
      <section id='ser'><Services /></section>
      <section id='tecn'><Prices /></section>
      <section id='about'><About /></section>
      <section id='contact'> <Contact /></section>
    </div>
  );
}

export default App;
