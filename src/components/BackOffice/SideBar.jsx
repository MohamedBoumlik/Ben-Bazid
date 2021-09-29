import React from 'react';
import { SideBarData } from './SideBarData';
import Produits from '../../page/backOfiice/Produits';

function SideBar() {
    return (
        <div className="sideBar">

            <div className='text-center'>
                <img  style={{width: '12rem',marginTop: "9px"}} src="https://www.pngkit.com/png/detail/78-788100_fire-logo-png-svg-free-download-fire-logo.png" alt="" />
            </div>

            <ul className="sideBarList">
                { SideBarData.map((val, key) => {
                    return(

                        <li key={key}  onClick={ () => {window.location.pathname = val.link;} }  className="row"  id={window.location.pathname === val.link ? "active" : ""}> 
                            <div id='icon'> {val.icon} </div> <div id='title'> {val.title} </div>
                        </li>

                    )
                }) }
            </ul>

            <Produits/>
            
        </div>
    )
}

export default SideBar;
