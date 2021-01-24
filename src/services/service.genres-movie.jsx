import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getMoviesGenres = (setMovieGenres)=>{
    
  if(setMovieGenres!=null){
    const urlMovieGenres = `https://api.themoviedb.org/3/genre/movie/list?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES`;
   
    ajax.get(urlMovieGenres).pipe(
                pluck('response'),
                delay(1000)).subscribe(
            (resp)=>{
                
            setMovieGenres(resp);
   
        });
  }
    
}
export default getMoviesGenres;










