import React from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';
import './banner-show.component.css';


const Buttoners = ()=>{
    return <NavLink to="/shows">
            <Button className="back animate">
                <ArrowBackIosIcon/>
            </Button>
        </NavLink>
    
}

const BannerShow = ({data})=>{
  
    return <section>
       <article className="top__banner">
            {
                Buttoners()
            }
        </article>
        <section className="banner__movie">

            <article className="banner__backdrop">
            <img  className="backdrop__img animate" src={'https://image.tmdb.org/t/p/w300'+data.backdrop_path} alt={data.original_title}/>
               
                <div className="banner__poster animate aanimateToUp">
                    <img src={'https://image.tmdb.org/t/p/w300'+data.poster_path} alt={data.original_title}/>
                </div>
            </article>

        </section>

            <article className="title__show animateToUp">
                <h1>{data.original_title}</h1>
            </article> 
    </section>
}

export default BannerShow;