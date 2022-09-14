import React from "react";
import { Image,Row,Col } from "react-bootstrap";
import { BsFileArrowDownFill } from "react-icons/bs";
import { BsFileArrowUpFill } from "react-icons/bs";
import { BsInfoLg } from "react-icons/bs";
import {MdFamilyRestroom} from 'react-icons/md';
import {RiUserFill} from 'react-icons/ri';
import {MdPets} from 'react-icons/md';
import {BsFillCreditCardFill} from 'react-icons/bs';
import M1 from '../Image/MasterCard1 1.png';
import M2 from '../Image/Group 1065.png';
import M3 from '../Image/Group 1066.png';
import M4 from '../Image/Group 1067.png';
import M5 from '../Image/Group 1068.png';
import M6 from '../Image/download 1.png';
import M7 from '../Image/Group 1069.png';

function Rule() {
  return (
    <>
      <div className="container mt-3 mb-5">
        <p className="fw-bold">ກົດລະບຽບທີ່ພັກ</p>
      </div>

      <div className="container mb-5">
        <div className="d-flex">
          <BsFileArrowDownFill className="text-danger fs-5" />
          <p
            className=" text-danger ms-md-2"
            style={{ fontFamily: "Roboto" }}
          >
            Check In
          </p>
        </div>
        <div className="d-flex mt-3">
          <div className="col-md-3 d-flex">

            <div className="col-1"> <BsFileArrowUpFill className="text-danger fs-5" /></div>
            <div  className="col-11"> <p
            className=" text-danger ms-md-2"
            style={{ fontFamily: "Roboto" }}
          >
            Check Out
          </p></div>
         </div>
         <div className="col-md-9 d-flex justify-content-evenly"> <p className="fs-5 fw-bold" style={{color:'#b2bec3'}} >|</p>
        {/* rulers */}
         </div>
         

        </div>
        <div className="d-flex mt-3">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
              <BsInfoLg
                className="bg-danger me-md-5 text-white mt-1 "
                style={{ borderRadius: "50%" }}
              />
            </div>

            <div className="col-11">
              
              <p >
                ການຊຳລະລ່ວງໜ້າ /
              </p>
              <p className="" style={{marginTop:'-15px'}}> ການຍົກເລີກການຈອງ</p>
            </div>
          </div>
          <div className="col-md-9">
            <p style={{fontFamily:'Roboto',color:'#a4b0be'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur eligendi animi nihil labore ex aperiam distinctio
              itaque repudiandae, dicta velit molestiae fuga nemo unde, enim
              minima quidem vitae alias consequuntur!
            </p>
          </div>
        </div>

        {/* ການຂໍເງິນຄືນ */}
        <div className="d-flex mt-3">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
              <BsInfoLg
                className="bg-danger me-md-5 text-white mt-1 "
                style={{ borderRadius: "50%" }}
              />
            </div>

            <div className="col-11">
              
              <p >
                ການຂໍເງິນຄືນ
              </p>
             
            </div>
          </div>
          <div className="col-md-9">
            <p style={{fontFamily:'Roboto',color:'#a4b0be'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur eligendi animi nihil labore ex aperiam distinctio
              itaque repudiandae, dicta velit molestiae fuga nemo unde, enim
              minima quidem vitae alias consequuntur!
            </p>
          </div>
        </div>
{/* ເດັກນ້ອຍແລະຕຽງ */}
<div className="d-flex mt-3">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
            <MdFamilyRestroom className="text-danger fs-5"/>
            </div>

            <div className="col-11">
              
              <p >
              ເດັກນ້ອຍ ແລະ ຕຽງ
              </p>
             
            </div>
          </div>
          <div className="col-md-9">
            <p style={{fontFamily:'Roboto',color:'#a4b0be'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur eligendi animi nihil labore ex aperiam distinctio
              itaque repudiandae, dicta velit molestiae fuga nemo unde, enim
              minima quidem vitae alias consequuntur!
            </p>
          </div>
        </div>
{/* ການຈຳກັດອາຍຸໃນການ Check In  */}
    
<div className="d-flex">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
            <RiUserFill className="text-danger fs-5"/>
            </div>

            <div className="col-11">
              
              <p >
              ການຈຳກັດອາຍຸໃນການ
              </p>
              <p className="" style={{marginTop:'-15px', fontFamily:'Roboto'}}> Check In</p>
            </div>
          </div>
          <div className="col-md-9">
            <p style={{fontFamily:'Roboto',color:'#a4b0be'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur eligendi animi nihil labore ex aperiam distinctio
              itaque repudiandae, dicta velit molestiae fuga nemo unde, enim
              minima quidem vitae alias consequuntur!
            </p>
          </div>
          </div>
{/* ສັດລ້່້ຽງ */}

<div className="d-flex mt-3">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
            <MdPets className="text-danger fs-5"/>
            </div>

            <div className="col-11">
              
              <p >
              ສັດລ້ຽງ
              </p>
             
            </div>
          </div>
          <div className="col-md-9">
            <p style={{fontFamily:'Roboto',color:'#a4b0be'}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequatur eligendi animi nihil labore ex aperiam distinctio
              itaque repudiandae, dicta velit molestiae fuga nemo unde, enim
              minima quidem vitae alias consequuntur!
            </p>
          </div>
        </div>

        {/* karn sum la but */}

        <div className="d-flex mt-3">
          <div className="d-flex   col-md-3 " >
            <div className="col-1" >
             
            <BsFillCreditCardFill className="text-danger fs-5"/>
            </div>

            <div className="col-11">
              
              <p >
             ບັດທີ່ສາມາດຊຳລະ
              </p>
              <p className="" style={{marginTop:'-15px'}}> ຄ່າທີ່ພັກໄດ້</p>
             
            </div>
          </div>
          <div className="col-md-9 d-flex justify-content-between" >
            <div className=""> <img src={M1}/></div>
            <div > 
            <img src={M2}/>
             </div>
            <div > <img src={M3}/></div>
            <div> <img src={M4}/></div>
            <div> <img src={M5}/></div>
            <div> <img src={M6}/></div>
            <div> <img src={M7}/></div>
          </div>
        </div>
        {/* dks */}
      </div>
{/* footer */}
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



    </>
  );
}

export default Rule;
