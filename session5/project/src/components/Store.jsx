import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Store() {
    const [product, setProduct] = useState([])
    useEffect(() => {
        getProduct()
    }, [])
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {product.map((p) =>
                        <div className="card col-md-4">
                            <img src={p.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{p.title}</h5>
                                <p className="card-text">{p.description}</p>
                                <h6>{p.price}</h6>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )

    function getProduct() {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            console.log(res.data)
            setProduct(res.data)
        })
    }
}
