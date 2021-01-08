import React, { useState } from 'react'
// import { useParams } from 'react-router-dom';
import './show.page.css';

import SkeletonShow from '../../components/skeleton-show/skeleton-show.component';
import BannerShow from '../../components/banner-show/banner-show.component';

const ShowPage = ()=>{
    // const {id} = useParams()
    const {movie, setMovie} = useState({})
    
    return <>
        
        {
            movie !== undefined ? <BannerShow /> : <SkeletonShow />
        }
        

    </>
}


export default ShowPage;