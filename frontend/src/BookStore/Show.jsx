import "./style.css"
import React, { useEffect, useState } from "react"
import Delete from "./Delete"

function Show(){
    const [ posts,setPosts ] = useState()
    useEffect(()=>{
        fetch("http://localhost:2000/find")
        .then(response=> response.json())
        .then((data)=> setPosts(data))
    },[posts])
    return(
        <>
        {posts && posts.map((post)=>(
           <div className="card m-2 w-75">
            <div className="card-header">
                <Delete />
            </div>
            <div className="card-body">
             <h1 className="fw-bold">Book: {post.name}</h1>
             <p>
                <h3>Autor: {post.autor}</h3>
                <h3>Price: {post.price}</h3>
                <h3>Autor: {post.number} ID: {post.id}</h3>
             </p>
            </div>            
           </div>
        ))}
        </>
    )
}
export default Show; 