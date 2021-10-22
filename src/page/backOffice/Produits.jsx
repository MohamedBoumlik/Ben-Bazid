import React, {useState, useEffect} from 'react';
import {Form,  Button, Table,Col, Spinner } from 'react-bootstrap';
import SideBar from "../../components/BackOffice/SideBar";
import '../../asset/scss/SideBar.scss';
import '../../asset/scss/AdminProducts.scss';
import {BiAddToQueue} from 'react-icons/bi';
import {RiImageAddFill} from 'react-icons/ri';
import {AiOutlineCloseCircle} from 'react-icons/ai';
import {MdDeleteForever} from 'react-icons/md';
import {FiEdit} from 'react-icons/fi';
import axios from 'axios';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Produits() {

// ----------------------- fetch -----------------------

    const [loading, setLoading] = useState (false);
    const [prods , setProds] = useState([]);

    useEffect(() => {
        
        axios.get('http://127.0.0.1:8000/api/produit')
        .then(resp => setProds(resp.data))
        setLoading(true)

    },[])

// ----------------------- store -----------------------

    const url = "http://127.0.0.1:8000/api/produit/store"
    const [data,setData] = useState({
        name: "",
        pic: "",
        description: "",
    })

    function submit(e){
        e.preventDefault();
        axios.post(url,{
            name: data.name,
            pic: data.pic,
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

                        <Button onClick={openModal} variant="outline-primary m-2 add "> <BiAddToQueue/>Ajouter</Button> 

                    </div>

                {/* -------------- Add product Form --------------*/}

                    {modal === true ? 

                        <div> 

                            <div onClick={openModal} className="overlay"></div>
                            
                            <div className="modal-content">
                                <a onClick={openModal} className='close-modal'> <AiOutlineCloseCircle className='text-center'/></a> 

                                <Form className='mt-4' onSubmit={submit}>

                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Nom De Produit</Form.Label>
                                        <Form.Control onChange={handle} id="name" type="text" placeholder="Entrez le nom" value={data.name} />
                                    </Form.Group>

                                    <Form.Group className="mb-3 add-img" controlId="formBasicEmail">
                                        <label htmlFor="file">La Photo De Produit </label>
                                        <input onChange={handle} id="pic" type='file' id='file' accept="image/*" value={data.pic} />
                                        <label htmlFor="file" variant="outline-primary" id='the-one'><RiImageAddFill/> Choisissez une photo</label>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                        <Form.Label>Description</Form.Label>
                                        {/* <Form.Control onChange={handle} id="description" as="textarea" rows={3} placeholder="La description" name="description" value={data.description}/> */}
                                        <CKEditor editor={ ClassicEditor } />
                                    </Form.Group>
                                    <div className="text-center">
                                        <Button type="submit" variant="outline-light" className='ajouter'> Ajouter </Button>
                                    </div>
                                
                                </Form>

                            </div>

                        </div>
                    : null } 
                    
                    {/* -------------- Table -------------- */}
                    {loading ? 

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
                    :   <Spinner animation="border" variant="danger" style={{marginLeft: '49%', marginTop: '10%'}} /> }

                </Col>

            </div>

        </div>
    )
}

export default Produits
