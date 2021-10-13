import React, {useState, useEffect} from 'react';
import {Form,  Button, Table,Col } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss';
import {BiAddToQueue} from 'react-icons/bi';
import {RiImageAddFill} from 'react-icons/ri';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';

function Produits() {

// ----------------------- fetch -----------------------

    const [prods , setProds] = useState([])

    useEffect(() => {
        const url = 'http://127.0.0.1:8000/api/produit';
        fetch(url)
        .then(resp => resp.json())
        .then(resp => setProds(resp))
    },[])

// ----------------------- modal -----------------------

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

                    </div>

                {/* -------------- Add product Form --------------*/}

                    {modal === true ? 

                        <div> 

                            <div onClick={openModal} className="overlay"></div>
                            
                            <div className="modal-content">
                                <a onClick={openModal} className='close-modal'> <AiOutlineCloseCircle className='text-center'/></a> 

                                <Form className='mt-4'>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nom De Produit</Form.Label>
                                        <Form.Control type="text" placeholder="Entrez le nom" />
                                    </Form.Group>

                                    <Form.Group className="mb-3 add-img" controlId="formBasicEmail">
                                        <label htmlFor="file">La Photo De Produit </label>
                                        <input type='file' id='file' accept="image/*" />
                                        <label htmlFor="file" variant="outline-primary" id='the-one'><RiImageAddFill/> Choisissez une photo</label>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control as="textarea" rows={3} placeholder="La description" name="message" />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" variant="outline-light" className='ajouter'> Ajouter </Button>
                                    </div>
                                
                                </Form>

                            </div>

                        </div>
                    : null } 
                    
                    {/* -------------- Table -------------- */}

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

                            {prods.map(prod =>

                                <tr>
                                    <td>{prod.id}</td>
                                    <td>{prod.pic}</td>
                                    <td>{prod.name}</td>
                                    <td>{prod.description}</td>
                                    <td>{prod.categorie.type}</td>
                                    <td className='d-flex text-center'>
                                        <form className='action'> <Button variant="outline-danger m-2"><MdDeleteForever className='m-1' />Supprimer</Button> </form>
                                        <a href=""> <Button variant="outline-info m-2"><FiEdit className='m-1' />Éditer</Button> </a>
                                    </td>
                                </tr>

                            )}

                        </tbody>

                    </Table>
                </Col>

            </div>

        </div>
    )
}

export default Produits
