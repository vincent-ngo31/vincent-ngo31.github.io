import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Projects from "./Components/Projects";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-177015647-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Projects />
        <Footer />
      </div>
    );
  }
}

export default App;
