import React from 'react';
import './card.movie.css';
import {NavLink} from 'react-router-dom'

const CardMovieComponent = ({data})=>{

    return data.map((value,key)=>{
        
        return key < 14 ? <article className="animate card__movie" key={key}> 
           <NavLink to={'/shows/'+value.id}> <img src={'https://image.tmdb.org/t/p/w300'+value.poster_path} alt="movie"/>  
             </NavLink>
        </article> : null
    })
       
    
}

export default CardMovieComponent;