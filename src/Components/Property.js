import React from "react";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/Container";
import bro from "../Assets/bro.png";

export const Property = () => {
  return (
    <div className="container" style={{margin:'100px'}} >
     <h3>Driving Property Inquiries to Conversions</h3>
     <p>Streamlined Strategies for Real Estate Success</p>
      <Container>
        <Row style={{ display: "grid", gridTemplateColumns: "1fr 2fr" }}>
          <img src={bro} alt="Description" />
          <Col>
            <h4 style={{marginTop:'80px'}}>Optimized Path to Property Purchase</h4>
            <p>
              In the dynamic realm of real estate, the journey from a property<br/>
              inquiry to a successful conversion demands a well- crafted<br/>
              approach. At Osumare, we specialize in guiding potential buyers<br/>
              through this journey seamlessly, maximizing<br/>
              inquiries-turned-conversions with expert strategies.<br/>
            </p>
            <div className="text-center mb-4">
              <button
                type="button"
                class="btn btn-primary "
                style={{
                  color: "white",
                  backgroundColor: "#007bff",
                  borderColor: "#007bff",
                }}
              >
                Get started
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
