import React from 'react';
import './card.popular-movie.css';


const ComponentPopularMovie = ({data,key})=>{
   
    // console.log(data) 
    return data.map((value,key)=>{
         
        return key < 13 ? <article key={key} className="animate popular__movie">
            <img src={'https://image.tmdb.org/t/p/w300'+value.poster_path} alt={value.title}/>
        
         </article> : null;

    })
}
export default ComponentPopularMovie;