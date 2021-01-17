import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getRecomendationMovies = (setRecommendMovie)=>{
 
    if(setRecommendMovie != null){
        const urlRecommendMovies = `https://api.themoviedb.org/3/movie/529203/recommendations?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES&page=2`; 

        ajax.get(urlRecommendMovies).pipe(
            pluck('response','results'),
            delay(100)
            ).subscribe((resp)=>{
            setRecommendMovie(resp);
        });
    }
    
}
export default getRecomendationMovies;