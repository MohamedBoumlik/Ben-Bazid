import React from "react";
import { Form,Button } from "react-bootstrap";


const ContactForm = () =>{
    return(
        <div className='m-auto mt-5' style={{ width: '60%',backgroundColor:'#DD866E',padding: '38px', borderRadius:'6px'}}>
            <Form>
                <Form.Group>
                    <img src="" alt="" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nom</Form.Label>
                    <Form.Control type="text" placeholder="Entrez le nom" name="name"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Adresse email</Form.Label>
                    <Form.Control type="email" placeholder="Entrez l'e-mail" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Sujet</Form.Label>
                    <Form.Control type="text" placeholder="Entrez le sujet" name="sujet" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Entrer un message" name="message" />
                </Form.Group>
                <div className="text-center">
                <Button  variant="outline-light" type="submit">
                    Envoyer
                </Button>
                </div>
            </Form>
        </div>
    )
}

export default ContactForm;