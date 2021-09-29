import React from 'react';
import { Table } from 'react-bootstrap';

function Produits() {
    return (
        <div>

            <Table striped bordered hover>

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
                        <td className='d-flex'>
                            <form> <button className='outline-danger m-2'>Delete</button> </form>
                            <a href=""><button className='outline-info m-2'>Edit</button></a>
                        </td>
                    </tr>
                </tbody>

            </Table>

        </div>
    )
}

export default Produits
