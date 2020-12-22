import React,{useState,useEffect} from 'react';
import getPopularMovies from '../../services/service.popular-movie';
import ComponentPopularMovie from '../../components/card-popular-movie/card.popular-movie'
import getRecomendationMovies from '../../services/service.recomendation-movie';
import SkeletonPopularMoviesComponent from '../../components/skeleton-popular-movies/skeleton.popular-movies';
import CardMovieComponent from '../../components/card-movie/card.movie';
import MovieSkeleton from '../../components/movie-skeleton/movie.skeleton';


import './shows.page.css';

const ShowsPage = ()=>{
    
    const [popularMovie, setPopularMovie] = useState([]);
    const [recommendMovie, setRecommendMovie] = useState([]);


    useEffect(()=>{

        getPopularMovies(setPopularMovie);
        getRecomendationMovies(setRecommendMovie);

        return () =>{
            getPopularMovies(null);
            getRecomendationMovies(null);
        };
         
    },[]);



    
    return <>
        {/* popular movies */}
        <h1 className="animate title__module">Populares</h1>
       
        <section className="animate container__popular__movie">{
            !popularMovie.length  ? <SkeletonPopularMoviesComponent /> : <ComponentPopularMovie data={popularMovie}/>
        }</section>
        


        {/* recommendation movies */}
        <h1 className="animate title__module">Recomendaciones</h1>
        <section className="container__card__movies">{

            recommendMovie.length ? <CardMovieComponent data={recommendMovie}/> : <MovieSkeleton />

        }</section>
        

     </>
}

export default ShowsPage;