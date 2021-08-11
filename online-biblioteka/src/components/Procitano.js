import React from 'react';
import axios from '../axios-korpa';


const read = () => {
    axios.get('/korpa.json')
        .then(res => console.log(res))
}



const Procitano = () => {
    return (
        <div onLoad={read()}>

        </div>
    )
}



export default Procitano;
