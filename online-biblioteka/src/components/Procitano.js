import React, { useState, useEffect } from 'react';
import classes from './Style/Procitano.module.css'
import firebase from '../firebase.config';


const Procitano = () => {
   

    const [book, setData] = useState([]);
    const [loading, setLoading] = useState(false);

  

    const res = firebase.firestore().collection("procitano")

    const getData = () => {
        setLoading(true);
        res.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data());
            })
            setData(items);
            setLoading(false);
        })
    }

    useEffect(() => {
        getData()
    }, []);

    if(loading) {
        return <h1>Loading</h1>
    }

    return (
        <div className={classes.Lista}>
            {
                book.map(i => {
                    return (
                        <div>
                            <h1>{i.book}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}



export default Procitano;
