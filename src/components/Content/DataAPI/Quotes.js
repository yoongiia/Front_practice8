import React, { useState, useEffect} from 'react';
import Quote from './Quote/Quote';
import getId from '../../../helpers';
import './quotes.css';

const Quotes = () => {
    const [quotes, setQuotes] = useState([]);
    const [url, setUrl] = useState(new URL(`https://quote-garden.onrender.com/api/v3/quotes/random`));
    const keys = getId();
    
    const getQuotes = () => {
        fetch(url)
            .then((response) => response.json())
            .then((result) => {
                setQuotes(result["data"]);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setQuotes([]);
            });
    };

    const setParams = (value) => {
        const newURL = new URL(url.href)
        newURL.searchParams.set('count', Math.abs(value));
        setUrl(newURL);
    }
    
    const clearQuotes = () => {
        setQuotes([]);
    };

    useEffect(() => {
        getQuotes();
    }, []);

    return (
        <div className='wrapper_quotes'>
            <button onClick={getQuotes} className='button_add'>Generate quotes</button>
            <label htmlFor="count">Select number of Quotes</label>
            <input type="number" name='count' onChange={(e) => setParams(e.target.value)} min={1}/>
            {quotes.map((text) => (
                <Quote text={text["quoteText"]} key={keys()} />
            ))}
            {quotes.length > 0 && <button onClick={clearQuotes} className='button_clear'>Clear quotes</button>}
        </div>
    );
}

export default Quotes;