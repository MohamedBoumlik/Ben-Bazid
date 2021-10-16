import React, {useState,useEffect} from 'react';
import { Button, Row, Col, Container} from "react-bootstrap";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductShow() {

// ----------------------- Show -----------------------

    const { id } = useParams()
    const url = `http://127.0.0.1:8000/api/produit/show/${id}` 
    const [prod , setProd] = useState()
    
    useEffect(() => {
       axios.get(url)
       .then(resp => {
           setProd(resp)
       })
        
    },[url])

    
    return (

        <div>
            
                
            <Container>

                <Row>
                    {prod.map(prods =>
                    /* <Col lg={6} sm={12}>
                        <img src={prod.pic} style={{width: '100%', height: '100%'}} className='m-auto' />
                    </Col> */

                    // <Col lg={6} sm={12}>
                    //     <p style= {{alignItems: 'center'}}> {prods.name} </p>
                    // </Col>
                    
                    // <div className='text-center mt-3'> <Button type="submit" variant="outline-light" className='ajouter'> Ajouter au panier </Button> </div>
                        <p>{prods.name}</p>
                    )}
                </Row>

            </Container>
           

            {/* <div>{prod.name}</div> */}

        </div>
    )
}

export default ProductShow
