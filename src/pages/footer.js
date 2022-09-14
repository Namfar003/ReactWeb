import React from "react";
import { Container,Button,Row,Col,Figure } from "react-bootstrap";
import Icon from "../Image/Group 957.png";
import Icon1 from "../Image/Group 931.png";
import Icon2 from "../Image/Group 965.png";
import Icon3 from "../Image/toy.png";
import '../css/style.css';


const footer = () => {
  return (
    <>
    <Container>
      <div  style={{marginTop:'150px'}}>
        <div className="container-col-10 d-flex justify-content-center ">
          <div class="col-3 d-flex justify-content-center ">
            <img
              src={Icon}
              class=" col-4 rounded float-start h-auto "
              alt="..."
            ></img>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <img
              src={Icon1}
              class="col-4 rounded float-start h-auto"
              atl="..."
            ></img>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <img
              src={Icon2}
              class="col-3 rounded float-start h-auto"
              atl="..."
            ></img>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <img
              src={Icon3}
              class="col-4 rounded float-start h-auto"
              atl="..."
            ></img>
          </div>
        </div>
      </div>

      {/* text */}

      <div class="row mt-5">
        <div className="container-col-10 d-flex justify-content-center ">
          <div class="col-3 d-flex justify-content-center">
            <h6 class='fw-bold' >ກົດໝາຍວ່າດ້ວຍການເຂົ້າ-ອອກປະເທດ</h6>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <h6 class='fw-bold'>ກົດໝາຍວ່າດ້ວຍການຈາລະຈອນ</h6>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <h6 class='fw-bold'>ກົດໝາຍວ່າດ້ວຍສິດທິພົນລະເມືອງ</h6>
          </div>
          <div class="col-3 d-flex justify-content-center">
            <h6 class='fw-bold'>ກົດໝາຍວ່າດ້ວຍສິ່ງເສບຕິດ</h6>
          </div>
        </div>
      </div>

    

      <div  className="text-center" style={{ marginTop: "50px" }}>
     <Button variant="outline-danger fw-bold" style={{border:'3px solid'}} >ກວດສອບກົດໝາຍໝົດຂອງ ສ ປ ປ ລາວ</Button>
      </div>

    
     </Container>

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



     {/* example */}

     
    </>
  );
};

export default footer;
