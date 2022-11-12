import { useState } from 'react'
import "./style.css"

function Delete(){
    const [ color,setColor ] = useState(false)
    const [ count,setCount ] = useState(0)
    const [ thro,setThro ] = useState(false)
    const SingleClick =()=>{
        setColor(true) 
        setCount((count + 1)/(count + 1))
    }
    const DubleClick =()=>{
        setColor(false)
        setCount(count *0)
    }
    const Buy =()=>{
        setThro(true)
    }
    const dontBuy =()=>{
        setThro(false)
    }
    return(<>  
    <div className="container-fluid-md">
        <div className="row">
            <div className="col-sm-6 col-lg-6">
             <lable style={color? {color:"yellow"}:null} className="btn mx-1" onClick={()=> SingleClick()} onDoubleClick={()=> DubleClick()}> ❤ Like {count}</lable>
            </div>
            <div className="col-sm-6 col-lg-6">
              <button className="form-control btn btn-dark mx-1" style={thro? {textDecoration:"line-through",backgroundColor:'gray'}:null} onClick={()=> Buy()} onDoubleClick={()=> dontBuy()}>Buy Book</button>
            </div>
            <div className="col-sm-6 col-lg-6">
              <button className="form-control btn btn-dark mx-1"  disabled >Update User</button>
            </div>
            <div className="col-sm-6 col-lg-6">
               <button className="form-control btn btn-warning mx-1" disabled >Delete User</button>
            </div>
        </div>
    </div>
  
    </>)
}
export default Delete