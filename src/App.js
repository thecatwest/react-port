// import "./App.css";
import React from "react";
// import React from "react";
import Nav from "./components/Nav/index";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/index";
import Header from "./components/Header/index";
import ContactForm from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index";
var dotenv = require('dotenv');

dotenv.config();

function App() {
  
  return (
    <div>
      <Header />
      <Nav />
      <main>
          <>
            <About />
            <br />
            <br />
            <Portfolio />
            <br />
            <br />
            <Resume />
            <br />
            <br />
            <ContactForm />
          </>
      </main>
      <Footer />
    </div>
  );
}

export default App;
