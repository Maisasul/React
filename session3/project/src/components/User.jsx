import React from 'react'

export default function User(props) {
  return (
    <>
        <div className="card col-md-3">
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </>
  )
}
