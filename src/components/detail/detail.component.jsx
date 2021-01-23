import React from 'react';
import './detail.component.css';



const DetailComponent = ({ title, description })=>{
    
    return <section className="detail__container">

        <article className='detail'>
            <h1 className="detail__title">Detail</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nam, sint exercitationem harum placeat tempore quam rem magnam odio dolorum nisi, voluptatibus culpa perspiciatis ipsam nulla! Nam reiciendis at commodi.</p>
        </article>

        <article className='detail'>
            <h1 className="detail__title">Detail</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nam, sint exercitationem harum placeat tempore quam rem magnam odio dolorum nisi, voluptatibus culpa perspiciatis ipsam nulla! Nam reiciendis at commodi.</p>
        </article>

    </section>

}


export default DetailComponent;