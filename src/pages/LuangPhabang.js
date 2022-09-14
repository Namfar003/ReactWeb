

import React, { useState } from "react";
import '../css/style.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Picture from "../Image/Rectangle 202.png";
import pic4 from "../Image/pic8.jpg";
import Pic3 from "../Image/pic7.jpg";
import D1 from "../Image/Rectangle 213.png";
import D2 from "../Image/Rectangle 214.png";
import D3 from "../Image/Rectangle 215.png";
import { Carousel } from "react-bootstrap";
import Water from "../Image/wt4.jpg";
import ReactStars from "react-rating-stars-component";
import { HiLocationMarker } from "react-icons/hi";
import Pagination from 'react-bootstrap/Pagination'; 
import {
  Button,
  Image,
  Modal,
  FormControl,
  Form,
  FloatingLabel,
  Row,Col
} from "react-bootstrap";
import Pictures from "../Image/LOGO.png";
import Pic from "../Image/Flag_of_Laos 1.png";

function LuangPhabang() {
  const [show, setShow] = useState(false);
  const handle = () => setShow(!show);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}

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

        {/* content ////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}

        <div className="  container  mb-5 d-flex justify-content-center">
          <div className="col-md-12 d-flex justify-content-evenly  ">
            <Col md={4}  
              className=" container mt-5 "
              style={{
                border: "1px solid #bdc3c7",
                borderRadius: "10px",
                paddingTop: "20px",
                
              }}
            >
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
                    placeholder="search"
                    className="form-control   "
                    style={{ paddingLeft: "46px", width: "100%",fontFamily:'Roboto' }}
                    type="search"
                  />
                  <i class="fa fa-icon"></i>
                </div>
                <div className='mt-1'>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Works with selects"
                
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">ຜຼ້ໃຫຍ່</option>
                  <option value="2">ເດັກນ້ອຍ</option>
                  <option value="3">ຄົນດຽວ</option>
                  <option value="4">ຫຼາຍຄົນ</option>
                </Form.Select>
              </FloatingLabel>
              </div>

              {/* tap2 */}
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Works with selects"
                className=" mt-4"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">ຜຼ້ໃຫຍ່</option>
                  <option value="2">ເດັກນ້ອຍ</option>
                  <option value="3">ຄົນດຽວ</option>
                  <option value="4">ຫຼາຍຄົນ</option>
                </Form.Select>
              </FloatingLabel>
              {/* tap3 */}
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Works with selects"
                className=" mt-4"
              >
                <Form.Select aria-label="Floating label select example">
                  <option>Open this select menu</option>
                  <option value="1">ຜຼ້ໃຫຍ່</option>
                  <option value="2">ເດັກນ້ອຍ</option>
                  <option value="3">ຄົນດຽວ</option>
                  <option value="4">ຫຼາຍຄົນ</option>
                </Form.Select>
              </FloatingLabel>
              <div className="mt-4 mb-4 d-flex justify-content-center ">
                <Button variant="danger" style={{ width: "150px" }}>
                  ຄົ້ນຫາ
                </Button>
              </div>
              <hr />

              <div className="">
                <p className="fw-bold">ຊ່ວງລາຄາ</p>
                <div
                  className="row-col- d-flex justify-content-center "
                  style={{}}
                >
                  <div className="col-6 ">
                    <input placeholder="min" />
                  </div>
                  <div className="col-6 ">
                    <input placeholder="max." />
                  </div>
                </div>
                {/* checks box */}
                <div class="form-check mt-3 d-flex  align-items-center ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label ms-md-2"
                    for="flexCheckDefault"
                  >
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </label>
                </div>
                {/* check2 */}
                <div class="form-check mt-3 d-flex  align-items-center ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label ms-md-2"
                    for="flexCheckDefault"
                  >
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </label>
                </div>
                {/* check3 */}
                <div class="form-check mt-3 d-flex  align-items-center ">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    class="form-check-label ms-md-2"
                    for="flexCheckDefault"
                  >
                    <ReactStars
                      count={5}
                      onChange={ratingChanged}
                      size={24}
                      isHalf={true}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                  </label>
                </div>
                {/* check4 */}
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Swimming pool
                  </label>
                </div>
                {/* check5 */}
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Parking
                  </label>
                </div>
                {/* check6 */}
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Internet
                  </label>
                </div>
                {/* check7 */}
                <div class="form-check mt-3">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Breakfast
                  </label>
                </div>
                {/* check8 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Dinner
                  </label>
                </div>

                <hr />
                {/* part2 */}
                <div>
                  <p className="fw-bold">ໄລຍະຫ່າງຈາກຕົວເມືອງ</p>
                </div>
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ເຂດຕົວເມືອງ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຫ່າງຈາກຕົວເມືອງ 2 km
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຫ່າງຈາກຕົວເມືອງ 5 km
                  </label>
                </div>
                {/* c3 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຫ່າງຈາກຕົວເມືອງ 10 km
                  </label>
                </div>
                {/* c4 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຫ່າງຈາກຕົວເມືອງ 15 km
                  </label>
                </div>

                <hr />

                {/* part3 */}

                <div>
                  <p className="fw-bold">ສິ່ງອຳນວຍຄວາມສະດວກ</p>
                </div>
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ເຄື່ອງປັບອາກາດ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຕູ້ເຢັນ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ໂທລະພາບ
                  </label>
                </div>
                {/* c3 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ອ່າງອາບນ້ຳ
                  </label>
                </div>
                {/* c4 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ເຮືອນຄົວ
                  </label>
                </div>

                <hr />

                {/* part4 */}
                <div>
                  <p className="fw-bold">ຂະໜາດຕຽງ</p>
                </div>
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຕຽງດ່ຽວສຳລັບສອງຄົນ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຕຽງໃຫຍ່ຂະໜາດພິເສດ King size
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຕຽງຂະໜາດໃຫຍ່ Double size
                  </label>
                </div>
                {/* c3 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    ຕຽງຂະນາດໃຫຍ່ Queen size
                  </label>
                </div>
                <hr />

                {/* part5 */}
                <div>
                  <p className="fw-bold">ຈຳນວນຫ້ອງນ້ຳ</p>
                </div>
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    1 ຫ້ອງນ້ຳ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    2 ຫ້ອງນ້ຳ
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    3 ຫ້ອງນ້ຳ
                  </label>
                </div>

                <hr />

                {/* part6 */}
                <div>
                  <p className="fw-bold">ປະເພດຂໍ້ມູນ</p>
                </div>
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Hotel
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Resort
                  </label>
                </div>
                {/* c2 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Guest House
                  </label>
                </div>
                {/* c3 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Hostel
                  </label>
                </div>
                {/* c4 */}
                <div class="form-check mt-3 mb-4">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    Restaurant
                  </label>
                </div>
                {/* c5 */}

                {/* </cols1> */}
              </div>
            </Col>




