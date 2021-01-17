import React,{useState} from 'react';
import './Menu.component.css';
import MovieSkeleton from '../movie-skeleton/movie.skeleton'; 
import Search from '@material-ui/icons/Search';
import getMoviesBySearch from '../../services/service.search-movie';
import CardMovieComponent from '../card-movie/card.movie';

const MenuComponent = ()=>{

    const [valueSearch,setValueSearch] = useState([]);
    const [dataSearched, setdataSearched] = useState([]);
    let [isWriting, setWritingValue] = useState([false])

    const searchByMenu = (data)=>{
        setValueSearch(()=>data);
        setWritingValue(()=>true);

        setTimeout(()=>{
            setWritingValue(()=>false);
        },1500)
        
        getMoviesBySearch(setdataSearched,data);  
    }
 
    return <>
        <nav className="menu__movie ">

            <div className="imageIcon">
                <img  src="https://www.flaticon.com/svg/static/icons/svg/3995/3995436.svg" alt="icon" />
            </div>

            <input onChange={(e)=>searchByMenu(e.target.value)} type="search" className="text__field animate" placeholder="Buscar"/>
       
        </nav> 
        
        <section>
            <h1 className="terminology animate">{valueSearch} {valueSearch.length ? <span> <Search /> </span> : null} </h1>

            <article className="responsiveCards animate">
             {
                (isWriting===true) ?  <MovieSkeleton /> : null
             }
             {
                (dataSearched.length > 1 ) ? <CardMovieComponent data={dataSearched}/>: null
             }
            </article>
        </section>

    </>
     

}

export default MenuComponent