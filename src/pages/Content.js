import React, { useState } from "react";
import Picture from "../Image/Rectangle 31.png";
import pic4 from "../Image/pic8.jpg";
import Pic3 from "../Image/pic7.jpg";
import '../css/style.css';
import "react-calendar/dist/Calendar.css";
import { Link } from "react-router-dom";
import {
  Carousel,
  Button,
  FormControl,
  Dropdown,
  Row,
  Col,
  FloatingLabel,
  Form,
} from "react-bootstrap";

const Content = () => {
  const [date, setDate] = useState(new Date());
  const onChange = (date) => {
    setDate(date);
  };
  return (
    <>
      {/* carousel */}
      <div
        id="carouselExampleControls"
        className="carousel slide  "
        data-bs-ride="carousel"
      >
        <div class="carousel-inner   ">
          <div class="carousel-item active">
            <img
              src={Picture}
              class="d-block w-100"
              style={{ height: "400px" }}
              alt="..."
            />
            <Carousel.Caption className="mb-5 position-absolute top-auto bottom-50">
              <h3  style={{fontFamily:'Roboto'}} >Find and Plan Your Trips</h3>
              <p style={{fontFamily:'Roboto'}}>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img
              src={Pic3}
              class="d-block w-100"
              style={{ height: "400px" }}
              alt="..."
            />
            <Carousel.Caption className="mb-5 position-absolute top-auto bottom-50 ">
              <h3 style={{fontFamily:'Roboto'}}>Find and Plan Your Trips</h3>
              <p style={{fontFamily:'Roboto'}}>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img
              src={pic4}
              class="d-block w-100"
              style={{ height: "400px" }}
              alt="..."
            />
            <Carousel.Caption className="mb-5 position-absolute top-auto bottom-50">
              <h3 style={{fontFamily:'Roboto'}}>Find and Plan Your Trips</h3>
              <p style={{fontFamily:'Roboto'}}>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
        </div>



       

        {/*  search bar and select */}

        <div
          className="   mb-5 position-absolute top-50 bottom-auto  translateY(-50%) mt-5 container ms-md-5  "
          
        >
          <Row >
            <Col
              className="container d-flex justify-content-center"
              
            >
              <div className="col-6  ms-md-5 d-flex justify-content-center">
              <div
                  class="input-icons  "
                  style={{ width: "100%", marginBottom: "10px" }}
                >
                  <i
                    class="fa fa-search icon ms-md-1 mt-1 "
                    style={{
                      position: "absolute ",
                      padding: "10px",
                      minWidth: "40px",
                    }}
                  ></i>
                  <input
                    placeholder="Enter a destination or property"
                    className="form-control   "
                    style={{ paddingLeft: "46px", width: "100%",fontFamily:'Roboto' }}
                    type="search"
                  />
                  <i class="fa fa-icon"></i>
                </div>

                <div>
                  <Link to="/Search">
                    <Button
                      variant="danger"
                      style={{ width: "150px" }}
                      className="container-sm-2 ms-md-2"
                    >
                      ຄົ້ນຫາ
                    </Button>
                  </Link>
                </div>
              </div>
             
            </Col>
          </Row>
           {/* search bar and button */}
           {/*  select and calendar  */}
          {/* <Row className=" d-flex justify-content-center mb-5 ">
            <div className="d-flex justify-content-center">
              <div  class="input-icons  " >
                <FormControl 
                type='none'
                />
                   

              </div>
              <div >

              </div>
            </div>
          </Row> */}
          {/* //// */}
        </div>
      </div>
    </>
  );
};

export default Content;
