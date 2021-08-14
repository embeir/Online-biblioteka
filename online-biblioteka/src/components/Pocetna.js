import { useState } from 'react';
import classes from './Style/Pocetna.module.css'
import Navbar from './Navbar';
import { useHistory } from 'react-router';
import Profile from './Auth/Profile';
import axios from '../axios-korpa';
import * as admin from 'firebase-admin';

admin.initializeApp({
    databaseURL:"https://online-biblioteka-default-rtdb.europe-west1.firebasedatabase.app"
})

const api = {
    key: 'AIzaSyAD0nRMYxVvRzDeaUFFR8w0m_3cDMcCFUU',
    base: 'https://www.googleapis.com/books/v1/volumes?q='
}


const Pocetna = () => {

    const [query, setQuery] = useState('')
    const [answer, setAnswer] = useState('')
    const [clicked, setClicked] = useState(false)
    const [click, setClick] = useState(0)
    const [data, setData] = useState('')
    let history = useHistory();

    const search = event => {
        if (event.key === 'Enter') {
            fetch(`${api.base}${query}:keyes&key=${api.key}`)
                .then(res => res.json())
                .then(res => {
                    setQuery('')
                    setAnswer(res);
                    console.log(res)
                })
        }
    }


    const purchase = async () => {
        let db = admin.database();
        const korpa = {
            book: answer.items[click].volumeInfo.title,
            customer: {
                name: "emir",
                adress: {
                    street: 'testna ulica bb',
                    zipCode: '134124',
                    country: 'BiH'
                }
            }
        }
        const res = await db.firestore().collection('procitano').doc('/rg7xG77nf7luAQ4eByHs').set(korpa);
        setData(res)
       /*  axios.post('/korpa.json', korpa)
        .then(res => console.log(res))
        .catch(error => console.log(error)) */
    }
    
    
    const procitano = () => {
        const knjiga = {
            book: answer.items[click].volumeInfo.title
        }
        axios.post('/procitano.json', knjiga)
    }

    const finding = (event) => {
        if (event.key === 'Clicked') {
            return setClicked(!clicked)
        }
    }

  
    return (
        <div>
            <Navbar />
            <Profile />
            <input
                type="text"
                placeholder="Traži..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
                data-testid="listEl"
            />

            {(typeof answer.items != 'undefined') ? (
                <div>
                    <div>{answer.items.map(i => <div className={classes.Title} > {i.volumeInfo.title} </div>)}</div>
                    <div>{answer.items.map(i => <img src={i.volumeInfo.imageLinks.thumbnail} alt="Reload your page" />)}</div>
                    <div>{answer.items.map(btn => {
                        return (
                            <div>
                                <button
                                    type="submit" >Lista želja</button>
                                <button
                                    type="submit"
                                    onClick={() => {
                                        history.push('/korpa')
                                        purchase()
                                        procitano()
                                        setClick(() => {
                                            answer.items.findIndex(finding)
                                        })
                                    }}>Kupi</button>
                                 <button
                                    type="submit"
                                    onClick={() => {
                                        history.push('/procitano')
                                        procitano()
                                        purchase()
                                        setClick(() => {
                                            answer.items.findIndex(finding)
                                        })
                                    }}>Procitano</button> 
                            </div>
                        )
                    })}</div>
                </div>
            ) : ('')}
        </div>
    )
}

export default Pocetna