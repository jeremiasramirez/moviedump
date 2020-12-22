import React from 'react';
import './skeleton.popular-movies.css';


const SkeletonPopularMoviesComponent = ()=>{
    const lenSkeleton = [1,2,3,4,5,6,7,8,9,10,11,12,13];

    return lenSkeleton.map((value,key)=>{
        return <article key={key} className="popular__movie__skeleton"></article>
    })

}

export default SkeletonPopularMoviesComponent;