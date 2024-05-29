import React from "react";
import cuate from "../Assets/cuate.png";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/esm/Col";

export const Real = () => {
  return (
    <div className="container" style={{margin:'100px'}} >
      <h3 style={{margin:'100px'}} >Real Estate-Focused Digital Mystery</h3>
      <Row style={{ display: "grid", gridTemplateColumns: "1fr 2fr" , marginTop:'10px'}}>
        <img src={cuate} alt="Description" />
        <Col>
          <h4 >Unlock the digital potential of real Estate</h4>
          <p>
            At Osumare, we understand that the real estate landscape  <br /> demands a
            digital presence
           that aligns with the intricacies of <br />  property marketing. Our
            range of specialized services
            <br /> is meticulously designed to catapult your brand's success in
            the  <br /> ever-evolving digital property market
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
    </div>
  );
};
