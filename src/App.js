// import "./App.css";
import React from "react";
// import React from "react";
import Nav from "./components/Nav/index";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/index";
import Header from "./components/Header/index";
import ContactCard from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index";

function App() {
  
  return (
    <div>
      <Header />
      <Nav></Nav>
      <main>
          <>
            <About></About>
            <br />
            <br />
            <Portfolio></Portfolio>
            <br />
            <br />
            <Resume />
            <br />
            <br />
            <ContactCard />
          </>
      </main>
      <Footer />
    </div>
  );
}

export default App;
