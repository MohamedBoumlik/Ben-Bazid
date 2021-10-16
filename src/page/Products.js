import React, {useState, useEffect} from 'react';
import Naav from '../components/Nav';
import Footer from '../components/Footer';
import { Card, Button, Row, Col, Container} from "react-bootstrap";
import '../asset/scss/Products.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from "react-router";



function Products() {

// ----------------------- fetch -----------------------

    const [prods , setProds] = useState([])

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/produit';
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setProds(resp))
    },[])

    return (
        <div>

            <Naav/>

            <Container className= 'container'>

                {/* --------------------- Cards --------------------- */}

                <Row className='m-auto'>
  
                    <Col className="side mt-3" lg={3}>
                        <a href=""><p>Vetement De Travail</p></a>
                        <a href=""><p>Signalisation</p></a>
                        <a href=""><p>Détection Incendie</p></a>
                        <a href=""><p>Matériel Contre Incendie</p></a>
                    </Col>

                    <Col lg={9} className='d-flex c_content'>

                        <Row>

                            {prods.map(prod => 

                                <Col lg={4} md={6} sm={12} className='m-auto prod'>
                                    <Card style={{ width: '17rem', height: '30rem'}} className='m-auto mt-3 mb-3 card'>
                                        <input type="hidden" value={prod.id} />
                                        <Card.Img variant="top" style= {{height: '15rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                        <Card.Body>
                                            <Card.Title className='text-center'>{prod.name}</Card.Title>
                                            <Card.Text> {prod.description} </Card.Text>
                                        </Card.Body>
                                        <div className="text-center mb-3">
                                            <Button variant="outline-dark" as={Link} exact to='/produits/:id'>Détail</Button>
                                        </div>
                                    </Card>
                                </Col>
                            )}
                        </Row>
                    </Col>

                </Row>

            </Container>

            <Footer/>
        </div>
    )
}

export default Products
