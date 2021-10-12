import React, {useState, useEffect} from 'react';
import Naav from '../components/Nav';
import Footer from '../components/Footer';
import { Card, Button, Row, Col, Container} from "react-bootstrap";
import '../asset/scss/Products.scss';
import {AiOutlineCloseCircle} from 'react-icons/ai';



function Products() {

    const [prods , setProds] = useState([])

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/produit';
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setProds(resp))
    },[])

// ----------------------- modal -----------------------

    const [modal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div>

            <Naav/>

            <Container className= 'container'>

                {/* -------------- Product details --------------*/}

                {modal === true ? 

                    <div> 

                        <div onClick={openModal} className="overlay"></div>
                        
                        <div className="content">
                            <a onClick={openModal} className='close-modal'> <AiOutlineCloseCircle className='text-center'/></a> 

                            <Container>

                                <Row>
                                    <Col lg={6} sm={12}>
                                        <img src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={{width: '100%', height: '100%'}} className='m-auto' />
                                    </Col>

                                    <Col lg={6} sm={12}>
                                        <p style= {{alignItems: 'center'}}> Lorem ipsum dolor sit  quas nobis fugiat,  vero facilis ducimus blanditiis dignissimos velit aperiam quam quidem, ad pariatur. Debitis ipsam tempora minima doloremque nihil consequatur impedit culpa, cumque eius facere unde, ipsa ut delectus neque enim iusto! Deserunt minus deleniti consectetur eaque voluptatem ab nobis est commodi perferendis, voluptates animi aliquam vitae eveniet sit eligendi dolor ut nisi eum itaque libero porro atque. Quas. </p>
                                    </Col>
                                    
                                    <div className='text-center mt-3'> <Button type="submit" variant="outline-light" className='ajouter'> Ajouter au panier </Button> </div>

                                </Row>

                            </Container>
                            

                        </div>

                    </div>
                : null } 

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
                                        <Card.Img variant="top" style= {{height: '15rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                        <Card.Body>
                                            <Card.Title className='text-center'>{prod.name}</Card.Title>
                                            <Card.Text> {prod.description} </Card.Text>
                                        </Card.Body>
                                        <div className="text-center mb-3">
                                            <Button variant="outline-dark" onClick={openModal} >Détail</Button>
                                        </div>
                                    </Card>
                                </Col>
                            )}
                            {/* <Col lg={4} md={6} sm={12} className='m-auto prod'>
                            <Card style={{ width: '17rem'}} className='m-auto mt-3 mb-3 card'>
                                    <Card.Img variant="top" style= {{height: '13rem'}} src="https://images.unsplash.com/photo-1575867094741-beeb9b072b83?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"/>
                                    <Card.Body>
                                        <Card.Title className='text-center'>Card Title</Card.Title>
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                        <div className="text-center">
                                            <a href="#"> <Button variant="outline-dark">Détail</Button> </a>
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
                                            <Button variant="outline-dark">Détail</Button>
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
                                            <Button variant="outline-dark">Détail</Button>
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
                                            <Button variant="outline-dark">Détail</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col> */}

                        </Row>
                    </Col>

                </Row>

            </Container>

            <Footer/>
        </div>
    )
}

export default Products
