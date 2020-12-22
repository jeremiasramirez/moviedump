import React from 'react';
import './skeleton.popular-movies.css';


const SkeletonPopularMoviesComponent = ()=>{
    const lenSkeleton = [1,2,3,4,5,6,7,8,9];

    return lenSkeleton.map(()=>{
        return <article className="popular__movie__skeleton"></article>
    })

}

export default SkeletonPopularMoviesComponent;