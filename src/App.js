import React from "react";
import Home from "./page/Home";
import Naav from "./components/Nav";
import '../src/asset/scss/Naav.scss';
import Footer from "./components/Footer";
import '../src/asset/scss/Footer.scss';
import SideBar from "./components/BackOffice/SideBar";
import '../src/asset/scss/SideBar.scss';
import ContactForm from "./components/ContactForm";
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Produits from "./page/backOfiice/Produits";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Naav /> */}
        <SideBar/>

        {/* ------------ Routes ------------ */}
        <div>

          {/* <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          {/* <Route exact path="/services" component={Service} /> */}
          {/* <Route exact path="/contact" component={ContactForm} /> */} 

          {/* ------------ Admin Routes ------------ */}
          <Route exact path='/admin/produits' component={Produits}/>

        </div>
        
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
