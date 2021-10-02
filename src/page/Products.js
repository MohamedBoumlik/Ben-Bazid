import React from 'react';
import Naav from '../components/Nav';
import Footer from '../components/Footer';
import { Card, Button, Row, Col, Container } from "react-bootstrap";
import '../asset/scss/Products.scss';


function Products() {
    return (
        <div>

            <Naav/>

            <Container>


                <Row className='m-auto'>
  
                    <Col className="side mt-3" lg={3}>
                        <a href=""><p>Vetement De Travail</p></a>
                        <a href=""><p>Signalisation</p></a>
                        <a href=""><p>Détection Incendie</p></a>
                        <a href=""><p>Matériel Contre Incendie</p></a>
                    </Col>

                    <Col lg={9} className='d-flex c_content'>

                        <Row>

                            <Col lg={4} md={6} sm={12} className='m-auto prod'>
                                <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <Button variant="outline-dark">Go somewhere</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={4} md={6} sm={12} className='m-auto prod'>
                            <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <Button variant="outline-dark">Go somewhere</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            <Col lg={4} md={6} sm={12} className='m-auto prod'>
                                <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <Button variant="outline-dark">Go somewhere</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={4} md={6} sm={12} className='m-auto prod'>
                                <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <Button variant="outline-dark">Go somewhere</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                            <Col lg={4} md={6} sm={12} className='m-auto prod'>
                                <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <Button variant="outline-dark">Go somewhere</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>

                </Row>

            </Container>

            <Footer/>
        </div>
    )
}

export default Products
