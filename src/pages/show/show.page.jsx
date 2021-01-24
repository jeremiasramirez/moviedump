import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom';
import getMoviesById from '../../services/service.get-movie-by-id';

import './show.page.css';


import SkeletonShow from '../../components/skeleton-show/skeleton-show.component';
import BannerShow from '../../components/banner-show/banner-show.component';

const ShowPage = ()=>{
    const {id} = useParams();

    const [movie, setMovieById] = useState([])
    
    useEffect(()=>{
        getMoviesById(setMovieById,id);
        
        return ()=>{
            getMoviesById(null);
        }

    },[]);


    return <div className='openPage'>
        {/* BannerShow data={movie} */}
        {
            movie == false  ? <SkeletonShow /> : <SkeletonShow /> 
        }
        

    </div>
}


export default ShowPage;