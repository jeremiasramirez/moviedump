import React from 'react';
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import './Menu.component.css';
 


const MenuComponent = ()=>{

    return <nav className="menu__movie ">
         <ul>  
            <Button> <NavLink activeClassName="active" className="link animate" to="./shows">SHOW</NavLink> </Button>
            <Button> <NavLink className="link animate" to="./start">TV SHOW</NavLink> </Button>
        </ul>
         <input type="search" className="text__field animate" placeholder="Buscar"/>
       
    </nav> 
     


}

export default MenuComponent