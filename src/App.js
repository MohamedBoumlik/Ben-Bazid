import React from "react";
import Home from "./page/Home";
import About from "./page/About";
import { BrowserRouter, Route } from "react-router-dom";
import Naav from "./components/Nav";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/asset/scss/Naav.scss';
import Footer from "./components/Footer";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Naav />

        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
        </div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <div style={{height:'100%}'}}>yzyzyzyzzy</div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
