import React from 'react';
import { Form, Button, Table,Col } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss';
import {BiAddToQueue} from 'react-icons/bi';
import {RiImageAddFill} from 'react-icons/ri';

function Produits() {
    return (
        <div >

            <div className='d-flex'>
                
                <Col lg={2}>
                    <SideBar />
                </Col>

                <Col lg={10}>
                    
                    <div className='crud mt-3 mb-4 '>

                        <Button variant="outline-primary m-2 add "> <BiAddToQueue/>Ajouter</Button> 
                        
                        <input type='file' id='file' accept="image/*" />
                        <label htmlFor="file" variant="outline-primary" ><RiImageAddFill/> Choisissez une photo</label>

                    </div>

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
