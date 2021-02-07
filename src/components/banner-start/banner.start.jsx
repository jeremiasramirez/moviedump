import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './banner.start.css';
import logo from '../../assets/logo-start-app.svg'; 

const BannerStartApp = ()=>{

    return <section className="container__banner__start animate">
        <h1>DUMP | TV</h1>

        <article className="container__image">
            <img src={logo} alt="logo app"></img>
        </article>

        <article>
            <Button>
                <NavLink to="/shows">INICIAR</NavLink>
            </Button>
        </article>
    </section>

}

export default BannerStartApp;