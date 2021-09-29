import React from "react";
import { Form,Button } from "react-bootstrap";


const ContactForm = () =>{
    return(
        <div className='m-auto mt-5 mb-5' style={{ width: '60%',backgroundColor:'#DD866E',padding: '38px', borderRadius:'6px'}}>
            <Form>
                <div className=" text-center mb-5">
                    <img style={{width: '30%', height: '20%'}} src="https://www.pngkit.com/png/detail/78-788100_fire-logo-png-svg-free-download-fire-logo.png" alt="" />
                </div>

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