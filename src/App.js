import React from "react";
import Home from "./page/Home";
import About from "./page/About";
import Naav from "./components/Nav";
import '../src/asset/scss/Naav.scss';
import Footer from "./components/Footer";
import '../src/asset/scss/Footer.scss';
import SideBar from "./components/SideBar";
import '../src/asset/scss/SideBar.scss';
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Naav />
        {/* <SideBar/> */}
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={ContactForm} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
