
import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getTrendingMovies = (setTrendingMovie)=>{
    
  if(setTrendingMovie!=null){
    const urlTrendingMovies = 'https://api.themoviedb.org/3/trending/all/day?api_key=125250e6a9e5ca9991ac6cd1b964a257'; 

    ajax.get(urlTrendingMovies).pipe(
                pluck('response','results'),
                delay(1000))
            .subscribe((resp)=>{
        setTrendingMovie(resp);
    });
  }
    
}
export default getTrendingMovies;







