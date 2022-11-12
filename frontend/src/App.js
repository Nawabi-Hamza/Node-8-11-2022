import React from "react"
import Show from "./BookStore/Show";
// import Form from "./BookStore/Form";
// import MyForm from "./BookStore/MyForm";
import Form from "./BookStore/NewForm";
function App(){
        return(
              <>
             <div class="container-fluid">
                  <div class="row justify-content-center">
                        <div class="col-md"><center><Show /></center></div>
                        {/* <div class="col"><Form /><hr className="w-50"/><MyForm /></div> */}
                        {/* <div class="col"><hr className="w-50"/><MyForm /></div> */}
                        <div class="col-md"><hr/><Form /><hr/>Copy&copy;Right:Hamza_Nawabi</div>
                  </div>
              </div>
              </>
             )

      }
export default App;