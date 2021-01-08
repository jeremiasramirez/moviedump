import {ajax} from 'rxjs/ajax';
import {pluck,delay} from 'rxjs/operators';


const getUpcomingMovies = (setUpcomingMovies)=>{
    
    if(setUpcomingMovies != null){
        const urlUpcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=125250e6a9e5ca9991ac6cd1b964a257&language=es-ES&page=1'; 

        ajax.get(urlUpcoming).pipe(
            pluck('response','results'),
            delay(100)
            ).subscribe((resp)=>{
                setUpcomingMovies(resp);
        });
    }
    
}
export default getUpcomingMovies;