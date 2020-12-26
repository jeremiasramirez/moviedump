import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getAiringMovies = (setAiringMovies)=>{
    
  if(setAiringMovies!=null){
    const urlAiring = 'https://api.themoviedb.org/3/movie/now_playing?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES&page=1'; 

    ajax.get(urlAiring).pipe(
                pluck('response','results'),
                delay(1000))
            .subscribe((resp)=>{
                setAiringMovies(resp);
    });
  }
    
}
export default getAiringMovies;


