import React from 'react';
import {Col,Table} from 'react-bootstrap';
import {GiGreekTemple} from 'react-icons/gi';
import {FaWineGlassAlt} from 'react-icons/fa';
import {GiForkKnifeSpoon} from 'react-icons/gi';
import {Tb2Fa, TbTrain} from 'react-icons/tb';
import {GiAirplaneDeparture} from 'react-icons/gi';

const Last = () => {
  return (
   <>
   <div className='container'>
     <div className='d-flex' >
       <p className='fw-bold'> ຂໍ້ມູນພື້ນທີ່ໃກ້ຄຽງ  </p>
       <a className='text-danger ms-md-2'> google map</a>
     </div>
       <Table className='container'>
        <thead>
            <tr>
                <th ><GiGreekTemple 
                className='fw-bold fs-5 text-danger'
                /> ແຫຼ່ງທ່ອງທ່ຽວ</th>
                <th> <FaWineGlassAlt className='fw-bold fs-5 text-danger' /><GiForkKnifeSpoon className='fw-bold fs-5 text-danger'/>ອາຫານ ແລະ ຄາເຟ </th>
                <th>

               
                    <GiAirplaneDeparture className='fw-bold fs-5 text-danger' />
                    <TbTrain className='fw-bold fs-5 text-danger'/>
               
                ສະໝາມບິນ ແລະ ຂົນສົ່ງສາທາລະນະ
                </th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>
                    <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}  >500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
            </tr>

            <tr>
                <td>
                    <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}  >500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
            </tr>
            <tr>
                <td>
                    <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}  >500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
                <td>
                <div className='d-flex justify-content-between'>
                        <p style={{fontFamily:'Roboto'}}>
                        Lorem ipsum dolor
                        </p>
                        <p style={{fontFamily:'Roboto',color:'#b2bec3'}}>500m</p>
                    </div>
                </td>
            </tr>
        </tbody>
       </Table>
   </div>
   
   </>
  );
}

export default Last;
