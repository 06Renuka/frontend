import React from 'react'
import Row from 'react-bootstrap/esm/Row';
import Col from "react-bootstrap/Col"
import Accordion from './Accordian';

const FAQS = () => {
  return (
    <div className="container " style={{margin:'100px'}}>
    <Row>
    <h3>Frequently asked questions</h3>
    <p>
      our conversion-focused strategies, we ensure that property seekers are
      not just visitors, but engaged<br/> prospects ready to make their next move
      in the real estate market
    </p>
    </Row>
    <Row className="justify-content-center">
        <Col md={12}>
          <Accordion />
        </Col>
      </Row>
   
    
    
  </div>
  )
}

export default FAQS;