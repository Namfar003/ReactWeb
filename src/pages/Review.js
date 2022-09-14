import React from "react";
import { Col, ProgressBar } from "react-bootstrap";

const Review = () => {
  return (
    <>
      <Col className="container">
        <p className="fw-bold">ຮີວິວ</p>
      </Col>
      <Col className="d-flex   container  mb-5">
        <Col className="d-flex flex-column justify-content-center align-items-center">
          <div
            className="text-center bg-danger d-flex align-items-center"
            style={{
              padding: "auto",
              borderTopLeftRadius: "50px",
              borderTopRightRadius: "50px",
              borderBottomRightRadius: "50px",
              border: "1px solid red",
              width: "60px",
              height: "60px",
            }}
          >
            <h5 className="col-12 text-white">8.6</h5>
          </div>

          <div className="d-flex flex-column h-auto">
            <p
              className="h-auto text-center"
              style={{ fontFamily: "Roboto", padding: "0px" }}
            >
              Wonderful
              <br />
              <span style={{ fontSize: "9px" }}>349 review</span>
            </p>
          </div>
        </Col>
        <Col>
          <label className=""> Amazing</label>
          <ProgressBar variant="primary" className="me-md-2" now={70} />

          <label className="mt-3">Good</label>
          <ProgressBar variant="primary" className="me-md-2" now={60} />
        </Col>

        <Col>
          <label className=""> Wonderful</label>
          <ProgressBar variant="success" className="me-md-2" now={90} />

          <label className="mt-3">Not Bad</label>
          <ProgressBar variant="warning" className="me-md-2" now={30} />
        </Col>
        <Col>
          <label className=""> Excellent</label>
          <ProgressBar variant="success" className="me-md-2" now={80} />

          <label className="mt-3">Bad</label>
          <ProgressBar variant="danger" className="me-md-2" now={20} />
        </Col>
        <Col>
          <label className="">Very Good</label>
          <ProgressBar variant="warning" className="me-md-2" now={50} />

          <label className="mt-3">Worst</label>
          <ProgressBar variant="danger" className="me-md-2" now={10} />
        </Col>
      </Col>
    </>
  );
};

export default Review;