{/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

            {/* div1 */}
            <Col md={8}   className="mt-5 container ">
              <Link to='/Part' style={{textDecoration:'none'}}>
              <div
                className="col-md-12 col-sm-12 d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 ">
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  " >
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ  <del className="text-danger" >$50</del></h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>

              </Link>
              {/* div 2*/}
              <div
                className="col-md-12 col-sm-12  mt-3  d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  " >
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del></h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              
              {/* div3 */}
              <div
                className="col-md-12 col-sm-12  mt-3   d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  ">
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del> </h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              {/* div4 */}
              <div
                className="col-md-12 col-sm-12   mt-3  d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  ">
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del> </h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              {/* div5 */}
              <div
                className="col-md-12 col-sm-12  mt-3   d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  " >
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del> </h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              {/* div6 */}
              <div
                className="col-md-12 col-sm-12  mt-3   d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  ">
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del> </h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              {/* div7 */}
              <div
                className="col-md-12 col-sm-12  mt-3   d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />{" "}
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold">Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  ">
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del></h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>
              {/* div8 */}
              <div
                className="col-md-12 col-sm-12  mt-3  d-flex justify-content-center container"
                style={{
                  border: "1px solid #bdc3c7",
                  borderRadius: "10px",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                }}
              >
                <div className="col-4">
                  <div className="col-12 ">
                    <Image className="col-12" src={Picture}></Image>
                  </div>
                  <div
                    className="col-8 mt-1 mb-2 d-flex  justify-content-between "
                    style={{ width: "100%" }}
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
                </div>
                {/* center */}
                <div className="col-5">
                  <div className="d-flex mt-3 mb-2">
                    <div className="col-8">
                      {" "}
                      <h5 className=" col-12 fw-bold ps-2 pt-1">
                        Champasuk Grand Hotel
                      </h5>
                    </div>
                    <div className="ps-1 col-4">
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
                    </div>
                  </div>
                  <div className="d-flex ">
                    <div className="ps-2 col-1 ">
                      <HiLocationMarker color="red" />
                    </div>
                    <div className="pt-1 ps-1 col-10 me-md-5 ">
                      <h6> Pakse, Champasuk, Lao </h6>
                    </div>
                  </div>
                  <div className="d-flex justify-content-evenly mb-2   container-md ">
                    <div
                      className=" col-3 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Swimming pool
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center  "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Parking
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12 " style={{ fontSize: "10px" }}>
                        Internet
                      </p>
                    </div>
                    <div
                      className=" col-2 ms-md-1 text-center "
                      style={{ border: "1px solid #bdc3c7 ", height: "25px" }}
                    >
                      <p className="col-12  " style={{ fontSize: "10px" }}>
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
                      <p className="col-8  " style={{ fontSize: "10px" }}>
                        2+
                      </p>
                    </div>
                    <div className="col-1"></div>
                  </div>
                  <div className="col-12 container">
                    <div>
                      <p className="col-12  " style={{ fontSize: "10px",fontFamily:'Roboto' }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Molestiae minus molestias, nam consectetur aspernatur et
                        hic assumenda explicabo recusandae nobis delectus
                        reprehenderit. Possimus maxime vel quisquam vitae, rerum
                        veniam dolores!
                      </p>
                    </div>
                  </div>
                </div>
                {/* end */}
                <div className="col-3 " >
                  <div className="d-flex ">
                    <div className="col-9 " >
                      <div className="container mt-2  text-end">
                        <h5 className="fw-bold font-" >Wonderful</h5>
                      </div>

                      <div className=" me-md-1 text-end">
                       
                        <p style={{ fontSize: "15px" }}>349 review</p>
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
                  </div>
                  {/* // */}
                 
                  <div className=" container mt-4  " >
                    <div className="text-center"><h5>ຈາກລາຄາເດີມ <del className="text-danger" >$50</del> </h5></div>
                    <div className="text-center fw-bold "> <h6 style={{fontSize:'25px'}}> ລາຄາເລີ່ມຕົ້ນ $40</h6></div>
                   <div className="text-center" ><p style={{fontSize:'15px'}}>1ຄືນ, ຜູ້ໃຫຍ່ 2</p></div>
                   <div className="text-center"><Button variant="danger" style={{width:'100%'}}>ເລືອກຫ້ອງ</Button></div>
                    
                    
                  </div>
                 
                </div>
              </div>

            </Col >



            {/* div2 */}
           
           
          </div>
        </div>

   {/*pagination  */}
   <div className="container d-flex justify-content-end">

   <Pagination className="">
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item disabled>{1}</Pagination.Item>
      <Pagination.Next />
      <Pagination.Last />
     
    </Pagination>
   </div>
  
        {/* footer */}

        <div>
        <Row  style={{backgroundColor:'#dfe6e9' , marginTop:'100px'}}>
      <Col md={9} className='d-flex justify-content-center container mt-5'>
      <Col md={3} className='d-flex flex-column  align-items-center '>
      <section>
      <p class='fw-bold' style={{fontFamily:'Roboto'}}>Help</p>
           <p style={{fontFamily:'Roboto'}}>Help center</p>
           <p style={{fontFamily:'Roboto'}}>FQAs</p>
           <p style={{fontFamily:'Roboto'}}>Privacy policy</p>
           <p style={{fontFamily:'Roboto'}}>Cookie policy</p>
           <p style={{fontFamily:'Roboto'}}>Terms of use</p>
      </section>
      </Col>
      <Col md={3} className='d-flex flex-column  align-items-center ' >
     <section>
     <p class='fw-bold' style={{fontFamily:'Roboto'}}>About us</p>
            <p style={{fontFamily:'Roboto'}}>About helper me tourist</p>
            <p style={{fontFamily:'Roboto'}}>Developer team</p>
     </section>
      </Col>
      <Col md={3} className='d-flex flex-column  align-items-center '>
      <section>
      <p class='fw-bold' style={{fontFamily:'Roboto'}}>Partner with us</p>
         <p style={{fontFamily:'Roboto'}}>Loca </p>
         <p style={{fontFamily:'Roboto'}}>Wayha</p>
         <p style={{fontFamily:'Roboto'}}>New pay</p>
      </section>
      </Col>
      <Col md={3} className='d-flex flex-column  align-items-center '>
     <section>
     <p class='fw-bold' style={{fontFamily:'Roboto'}}>Social media</p>
           <p style={{fontFamily:'Roboto'}}>Facebook</p>
           <p style={{fontFamily:'Roboto'}}>Twitter</p>
           <p style={{fontFamily:'Roboto'}}>Instagram</p>
     </section>
      </Col>
      </Col>
     </Row>


        </div>
{/*pagition */}
       
      
      </div>
    
    </>
  );
}

export default LuangPhabang;
