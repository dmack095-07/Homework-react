import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={About}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/portfolio" component={Portfolio}></Route>
        <Route exact path="/contact" component={Contact}></Route>
      </Switch>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
