// import "./App.css";
import React, { useState } from 'react';
// import React from "react";
import Nav from "./components/Nav/index";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About/index";
import Header from "./components/Header/index";
import ContactCard from "./components/Contact/index";
import Footer from "./components/Footer/index";
import Portfolio from "./components/Portfolio/index";
import Resume from "./components/Resume/index"

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'About your host, Cat Westover',
    },
    { name: 'contact', description: 'Contact info' },
    { name: 'portfolio', description: 'Peep my portfolio' },
    { name: 'resume', description: 'Send my resume to your boss' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header />
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
            <About></About>
            <Portfolio currentCategory={currentCategory}></Portfolio>
            <Resume />
          </>
        ) : (
          <ContactCard></ContactCard>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;