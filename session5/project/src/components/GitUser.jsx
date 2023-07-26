import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios'


export default function GitUser() {
    const {register,handleSubmit} = useForm();
    const [gituser,setGituser] = useState([])
    return (
        <>
            <div className="container">
                <div className="row">
                    <form className="col-md-6" onSubmit={handleSubmit(send)}>
                        <div className="mb-3">
                            <label className="form-label">User Name</label>
                            <input {...register('user')} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                    <img src= {gituser.avatar_url} className="profileImg"/>
                    <h1>{gituser.name}</h1>
                    
                </div>
            </div>
        </>
    );

    function send(data){
        axios.get(`http://api.github.com/users/${data.user}`).then((res)=>{
            console.log(res.data)
            setGituser(res.data)
            // window.open(html_url)
        })
    }
}
