import React,{useState,useEffect} from 'react';
import getPopularMovies from '../../services/service.popular-movie';
import ComponentPopularMovie from '../../components/card-popular-movie/card.popular-movie'
import getRecomendationMovies from '../../services/service.recomendation-movie';

import './shows.page.css';

const ShowsPage = ()=>{
    
    const [popularMovie, setPopularMovie] = useState([]);
    const [recommendMovie, setRecommendMovie] = useState([]);


    useEffect(()=>{

        getPopularMovies(setPopularMovie);
        getRecomendationMovies(setRecommendMovie)

    },[]);



    
    return <>
        
        {/* popular movies */}
        <section className="container__popular__movie">
            <ComponentPopularMovie data={popularMovie}/>
        </section>

        {/* recommendation movies */}


     </>
}

export default ShowsPage;