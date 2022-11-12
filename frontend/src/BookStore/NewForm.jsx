
import { useEffect, useState } from "react"
function Form(){
    const [ posts,setPosts ] = useState()
    const [ id,setId ] = useState()
    const [ name,setName ] = useState()
    const [ autor,setAutor ] = useState()
    const [ price,setPrice ] = useState()
    const [ number,setNumber ] = useState()
    const [ error,setError ] = useState("error")
    const HundleSumbit = async(e)=>{
        e.preventDefault()
        const Information = { id,name,autor,price,number }
        const Save = await fetch("http://localhost:2000/post",{
            method:"POST",
            body: JSON.stringify(Information),
            headers:{
                "content-type":"application/json"
            }
        })
        if(!Save){
            alert(error)
            setError(json.error)
        }
        const json = await Save.json()
        if(Save){
            document.getElementById('h3').innerHTML="<mark><b>"+name+"</b></mark> Book Saved ...";
          setTimeout(()=> {
            document.getElementById('h3').style="display:none;";
          }, 4000);
          setId("")
          setName("")
          setAutor("")
          setPrice("")
          setNumber("")
        }
    }
  
    useEffect(()=>{
        fetch("http://localhost:2000/findlast")
        .then(response=> response.json())
        .then((data)=> setPosts(data))
    },[id])
    
    return(<>
    <div className="form m-5">
        <center><h2>Your Book Information</h2><h3 id="h3"></h3></center>
        <form action="" onSubmit={HundleSumbit}> 
          
            <input type="text" value={id} onChange={(e)=> setId(e.target.value)} className="form-control my-3" placeholder="Please Type Your ID" />
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} className="form-control my-3" placeholder="Book Name" />
            <input type="text" value={autor} onChange={(e)=> setAutor(e.target.value)} className="form-control my-3" placeholder="Autor Name" />
            <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} className="form-control my-3" placeholder="Price" />
            <input type="text" value={number} onChange={(e)=> setNumber(e.target.value)} className="form-control my-3" placeholder="Number Of Book" />
            <button className="form-control btn btn-warning">Save Book</button>
        </form>
    </div>
    </>)
}
export default Form