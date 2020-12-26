import React from 'react';
import './card.movie.css';


const CardMovieComponent = ({data})=>{

    return data.map((value,key)=>{
        return key < 12 ? <article className="animate card__movie" key={key}> 
            <img src={'https://image.tmdb.org/t/p/w300'+value.poster_path} alt="movie"/>          
        </article> : null
    })
       
    
}

export default CardMovieComponent;