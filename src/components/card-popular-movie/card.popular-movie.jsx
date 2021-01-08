import React from 'react';
import './card.popular-movie.css';
import {NavLink} from 'react-router-dom'

const ComponentPopularMovie = ({data,key})=>{
   
    // console.log(data) 
    return data.map((value,key)=>{
         
        return key < 13 ? <NavLink key={key} to={'/shows/'+value.id}> <article key={key} className="animate popular__movie">
        
            <img className="image__poster" src={'https://image.tmdb.org/t/p/w300'+value.poster_path} alt={''}/>
         
         </article> </NavLink>: null;

    })
}
export default ComponentPopularMovie;