import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import icon1 from "../Assets/icon1.png";
import icon2 from "../Assets/icon2.png";

export const Expertise = () => {
  return (
    <div className="container">
      <h3> Driving Property Inquiries to Conversions</h3>
      <Container>
        <Row>
          <Col>
          <img src={icon1} alt="" />
            <h3>Call-to-Action Optimization </h3>
            <p>
              Our carefully crafted CTAs guide potential buyers through the
              property journey, enhancing engagement and conversion rates.
            </p>

          
          </Col>
          <Col>
          <img src={icon2} alt="" />
            <h3>Landing Page Efficiency</h3>
            <p>
              {" "}
              Tailored landing pages are designed for maximum property lead
              conversion. They provide seamless user experiences and clear
              pathways for inquiry submission.
            </p>
            
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={icon1} alt="" />
            <h3> Social Proof Utilization</h3>
            <p>
              Leverage the power of testimonials and success stories from
              satisfied buyers to build trust and credibility, encouraging
              hesitant prospects to take action 1290 Hua
            </p>
          </Col>
          <Col>
            <img src={icon1} alt="" />
            <h3> Social Proof Utilization</h3>
            <p>
              Leverage the power of testimonials and success stories from
              satisfied buyers to build trust and credibility, encouraging
              hesitant prospects to take action 1290 Hua
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
