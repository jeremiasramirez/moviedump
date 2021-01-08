import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getPopularMovies = (setPopularMovie)=>{
    
  if(setPopularMovie!=null){
    const urlPopularMovies = 'https://api.themoviedb.org/3/movie/popular?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES&page=1'; 

    ajax.get(urlPopularMovies).pipe(
                pluck('response','results'),
                delay(100))
            .subscribe((resp)=>{
        setPopularMovie(resp);
    });
  }
    
}
export default getPopularMovies;