import React from 'react';
import {  Button, Table,Col } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss'

function Contact() {
    return (
        <div >

            <div className='d-flex'>
                
                <Col lg={2}>
                    <SideBar />
                </Col>

                <Col lg={10}>

                    <Table bordered hover className=' m-auto content mt-5 ' >

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nom</th>
                                <th>Email</th>
                                <th>Sujet</th>
                                <th>Message</th>
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
                                    <form> <Button variant="outline-danger m-2">Delete</Button> </form>
                                    <a href=""> <Button variant="outline-info m-2">Edit</Button> </a>
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

export default Contact
