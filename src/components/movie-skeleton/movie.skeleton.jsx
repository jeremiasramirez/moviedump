import React from 'react';
import './movie.skeleton.css';
import '../skeleton-popular-movies/skeleton.popular-movies.css';

const MovieSkeleton = ()=>{
    const lenSkeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];
    return lenSkeleton.map((value,key)=>{
       return <article key={key} className="animate skeleton__movie"></article>
    })
};

export default MovieSkeleton;