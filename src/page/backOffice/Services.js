import React , {useState} from 'react';
import {Form,  Button, Table,Col } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss';
import {BiAddToQueue} from 'react-icons/bi';
import {MdDeleteForever} from 'react-icons/md';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {FiEdit} from 'react-icons/fi';
import axios from 'axios';

function Service() {

// ----------------------- store -----------------------

    const url = "http://127.0.0.1:8000/api/services/store"
    const [data,setData] = useState({
        name: "",
        description: "",
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            description: data.description,
        })
        .then(resp => resp.json())
        .then(resp => setData(resp))
    }

    function handle(e){
        const newdata = {...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    
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

                    <Button onClick={openModal} variant="outline-primary m-2 add "> <BiAddToQueue className='m-1'/>Ajouter</Button> 

                    </div>

                    {modal === true ? 

                        <div> 

                            <div onClick={openModal} className="overlay"></div>
                            
                            <div className="modal-content">
                                <a onClick={openModal} className='close-modal'> <AiOutlineCloseCircle className='text-center'/></a> 

                                <Form className='mt-4' onSubmit={submit}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Titre De Service</Form.Label>
                                        <Form.Control onChange={handle} id='name' value={data.name} type="text" placeholder="Entrez le titre" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        <Form.Control onChange={handle} id='description' value={data.description} as="textarea" rows={3} placeholder="La description" name="description" />
                                    </Form.Group>

                                    <div className="text-center">
                                        <Button type="submit" variant="outline-light" className='ajouter'> Ajouter </Button>
                                    </div>
                                
                                </Form>

                            </div>

                        </div>
                    : null }

                    <Table bordered hover className=' m-auto content mt-2 ' >

                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Titre</th>
                                <th>Description</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant="outline-danger m-2"><MdDeleteForever className='m-1' />Supprimer</Button> </form>
                                    <a href=""> <Button variant="outline-info m-2"><FiEdit className='m-1' />Éditer</Button> </a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td className='d-flex text-center'>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>pic</td>
                                <td>Otto</td>
                                <td className='d-flex '>
                                    <form> <Button variant='outline-danger m-2'>Delete</Button> </form>
                                    <a href=""><Button variant='outline-info m-2'>Edit</Button></a>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>pic</td>
                                <td>Otto</td>
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

export default Service
