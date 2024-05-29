import React from 'react';
import ExpertImage from "../Assets/expert.png";
import { Row, Col } from 'react-bootstrap';
import icon from "../Assets/icon1.png";

const dataExpert = [
  {
    id: 1,
    imag: icon,
    title: 'Market trends Analysis',
    descriptive: "Predictive Insights Market trends Analysis"
  },
  {
    id: 2,
    imag: icon,
    title: 'Industry Performance',
    descriptive: "Detailed performance reports and analytics"
  },
  {
    id: 3,
    imag: icon,
    title: 'Customer Behavior',
    descriptive: "In-depth analysis of customer behavior patterns"
  },
  {
    id: 4,
    imag: icon,
    title: 'Sales Forecasting',
    descriptive: "Accurate sales forecasting using AI models"
  }
];

const Expert = () => {
  return (
    <div className="container">
      <Row>
        <Col xs={12} lg={6} className="my-5 align-items-center">
          {dataExpert.map((item) => (
            <Row key={item.id} className="mb-4 align-items-center">
              <Col xs={2}>
                <img src={item.imag} alt={item.title} style={{ width: '52px', height: '52px' }} />
              </Col>
              <Col xs={10}>
                <h4>{item.title}</h4>
                <p>{item.descriptive}</p>
              </Col>
            </Row>
          ))}
        </Col>
        <Col xs={12} lg={6}>
          <img src={ExpertImage} alt="Expert Analysis" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
        </Col>
      </Row>
    </div>
  );
};

export default Expert;
