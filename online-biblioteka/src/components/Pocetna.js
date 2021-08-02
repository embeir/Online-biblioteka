import { useState } from 'react';
import Navbar from './Navbar';
import { useHistory } from 'react-router';
import Profile from './Auth/Profile';

const api = {
    key: 'AIzaSyAD0nRMYxVvRzDeaUFFR8w0m_3cDMcCFUU',
    base: 'https://www.googleapis.com/books/v1/volumes?q='
}

const Pocetna = () => {

    const [query, setQuery] = useState('')
    const [answer, setAnswer] = useState('')
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






    return (
        <div>
            <Profile />
            <Navbar />
            <input
                type="text"
                placeholder="Traži..."
                onChange={e => setQuery(e.target.value)}
                value={query}
                onKeyPress={search}
            />

            {(typeof answer.items != 'undefined') ? (
                <div>
                    <div>{answer.items.map(i => <div> {i.volumeInfo.title} </div>)}</div>
                    <div>{answer.items.map(i => <img src={i.volumeInfo.imageLinks.thumbnail} alt="Reload your page" />)}</div>
                    <div>{answer.items.map(btn => {
                        return (
                            <div>
                                <button type="submit" >Lista želja</button>
                                <button type="submit" onClick={() => {history.push('/login')}}>Kupi</button>
                                <button type="submit" >Na čitanju</button>
                            </div>
                        )
                    })}</div>
                </div>
            ) : ('')}
        </div>
    )
}

export default Pocetna