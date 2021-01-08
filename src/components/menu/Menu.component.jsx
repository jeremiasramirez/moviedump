import React from 'react';
import './Menu.component.css';
 


const MenuComponent = ()=>{

    return <>
        <nav className="menu__movie ">
            <div className="imageIcon">
                <img src="https://www.flaticon.com/svg/static/icons/svg/3995/3995436.svg" alt="icon" />
            </div>
            <input type="search" className="text__field animate" placeholder="Buscar"/>
        </nav> 
        
    </>
     

}

export default MenuComponent