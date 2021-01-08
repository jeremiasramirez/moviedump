import React  from 'react';
import './skeleton-show.component.css';

const SkeletonShow = ()=>{
    return <section className='container__skeleton animate'>
        
        <article className="banner__skeleton">
            <p className="animate"> </p>
        </article>

        <article className="container__poster animate">
        </article>


    </section>
}
export default SkeletonShow;