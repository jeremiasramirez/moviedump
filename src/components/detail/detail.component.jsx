import React from 'react';
import './detail.component.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EventIcon from '@material-ui/icons/Event';


const DetailComponent = (data)=>{
     
    return <section className="detail__container">


        <article className='detailVotes'>
           <div className="vote vote__gradient__votes">
            <ThumbUpIcon />   {data.data.vote_count}
           </div>

           <div className="vote vote__gradient__popularity">
            <VisibilityIcon />   {data.data.popularity}
           </div>
           
           <div className="vote vote__gradient__popularity">
            <EventIcon />   {data.data.release_date}
           </div>
        </article>



        <article className='animateDown detail'>
            <h1 className="detail__title">{data.data.original_title }  </h1>
            <p> { data.data.overview }</p>
        </article>
 


        

    </section>

}


export default DetailComponent;