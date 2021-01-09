import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getMoviesById = (setMovieById,id)=>{
    
  if(setMovieById!=null){
    const urlMovieById = `https://api.themoviedb.org/3/movie/${id}?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES`;
   
    ajax.get(urlMovieById).pipe(
                pluck('response'),
                delay(1000)).subscribe(
            (resp)=>{
                
            setMovieById(resp);
   
        });
  }
    
}
export default getMoviesById;