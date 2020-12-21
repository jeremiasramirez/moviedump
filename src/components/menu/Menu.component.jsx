import React from 'react';
import Button from '@material-ui/core/Button'
import {NavLink} from 'react-router-dom'
import './Menu.component.css';
import TextField from '@material-ui/core/TextField';


const MenuComponent = ()=>{

    return <nav className="menu__movie">
        <ul>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <Button> <NavLink className="link" to="./shows">shows</NavLink> </Button>
            <Button> <NavLink className="link" to="./start">tv</NavLink> </Button>
        </ul>
    </nav> 


}

export default MenuComponent