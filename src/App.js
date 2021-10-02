import React from "react";
import Home from "./page/Home";
import Products from "./page/Products";
import '../src/asset/scss/Naav.scss';
import '../src/asset/scss/Footer.scss';
import { BrowserRouter, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Produits from "./page/backOffice/Produits";
import Commandes from "./page/backOffice/Commandes";
import ContactUs from "./page/backOffice/Contact";
import Service from "./page/backOffice/Services";
import Contact from "./page/Contact";
import Services from "./page/Services";


function App() {
  return (
    <BrowserRouter>
      <div className="App">

        {/* ------------ Routes ------------ */}

        <div>

          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/produits" component={Products} />
          <Route exact path="/contact" component={Contact} /> 

          {/* ------------ Admin Routes ------------ */}
          <Route exact path='/admin/produits' component={Produits}/>
          <Route exact path="/admin/commandes" component={Commandes}/>
          <Route exact path="/admin/services" component={Service}/>
          <Route exact path="/admin/contact" component={ContactUs}/>

        </div> 
        
      </div>
    </BrowserRouter>
  );
}

export default App;
