import React from 'react'
import {FaFireExtinguisher} from 'react-icons/fa';
import {AiFillHome} from 'react-icons/ai';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdRoomService} from 'react-icons/md';
import { ShoppingCartOutlined } from "@material-ui/icons";


export const SideBarData = [
    {
        title:"Home",
        icon:<AiFillHome />,
        link:"admin/home"
    },
    
    {
        title:"Produits",
        icon:<FaFireExtinguisher />,
        link:"/admin/produits"
    },

    {
        title:"Commandes",
        icon:<ShoppingCartOutlined />,
        link:"admin/commandes"
    },

    {
        title:"Services",
        icon:<MdRoomService />,
        link:"admin/Services"
    },

    {
        title:"Contact",
        icon:<RiCustomerService2Fill />,
        link:"/Contact"
    },
]

