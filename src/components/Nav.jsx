import React from "react";
import { Navbar, Container,Nav } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

const Naav = () => {
  return(

    <div className='NAVE'>
        <Navbar bg="light" expand="lg">
            <Container>
              <Navbar.Brand as={Link}  to='/'>LOGO</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">

                <Nav className="me-auto navBar" style={{
                    margin: "auto",
                  }}>
                  <NavLink activeClassName="selected" as={Link} exact to='/home' >Accueil</NavLink>
                  <NavLink activeClassName="selected" as={Link} exact to='/about' >Produits</NavLink>
                  <NavLink activeClassName="selected" as={Link} exact to='/about' >Services</NavLink>
                  <NavLink activeClassName="selected" as={Link} exact to='/contact' >Contact</NavLink>
                </Nav>

                <Link >

                  <Badge badgeContent={4} style={{
                      color: '#DD866E',
                      fontSize: 'X-large'
                    }}>
                    <ShoppingCartOutlined />
                  </Badge>
                  
                </Link>

              </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>

  )
}

export default Naav;


