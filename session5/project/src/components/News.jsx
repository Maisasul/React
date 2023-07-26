import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function News() {
    const [usnew, setUsnew] = useState([])
    useEffect(() => {
        getUsnew()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {usnew.map((n) =>
                        <div className="card col-md-4">
                            <img src={n.urlToImage} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{n.author}</h5>
                                <h6>{n.title}</h6>
                                <p className="card-text">{n.description}</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

    function getUsnew() {
        axios
            .get(
                "https://newsapi.org/v2/top-headlines?country=us&apiKey=af38014cf2124132a456299722bc8265"
            )
            .then((res) => {
                console.log(res.data.articles); 
                setUsnew(res.data.articles); 
            })
            // .catch((error) => {
            //     console.error("Error fetching news:", error);
            // });
    }
}
