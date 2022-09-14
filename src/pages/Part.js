import React, { useState } from "react";
import "../css/style.css";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";
import { HiLocationMarker } from "react-icons/hi";
import { HiFlag } from "react-icons/hi";
import Map from "../Image/Rectangle 247.png";
import {FaSwimmingPool} from 'react-icons/fa';
import {MdCarRepair} from 'react-icons/md';
import {BiWifi} from 'react-icons/bi';
import {ImSpoonKnife} from 'react-icons/im';
import Table from "./Tables";
import Review from './Review';
import Profile from './Profile';
import Last from './Last';
import Rule from './Rule';
import {
  Button,
  Image,
  Modal,
  FormControl,
  Form,
  FloatingLabel,
  Row,
  Col,
  Carousel,
} from "react-bootstrap";
import D1 from "../Image/Rectangle 213.png";
import D2 from "../Image/Rectangle 214.png";
import D3 from "../Image/Rectangle 215.png";
import Picture from "../Image/Rectangle 202.png";
import pic4 from "../Image/pic8.jpg";
import Pic3 from "../Image/pic7.jpg";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";

import Water from "../Image/wt4.jpg";
const Part = () => {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <>
      <div>
        <Navbar
          bg="light"
          expand="lg"
          style={{ height: "auto" }}
          className="d-flex justify-content-between"
        >
          <div className="d-flex justify-content-between ">
            <div className="ms-md-5">
              <Image src={Pictures} className="me-md-4" />
            </div>
            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
                  <Link to="/" style={{ textDecoration: "none" }}>
                    <Nav.Link href="#link" className="pe-4 fw-bold">
                      ໂຮງແຮມ ແລະ ທີ່ພັກ
                    </Nav.Link>
                  </Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ຂ່າວສານ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ເຂົ້າຮ່ວມກັບເຮົາ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ກ່ຽວກັບເຮົາ
                  </Nav.Link>
                  <Nav.Link href="#link" className="pe-4  fw-bold">
                    ສູນຊ່ວຍເຫຼືອ
                  </Nav.Link>
                  <Image
                    onClick={handle}
                    src={Pic}
                    style={{
                      height: "25px",
                      width: "37.5px",
                      cursor: "pointer",
                    }}
                    className="mt-2"
                  />

                  {/* modal */}
                  <Modal show={show} onHide={handle}>
                    <Modal.Header closeButton>
                      <Modal.Title>ພາສາ</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <img src={Pic} />
                    </Modal.Body>
                  </Modal>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
          <Link to="/Login">
            <Button className="me-md-5" type="button" variant="outline-danger">
              ສ້າງບັນຊີ
            </Button>
          </Link>
        </Navbar>
        {/* carousel */}
        <div class="carousel-inner   ">
          <div class="carousel-item active">
            <img
              src={Water}
              class="d-block w-100"
              style={{ height: "300px" }}
              alt="..."
            />
            <Carousel.Caption className="mb-5 position-absolute top-50 start-50 bottom-80 translate-middle">
              <h3>Find and Plan Your Trips</h3>
              <p>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img src={Pic3} class="d-block w-100" style={{}} alt="..." />
            <Carousel.Caption className="mb-5 position-absolute top-50 bottom-50 ">
              <h3>Find and Plan Your Trips</h3>
              <p>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
          <div class="carousel-item">
            <img src={pic4} class="d-block w-100" style={{}} alt="..." />
            <Carousel.Caption className="mb-5 position-absolute top-50 bottom-50">
              <h3>Find and Plan Your Trips</h3>
              <p>Find the best prices on 10,000+ properties, All over Laos</p>
            </Carousel.Caption>
          </div>
        </div>
      </div>
      {/* content */}

      <div className="  container d-flex justify-content-center  mt-5 mb-5 ">
        <Col className="col-md-4    " >
          <div
            className="col-6  d-flex align-item-center "
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <Image className="col-12" src={Picture}></Image>
          </div>
          <div
            className="col-6 mt-1 mb-2 d-flex  justify-content-between "
            style={{ width: "100%", height: "auto", display: "block" }}
          >
            <div class="col-4   ">
              <img src={D1} class=" col-12  " alt="..."></img>
            </div>
            <div class="col-4  ps-1  ">
              <img src={D2} class=" col-12  " alt="..."></img>
            </div>
            <div class="col-4 ps-1">
              <img src={D3} class="col-12 " alt="..."></img>
            </div>
          </div>
          {/* col2 */}
        </Col>
        <div className="col-md-8">
          <Row className="container" >
            <Col md={8} className="  ">
              <Col className="d-flex justify-content-around">
                <p className="fw-bold fs-5 me-md-5 " style={{ fontFamily: "Roboto" }}>
                  Champasuk Grand Hotel
                </p>
                <ReactStars
                  className="pe-2 pt-3 col-12"
                  count={5}
                  onChange={ratingChanged}
                  size={24}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="#ffd700"
                />
              </Col>
              <Col>
                <p className="ms-md-2">
                  <HiLocationMarker
                    className="text-danger"
                    style={{ fontFamily: "Roboto" }}
                  />
                  Pakse, Champasuk, Lao
                </p>
              </Col>
            </Col>
            <Col md={4} className=" d-flex justify-content-center">
              <div className="col-9 ">
                <div className="container mt-2  text-end">
                  <h5 className="fw-bold" style={{ fontFamily: "Roboto" }}>
                    Wonderful
                  </h5>
                </div>

                <div className=" me-md-1 text-end">
                  <p style={{ fontSize: "15px", fontFamily: "Roboto" }}>
                    349 review
                  </p>
                </div>
              </div>

              <div className="col-3 ">
                <div
                  className="text-center bg-danger"
                  style={{
                    padding: "10px",
                    borderTopLeftRadius: "50px",
                    borderTopRightRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <h5 className="col-12 text-white">8.6</h5>
                </div>
              </div>
            </Col>
            <Col className="container">
              <div className="d-flex justify-content-start mb-2   container-md ">
                <div
                  className=" col-3 ms-md-1 text-center  "
                  style={{ border: "1px solid #bdc3c7", height: "25px" }}
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    Swimming pool
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center  "
                  style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    Parking
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center "
                  style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    Internet
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center "
                  style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                >
                  <p
                    className="col-12  "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    Breakfast
                  </p>
                </div>
                <div
                  className=" col-2  ms-md-1 text-center "
                  style={{
                    border: "1px solid #bdc3c7 ",
                    height: "25px",
                    width: "25px",
                  }}
                >
                  <p
                    className="col-8  "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    2+
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Col className="container fw-bold">
            <p className="container ">
              <HiFlag className="text-danger" />
              ເຂົ້າຮ່ວມກັບ Help Me Tourist ຕັ້ງແຕ່ 7 Jul.2020
            </p>

            {/* ddd */}

            <Col className="container position-relative ">
              <img src={Map} variant="pills" className="container" />
              <div className="d-flex justify-content-center  mt-2 ">
                <p className="container">
                  <HiLocationMarker className="text-danger" />
                  ຢູ່ໃນເຂດຕົວເມືອງ
                </p>

                <Button
                  className="bg-danger container me-md-4 "
                  style={{ width: "200px" }}
                >
                  ກວດສອບ
                </Button>
              </div>
            </Col>
          </Col>
        </div>
      </div>

      <Col className="container mt-4 fw-bold">
       
        <p>ກ່ຽວກັບທີ່ພັກ</p>
        <p style={{fontFamily:'Roboto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque aliquid, ullam nesciunt perferendis quia suscipit beatae ipsum eius optio magnam possimus explicabo reprehenderit a minima voluptatibus cumque id doloribus.</p>
        <p style={{fontFamily:'Roboto'}} > Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque aliquid, ullam nesciunt perferendis quia suscipit beatae ipsum eius optio magnam possimus explicabo reprehenderit a minima voluptatibus cumque id doloribus.</p>
        <p style={{fontFamily:'Roboto'}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore itaque aliquid, ullam nesciunt perferendis quia suscipit beatae ipsum eius optio magnam possimus explicabo reprehenderit a minima voluptatibus cumque id doloribus.</p>
         
         
      </Col>
      <Col className="container">
              <div className="d-flex justify-content-start mb-2   container-md ">
                <div
                  className=" col-3 ms-md-1 text-center  "
                  
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    <FaSwimmingPool
                    className="me-md-2 text-danger"
                    style={{fontSize:'20px'}} 
                    />
                    Swimming 
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center  "
                  
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    <MdCarRepair
                    className="me-md-2 text-danger"
                     style={{fontSize:'20px'}} 
                    />
                    Parking
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center "
                 
                >
                  <p
                    className="col-12 "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    <BiWifi
                    className="me-md-2 text-danger"
                     style={{fontSize:'20px'}} 
                    />
                    Wireless internet(wifi)
                  </p>
                </div>
                <div
                  className=" col-2 ms-md-1 text-center "
                  
                >
                  <p
                    className="col-12   "
                    style={{ fontSize: "10px", fontFamily: "Roboto" }}
                  >
                    <ImSpoonKnife
                    className="me-md-2 text-danger"
                    style={{fontSize:'15px'}} />
                    Breakfast
                  </p>
                </div>
                
              </div>
            </Col>

            <Table/>
            <Review/>
            <Profile/>
            <Last/>
           <Rule/>
            
    </>
  );
};

export default Part;
