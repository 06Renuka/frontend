import React from "react";
import s1 from "../Assets/Data.png";
import { Row } from "react-bootstrap";

const data = [
  {
    id: 1,
    Image: s1,
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 1,
    Image: s1,
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 2,
    Image: s1,
    title: "Automotive SEO",
    description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 1,
    Image: s1,
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 2,
    Image: s1,
    title: "Automotive SEO",
    description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 1,
    Image: s1,
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 2,
    Image: s1,
    title: "Automotive SEO",
    description: "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  },
  {
    id: 1,
    Image: s1,
    title: "Automotive SEO",
    description:
      "Drive Your Success with Automotive SEO: Ignite Online Visibility and Outrace the Competition. Accelerate Your Business Growth Today",
  }
 
  
];

export const Services = () => {
  return (
    <div className="container">
      <Row className="my-5 align-items-center">
      <h3>Driving Property Inquiries to Conversions</h3>
      <p>Streamlined Strategies for Real Estate Success</p>
      </Row>
      <div className="row">
        {data.map((item, index) => (
          <div key={item.id} className="col-md-3 mb-4">
            <div className="card h-100 text-center">
              <img
                src={item.Image}
                alt={item.title}
                className="card-img-top mx-auto d-block"
                style={{ height: "52px", width: "52px" }}
              />

              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mb-4">
        <button
          type="button"
          
          className="btn btn-primary my-5 align-items-center"
          style={{
            color: "white",
            backgroundColor: "#007bff",
            borderColor: "#007bff",
          }}
        >
          Get started
        </button>
      </div>
    </div>
  );
};

export default Services;
