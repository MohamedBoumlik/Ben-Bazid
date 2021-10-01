import React, {useState} from 'react';
import {Form,  Button, Table,Col } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss';
import {BiAddToQueue} from 'react-icons/bi';
import {RiImageAddFill} from 'react-icons/ri';
import {AiOutlineCloseCircle} from 'react-icons/ai';

function Produits() {

    const [modal, setShowModal]= useState(false);

    const openModal = () => {
        setShowModal(!modal);
    };

    if(modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }

    return (
        <div >

            <div className='d-flex'>
                
                <Col lg={2}>
                    <SideBar />
                </Col>

                <Col lg={10}>
                    
                    <div className='crud mt-3 mb-4 '>

                        <Button onClick={openModal} variant="outline-primary m-2 add "> <BiAddToQueue/>Ajouter</Button> 
                        
                        <input type='file' id='file' accept="image/*" />
                        <label htmlFor="file" variant="outline-primary" ><RiImageAddFill/> Choisissez une photo</label>

                    </div>
                    {/*  "short tenary operator" => if modal is true return (what's here) */}
                    {modal === true ? 

                        <div> 

                            <div onClick={openModal} className="overlay"></div>
                            
                            <div className="modal-content">
                                <a onClick={openModal} className='close-modal'> <AiOutlineCloseCircle className='text-center'/></a> 

                                <Form className='mt-4'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" />
                                        <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Check me out" />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>

                            </div>

                        </div>
                     : null } 
                    
                    

                    <Table bordered hover className=' m-auto content mt-2 ' >

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Catégorie</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td>ddddddd</td>
                                <td>ccccc</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant="outline-danger m-2">Supprimer</Button> </form>
                                    <a href=""> <Button variant="outline-info m-2">Éditer</Button> </a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td>ddddddd</td>
                                <td>ccccc</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td>ddddddd</td>
                                <td>ccccc</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td>ddddddd</td>
                                <td>ccccc</td>
                                <td className='d-flex '>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td>ddddddd</td>
                                <td>ccccc</td>
                                <td className='d-flex'>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                </Col>

            </div>

        </div>
    )
}

export default Produits
