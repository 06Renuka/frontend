import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Form = () => {
  return (
    <div className="container" style={{margin:'100px'}}>
    <Row>
    <h3>Contact Inquiries to Conversions</h3>
      <p>Streamlined Strategies for Real Estate Success</p>
    </Row>
      

      <div className="shadow p-4 mb-4 bg-white">
      <Row>
        <Col>
          {" "}
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Name
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Name"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
             Phone
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Phone"
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Email address
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
        </Col>
        <Col>
          <div class="mb-3">
            <label for="exampleFormControlTextarea1" class="form-label">
              Example textarea
            </label>
            <textarea
              class="form-control"
              id="exampleFormControlTextarea1"
              rows="8"
            ></textarea>
          </div>
        </Col>
      </Row>

      <button type="button" class="btn btn-primary">
        Submit
      </button>
      </div>
     

      
    </div>
  );
};

export default Form;
