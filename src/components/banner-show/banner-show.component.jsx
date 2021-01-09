import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import './banner-show.component.css';



const BannerShow = ()=>{
    return <>
        <section className="banner__movie">
        
            <NavLink to="/shows">
                <Button className="back animate">
                    <ArrowBackIosIcon/>
                </Button>
            </NavLink>
            
            <article className="banner__elements">
                <h1 className="banner__title animate">Doctor Strange</h1>
            </article>

            <article className="banner__backdrop">
                <div className="banner__poster animate"> </div>
            </article>

        </section> 
    </>
}

export default BannerShow;