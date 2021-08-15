import React, { useEffect, useState } from 'react';
import classes from './Style/NaCitanju.module.css'
import firebase from '../firebase.config';

const NaCitanju = () => {

    const [page, setPage] = useState(0);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);

    const res = firebase.firestore().collection("NaCitanju")

    const getData = () => {
        setLoading(true);
        res.onSnapshot((querySnapshot) => {
            const items = [];
            querySnapshot.forEach((doc) => {
                items.push(doc.data())
            })
            setPage(items);
            console.log(page)
            setLoading(false);
        })
    }

    useEffect(() => {
        getData()
    });

    if(loading) {
        return <h1>Loading</h1>
    }

   /*  return (
        <div className={classes.PageNum}>
            {
                page.map(i => {
                    return (
                        <div>
                            <h1>{i.book}</h1>
                        </div>
                    )
                })
            }
        </div>
    ) */


    return (
        <div className={classes.PageNum}>
            <h1>{page.book}</h1>
        </div>
    )
}

export default NaCitanju