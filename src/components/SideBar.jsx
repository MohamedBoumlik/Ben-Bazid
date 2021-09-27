import React from 'react';
import { SideBarData } from './SideBarData';

function SideBar() {
    return (
        <div className="sideBar">
            <ul className="sideBarList">
                { SideBarData.map((val, key) => {
                    return(

                        <li key={key}  onClick={ () => {window.location.pathname = val.link;} }  className="row"  id={window.location.pathname === val.link ? "active" : ""}> 
                            <div id='icon'> {val.icon} </div> <div id='title'> {val.title} </div>
                        </li>

                    )
                }) }
            </ul>
        </div>
    )
}

export default SideBar;
