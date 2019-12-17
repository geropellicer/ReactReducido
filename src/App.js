import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './views/Home';
import About from './views/About';
function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/about" exact component={About}/>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
