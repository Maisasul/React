import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Task() {
    const [usnew, setUsnew] = useState([]);
    useEffect(() => {
        getUsnew();
    }, []);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {usnew.map((n) => (
                        <div className='card col-md-4' key={n.title}>
                            <img
                                src={n.urlToImage}
                                className='card-img-top'
                                alt='...'
                                onClick={() => navigateToSingleNews(n.title)}
                                style={{ cursor: 'pointer' }}
                            />
                            <div className='card-body'>
                                <h5 className='card-title'>{n.author}</h5>
                                <h6>{n.title}</h6>
                                <p className='card-text'>{n.description}</p>
                                <button onClick={() => navigateToSingleNews(n.title)} className='btn btn-primary'>
                                    Go to SingleNews
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

    function getUsnew() {
        axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=af38014cf2124132a456299722bc8265').then((res) => {
            console.log(res.data);
            setUsnew(res.data.articles);
        });
    }

    function navigateToSingleNews(title) {
        // Change the URL to the SingleNews page
        window.location.href = `/news/${encodeURIComponent(title)}`;
    }
}
