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
        link:"/home"
    },
    {
        title:"Commandes",
        icon:<ShoppingCartOutlined />,
        link:"/commandes"
    },
    {
        title:"Produits",
        icon:<FaFireExtinguisher />,
        link:"/Produits"
    },
    {
        title:"Services",
        icon:<MdRoomService />,
        link:"/Services"
    },
    {
        title:"Contact",
        icon:<RiCustomerService2Fill />,
        link:"/Contact"
    },
]

