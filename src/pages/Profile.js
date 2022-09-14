import React from "react";
import { Col, Button, Row,Image } from "react-bootstrap";   
import F1 from '../Image/Group 1075.png';
import F2 from '../Image/Group 1076.png';
import F3 from '../Image/Group 1078.png';
import F4 from '../Image/Ellipse 4.png';
import {BiDislike} from 'react-icons/bi';
import {BiLike} from 'react-icons/bi';


const Profile = () => {
  return (
    <>
      <Col
        className="d-flex justify-content-between container mb-5 w-auto "
        
      >
        <Col md={4} className='container me-md-2' style={{ border: "2px solid #dfe6e9",borderRadius:'10px' }}>
          <div className="d-flex mt-3">
            <div
              className=" bg-success text-center  "
              style={{
                padding: "auto",
                borderRadius:'50px',
                width: "60px",
                height: "60px",


              }}
            >
              <p className="text-white text-center fw-bold pt-3  " style={{fontFamily:'Roboto'}} >A</p>
            </div>
            <div className="ms-md-3 ">
              <p className="fw-bold" style={{fontFamily:'Roboto'}}>  Anya Forger</p>
              <div className="d-flex justify-content-center">
              <img src={F1}  className='' style={{height:'20px',width:'auto'}}/>
              <p className="ms-md-1 "  style={{fontFamily:'Roboto',color:'#b2bec3'}}>France</p>
              </div>
            </div>
          </div>

          <div>
            <p style={{fontFamily:'Roboto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi odit reiciendis asperiores libero deserunt voluptate pariatur, veniam consectetur dicta? Id, voluptates. Officiis sint iste veritatis alias expedita provident atque?</p>
          </div>

          <div className=" mb-3 d-flex justify-content-between">
           <p className="text-danger" style={{fontFamily:'Roboto'}} > Read more</p>
            <div className="fs-2 d-flex " >
                <BiDislike/>
                <BiLike   />
            </div>
          </div>
        </Col>
        <Col md={4} className='container me-md-2' style={{ border: "2px solid #dfe6e9",borderRadius:'10px' }}>

        <div className="d-flex mt-3">
            <div
              className="   "
              style={{
                
                width: "60px",
                height: "60px",


              }}
            >
              {/* <p className="text-white text-center fw-bold pt-3  " style={{fontFamily:'Roboto'}} >A</p> */}

              <img src={F4} style={{width:'70px',height:'70px'}} /> 
            </div>
            <div className="ms-md-3 ">
              <p className="fw-bold" style={{fontFamily:'Roboto'}}>  Your Forger</p>
              <div className="d-flex justify-content-center">
              <img src={F2}  className='' style={{height:'20px',width:'auto'}}/>
              <p className="ms-md-1 "  style={{fontFamily:'Roboto',color:'#b2bec3'}}>Germany</p>
              </div>
            </div>
          </div>

          <div>
            <p style={{fontFamily:'Roboto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi odit reiciendis asperiores libero deserunt voluptate pariatur, veniam consectetur dicta? Id, voluptates. Officiis sint iste veritatis alias expedita provident atque?</p>
          </div>

          <div className=" mb-3 d-flex justify-content-between">
           <p className="text-danger" style={{fontFamily:'Roboto'}} > Read more</p>
            <div className="fs-2 d-flex " >
                <BiDislike/>
                <BiLike   />
            </div>
          </div>

        </Col>
        <Col md={4} className='container ' style={{ border: "2px solid #dfe6e9",borderRadius:'10px' }}>

        <div className="d-flex mt-3">
            <div
              className=" bg-warning text-center  "
              style={{
                padding: "auto",
                borderRadius:'50px',
                width: "60px",
                height: "60px",


              }}
            >
              <p className="text-white text-center fw-bold pt-3  " style={{fontFamily:'Roboto'}} >L</p>
            </div>
            <div className="ms-md-3 ">
              <p className="fw-bold" style={{fontFamily:'Roboto'}}>Loid Forger</p>
              <div className="d-flex justify-content-center">
              <img src={F3}  className='' style={{height:'20px',width:'auto'}}/>
              <p className="ms-md-1 "  style={{fontFamily:'Roboto',color:'#b2bec3'}}>Switzerland</p>
              </div>
            </div>
          </div>

          <div>
            <p style={{fontFamily:'Roboto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus commodi odit reiciendis asperiores libero deserunt voluptate pariatur, veniam consectetur dicta? Id, voluptates. Officiis sint iste veritatis alias expedita provident atque?</p>
          </div>

          <div className=" mb-3 d-flex justify-content-between">
           <p className="text-danger" style={{fontFamily:'Roboto'}} > Read more</p>
            <div className="fs-2 d-flex " >
                <BiDislike/>
                <BiLike   />
            </div>
          </div>
        </Col>
      </Col>

      <div  className="text-center mb-5 " style={{ marginTop: "50px"  }}>
     <Button variant="outline-danger fw-bold" style={{width:'200px',fontFamily:'Roboto'}} >Read all review</Button>
      </div>
    </>
  );
};

export default Profile;
