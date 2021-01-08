import React from 'react';
import { useParams } from 'react-router-dom';


const StartPage = ()=>{
    const nameParams = useParams()
    console.log(nameParams);
    return <h1>Start page </h1>
}

export default StartPage