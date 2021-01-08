import React from 'react'
import { useParams } from 'react-router-dom';

const ShowPage = ()=>{
    const {id} = useParams()
    return <h1>show {id}</h1>
}


export default ShowPage;