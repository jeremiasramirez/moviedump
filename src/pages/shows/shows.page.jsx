import React,{useState,useEffect} from 'react';
import getPopularMovies from '../../services/service.popular-movie';
import ComponentPopularMovie from '../../components/card-popular-movie/card.popular-movie'
import getRecomendationMovies from '../../services/service.recomendation-movie';
import SkeletonPopularMoviesComponent from '../../components/skeleton-popular-movies/skeleton.popular-movies';
import CardMovieComponent from '../../components/card-movie/card.movie';
import MovieSkeleton from '../../components/movie-skeleton/movie.skeleton'; 
import getUpcomingMovies from '../../services/service.upcoming-movie';
import getAiringMovies from '../../services/service.airing-movie';
import getTrendingMovies from '../../services/service.trending-movie';
import MenuComponent from '../../components/menu/Menu.component';
import './shows.page.css';


const ShowsPage = ()=>{
    
    const [popularMovie, setPopularMovie] = useState([]);
    const [recommendMovie, setRecommendMovie] = useState([]);
    const [upcomingMovie, setUpcomingMovie] = useState([]);
    const [airingMovie, setAiringMovie] = useState([]);
    const [trendingMovie, setTrendingMovie] = useState([]);


    useEffect(()=>{

        getPopularMovies(setPopularMovie);
        getRecomendationMovies(setRecommendMovie);
        getUpcomingMovies(setUpcomingMovie);
        getAiringMovies(setAiringMovie);
        getTrendingMovies(setTrendingMovie)

        return () =>{
            getPopularMovies(null);
            getRecomendationMovies(null);
            getUpcomingMovies(null);
            getAiringMovies(null);
            getTrendingMovies(null);
        };
         
    },[]);



    
    return <>
        <MenuComponent />
        {/* popular movies */}
        <h1 className="animate title__module">Populares</h1>
       
        <section className="animate container__popular__movie">{
            !popularMovie.length  ? <SkeletonPopularMoviesComponent /> : <ComponentPopularMovie data={popularMovie}/>
        }</section>
        

        {/* recommendation movies */}
        <h1 className="animate title__module">Tendencias</h1>
        <section className="container__card__movies">{
            trendingMovie.length ? <CardMovieComponent data={trendingMovie}/> : <MovieSkeleton />
        }</section>


        {/* recommendation movies */}
        <h1 className="animate title__module">Recomendaciones</h1>
        <section className="container__card__movies">{
            recommendMovie.length ? <CardMovieComponent data={recommendMovie}/> : <MovieSkeleton />
        }</section>


        {/* recommendation movies */}
        <h1 className="animate title__module">Próximas</h1>
        <section className="container__card__movies">{
            upcomingMovie.length ? <CardMovieComponent data={upcomingMovie}/> : <MovieSkeleton />
        }</section>
        


        {/* recommendation movies */}
        <h1 className="animate title__module">En el aire</h1>
        <section className="container__card__movies">{
            airingMovie.length ? <CardMovieComponent data={airingMovie}/> : <MovieSkeleton />
        }</section>
              

        
     </>
}

export default ShowsPage;