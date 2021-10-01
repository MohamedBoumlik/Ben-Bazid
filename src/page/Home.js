import React from "react";
import '../asset/scss/Home.scss';
import { Carousel, Card, Button, Row, Col, Container } from "react-bootstrap";
import Naav from "../components/Nav";
import Footer from "../components/Footer";

const Home = () => {
return(
    <div>
        <Naav/>
    {/* -------------------------------------------------- Slider -------------------------------------------------- */}


        <Carousel>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1591557562184-96fd1b4cf797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                alt="Second slide"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                className="d-block w-100 fluid"
                src="https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1229&q=80"
                alt="Third slide"
                style={{height: '94vh',
                    width: '100%',
                    objectFit: 'cover'
                   }}
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>


    {/* -------------------------------------------------- About Us -------------------------------------------------- */}

        <Container>
            <Row className='description mt-5 mb-5 m-auto p-5' >
                <Col lg={7} md={12} className='m-auto'>
                    <div className='p-4'>
                        <h1 className='titles'>À propos de nous</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eos laudantium illo, distinctio temporibus nisi doloribus? Illo atque, temporibus repellat consequatur incidunt similique sequi facilis quia, esse, cupiditate distinctio consequuntur laboriosam quaerat nam exercitationem fugit quasi laborum numquam quod ab odit facere beatae architecto. Eos veritatis pariatur velit doloribus praesentium ratione, itaque nam?
                    </div>
                </Col>

                <Col lg={5} md={12} className='m-auto'>
                    <div className='p-4 m-auto'>
                         <img style={{objectFit: 'cover', width: '100%', height: '100%'}} src="https://images.pexels.com/photos/189474/pexels-photo-189474.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                    </div>
                </Col>
            </Row>
        </Container>


    {/* -------------------------------------------------- Cards -------------------------------------------------- */}


        <Container>
            <Row className='m-auto'>
                <Col>
                    <Card style={{ width: '18rem'}} className='m-auto mt-3 mb-3 card'>
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
                
                <Col>
                    <Card style={{ width: '18rem'}} className='m-auto mt-3 mb-3 card'>
                        <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1529220502050-f15e570c634e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1229&q=80"/>
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

                <Col>
                    <Card style={{ width: '18rem' }} className='m-auto mt-3 mb-3 card3'>
                        <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1591557562184-96fd1b4cf797?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1332&q=80"/>
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
        </Container>

        <Footer/>

    </div>
)

}

export default Home;