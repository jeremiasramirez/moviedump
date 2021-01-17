import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';
 
const getMoviesBySearch = (setMovieBySearch,finds)=>{
    
  if(setMovieBySearch!=null){
    const urlMovieBySearch = `https://api.themoviedb.org/3/search/movie?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES&query=${finds}&page=1&include_adult=false`;
   
    ajax.get(urlMovieBySearch).pipe(
                pluck('response','results'),
                delay(1000)).subscribe(
            (resp)=>{
                
              setMovieBySearch(resp);
   
        });
  }
    
}
export default getMoviesBySearch;