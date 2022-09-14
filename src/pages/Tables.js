import React from "react";
import { Button, FormGroup } from "react-bootstrap";
import { Row, Col, FloatingLabel, Form, Table } from "react-bootstrap";
import { BsInfoLg } from "react-icons/bs";
import { MdKingBed } from "react-icons/md";
import { GiCookingPot } from "react-icons/gi";
import { HiUsers } from "react-icons/hi";
import { HiUser } from "react-icons/hi";
import {HiUserGroup} from 'react-icons/hi';
import {Pagination} from 'react-bootstrap';

function Tables() {
  return (
    <>
      <Col className="container ">
        <p className="fw-bold ">ຫາຫ້ອງວ່າງ</p>
        {/*  */}
      </Col>

      <Col className=" container d-flex justify-content-evenly mb-5">
        <div className="col-2" style={{ border: "1px solid red" }}>
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
        <div className="col-8" style={{ border: "1px solid red" }}></div>
        <div className="col-2" style={{ border: "1px solid red" }}>
          <Button
            className="bg-danger "
            style={{ width: "100%", height: "100%" }}
          >
            ຄົ້ນຫາ
          </Button>
        </div>
      </Col>
      <Col>
        <Table className=" container table-bordered">
          <thead className=" bg-danger text-light">
            <tr className=" col text-start">
              <th className="col-5">ປະເພດຫ້ອງພັກ</th>
              <th className="col-2">ຫ້ອງພັກ</th>
              <th className="col-5">ລາຄາ</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="d-flex ">
                  <p>
                    ຫ້ອງນອນຕຽງດ່ຽວພ້ອມກັບວິວສວນ ແລະ ສະລອຍນ້ຳ,
                    ນອກນັ້ນຍັງມີອາຫານເຊົ້າ
                  </p>
                  <BsInfoLg
                    className="bg-danger me-md-5 text-white mt-1 "
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="d-flex ">
                  <div className="d-flex  ">
                    <p> 1 ຕຽງຄູ່</p>
                    <MdKingBed className="ms-md-2 mt-1 fs-5 text-danger" />
                    <p className="ms-md-2 mb-2">+</p>
                  </div>
                  <div>
                    <p>
                      1 ຫ້ອງຄົວ
                      <GiCookingPot className="text-danger fs-5 mb-1 ms-md-2" />
                    </p>
                  </div>
                </div>
              </td>
              <td className=" d-flex align-items-center text-danger fs-2   ">
                <HiUsers className="fs-5" />
                <p className="  me-md-2 ms-md-2 mt-3 fs-5">+</p>
                <HiUser className="fs-5" />
              </td>
              <td className=" ">
                <div className="d-flex justify-content-between">
                  <p className="d-flex   mt-4 ms-md-5">
                    $80/ຄືນ <p className="text-danger ms-md-2">(-20%)</p>{" "}
                  </p>

                  <Button
                    variant="outline-danger mt-3"
                    style={{ width: "100px", height: "50px" }}
                  >
                    ຈອງທີ່ພັກ
                  </Button>
                </div>
              </td>
            </tr>

            {/* row2 */}
            <tr>
              <td>
                <div className="d-flex ">
                  <p>ຫ້ອງນອນຕຽງດ່ຽວພ້ອມກັບວິວສວນ ແລະ ສະລອຍນ້ຳສ່ວນຕົວ</p>
                  <BsInfoLg
                    className="bg-danger ms-md-5 text-white mt-1 "
                    style={{ borderRadius: "50%" }}
                  />
                </div>
                <div className="d-flex ">
                  <div className="d-flex  ">
                    <p> 1 ຕຽງຄູ່</p>
                    <MdKingBed className="ms-md-2 mt-1 fs-5 text-danger" />
                    <MdKingBed className="ms-md-2 mt-1 fs-5 text-danger" />
                  </div>
                </div>
              </td>
              <td className="d-flex align-items-center text-danger">
              <HiUserGroup className="fs-5" />
                <p className="  me-md-2 ms-md-2 mt-3 fs-5">+</p>
                <HiUser className="fs-5" />
              </td>
              <td className=" ">
                <div className="d-flex justify-content-between">
                  <p className="d-flex   mt-4 ms-md-5">
                    $50/ຄືນ <p className="text-danger ms-md-2">(-20%)</p>{" "}
                  </p>

                  <Button
                    variant="outline-danger mt-3"
                    style={{ width: "100px", height: "50px" }}
                  >
                    ຈອງທີ່ພັກ
                  </Button>
                </div>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>

      <Col className="mt-5 container d-flex justify-content-end" >
    <Pagination >
    <Pagination.Prev  />
    <Pagination.Next />
    </Pagination>
      </Col>
    </>
  );
}

export default Tables;
