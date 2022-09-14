import React from "react";
import { Row, Col, Image, Container } from "react-bootstrap";
import Grid1 from "../Image/Rectangle 232.png";
import Grid2 from "../Image/Rectangle 230.png";
import Grid3 from "../Image/Rectangle 234.png";
import Grid4 from "../Image/Rectangle 111.png";
import Grid5 from "../Image/Rectangle 233.png";
import Grid6 from "../Image/Rectangle 235.png";
import {Link} from 'react-router-dom';

const Pic = () => {
  return (
    <>
    <Container>
      <div  class="row  d-flex justify-content-center mt-5"  >
        <div  class="col-8 d-flex justify-content-around   " >
          <div class='col-6 me-md-2  ' >
            <Link to='/LuangPhabang'>
            <img  src={Grid1} class=" col-12 rounded float-center "   alt="..."></img>
            </Link>
          </div>
          <div class='col-3 me-md-2'  >
            <img src={Grid2} class=" col-12 rounded float-center " alt="..."></img>
          </div>
          <div class='col-3'>
            <img src={Grid3} class="col-12 rounded float-start"  alt="..."></img>
          </div>

          
        </div>
      </div>
      {/* row2 */}
        
      <div  class="row d-flex justify-content-center " >
        <div  class="col-8 d-flex justify-content-center  mt-1  ">
          {/* <div class='col-4 me-md-2 ' style={{border:'1px solid red'}}>
            <img  src={Grid4} class=" col-6  rounded float-start "   alt="..."></img>
          </div> */}

           <div class='col-4 me-md-2' >
            <img src={Grid4} class=" col-12 rounded float-start h-auto"    alt="..."></img>
          </div>
          <div class='col-4 me-md-2 h-auto'  >
            <img src={Grid5} class=" col-12 rounded float-start h-auto"    alt="..."></img>
          </div>
          <div class='col-4'>
            <img src={Grid6} class="col-12  rounded float-start"   alt="..."></img>
          </div>

          
        </div>
      </div>

      

    </Container>

    <div className="text-center fw-bold" style={{marginTop:'200px'}}>
      <h6 class='fw-bold' > 
       ໂຮງແຮມ ແລະ ທີ່ພັກ
      </h6>
    </div>

    </>
    
  
  );
};

export default Pic;
