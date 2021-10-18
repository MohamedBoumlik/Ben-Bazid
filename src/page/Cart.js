import React from 'react'
import Naav from '../components/Nav'

function Cart(prods) {
    return (
        <div>

            <Naav />
            
            <h1 className='text-center m-2' style={{color: '#DD866E', textDecoration: 'underline'}}>Vos produits sélectionnés</h1>

            <div>
                <h3>Nom de produit</h3>
                <img src="https://p1.pxfuel.com/preview/329/327/620/nature-green-red-fire.jpg" alt="fire" />
            </div>

        </div>
    )
}

export default Cart
