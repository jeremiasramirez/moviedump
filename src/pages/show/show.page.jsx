import React from 'react'
import { useParams } from 'react-router-dom';
import './show.page.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import {NavLink} from 'react-router-dom';


const ShowPage = ()=>{
    // const {id} = useParams()

    return <>
        <section className="banner__movie animate">
        <NavLink to="/shows"><Button className="back"><ArrowBackIosIcon/></Button></NavLink>
            <article className="banner__elements">
             
                <h1 className="banner__title">Titulo</h1>
            </article>

        </section>

    </>
}


export default ShowPage;