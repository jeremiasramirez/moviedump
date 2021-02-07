import React  from 'react';
import SpinnerComponent from '../spinner/spinner.component';
// import {NavLink} from 'react-router-dom';
// import Button from '@material-ui/core/Button';
// import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import './skeleton-show.component.css';

const SkeletonShow = ()=>{
    return <div className='openPage'>
        <section className='container__skeleton animate'>
    
        <article className="banner__skeleton">
       
            <p className="animate"> </p>
        </article>

        <article className="container__poster animate">
        </article>

     <SpinnerComponent />
    </section>
    
    </div>
}
export default SkeletonShow;