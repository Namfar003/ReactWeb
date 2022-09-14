import React from "react";
import { Image, Row, Container, Col, Card, Button } from "react-bootstrap";
import M1 from "../Image/hotel.webp";
import M2 from "../Image/Rectangle 196.png";
import M3 from "../Image/Rectangle 200.png";
import M4 from "../Image/Rectangle 198.png";
import M5 from "../Image/Rectangle 204.png";
import '../css/style.css';

const Second = () => {
  return (
    <>
      <Container>
      <div class='row mt-5 md-5 mb-5 d-flex justify-content-around container-fluid'>
      <Card style={{ width: "13rem" }} className="mb-1 shadow-lg pt-3" >
      <Card.Img variant="pills" src={M1} style={{width:'cover'}} />
        
        <Card.Body>
          <Card.Title class="fw-bold mb-2 " style={{fontFamily:'Roboto'}}>Hotel</Card.Title>
          <Card.Text>1,342+ ແຫ່ງ</Card.Text>
          
        </Card.Body>
      </Card>
     
      {/* M2 */}
      <Card  style={{ width: "13rem" }} className="mb-1 shadow-lg pt-3">
        <Card.Img variant="pills" src={M2} style={{width:'cover'}} />
        <Card.Body>
          <Card.Title class="fw-bold mb-2" style={{fontFamily:'Roboto'}}>Resort</Card.Title>
          <Card.Text>1,342+ ແຫ່ງ</Card.Text>
          
        </Card.Body>
      </Card>
      {/* m3 */}
      <Card  style={{ width: "13rem" }} className="mb-1 shadow-lg pt-3">
        <Card.Img variant="pills" src={M3} style={{width:'cover'}} />
        <Card.Body>
          <Card.Title class="fw-bold mb-2" style={{fontFamily:'Roboto'}}>Guest House</Card.Title>
          <Card.Text>1,342+ ແຫ່ງ</Card.Text>
          
        </Card.Body>
      </Card>
      {/* m4 */}
      <Card style={{ width: "13rem" }} className="mb-1 shadow-lg pt-3">
        <Card.Img variant="pills" src={M4} style={{width:'cover'}}/>
        <Card.Body>
          <Card.Title class="fw-bold mb-2" style={{fontFamily:'Roboto'}}>Hostel</Card.Title>
          <Card.Text>1,342+ ແຫ່ງ</Card.Text>
          
        </Card.Body>
      </Card>
      {/* m5 */}
      <Card  style={{ width: "13rem" }} className="mb-1 shadow-lg pt-3">
        <Card.Img variant="pills" src={M5} className=""  style={{width:'cover'}}/>
        <Card.Body>
          <Card.Title class="fw-bold mb-2" style={{fontFamily:'Roboto'}}>Restaurant</Card.Title>
          <Card.Text>1,342+ ແຫ່ງ</Card.Text>
         
        </Card.Body>
      </Card>
      </div>
      </Container>
    </>
  );
};

export default Second;
