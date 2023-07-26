
import React, { useEffect, useState } from 'react';
import axios from 'axios';


export default function SingleNews() {
    const [news, setNews] = useState(null);
    useEffect(() => {
        getSingleNews();
    }, []);
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='card col-md-4'>
                        <img src={news.urlToImage} className='card-img-top' alt='...' />
                        <div className='card-body'>
                            <h5 className='card-title'>{news.author}</h5>
                            <h6>{news.title}</h6>
                            <p className='card-text'>{news.description}</p>
                            <a href='#' className='btn btn-primary'>
                                Go somewhere
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    function getSingleNews() {
        const params = new URLSearchParams(window.location.search);
        const title = params.get('title');
        axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=af38014cf2124132a456299722bc8265=${encodeURIComponent(title)}`).then((res) => {
            const singleNewsData = res.data;
            setNews(singleNewsData);
        })
            .catch((error) => {
                console.error('Error fetching single news:', error);
            });
    }
}
