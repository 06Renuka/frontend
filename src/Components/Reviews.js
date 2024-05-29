// import React from "react";
// import { Row, Col } from "react-bootstrap";

// const Reviews = () => {
//   return (
//     <div className="container my-5" style={{margin:'100px'}}>
//       <h3>What our pharma partner says</h3>
//       <p>Streamlined Strategies for Real Estate Success</p>

//       <Row className="my-5 align-items-center" style={{margin:'100px'}}>
//         <Col>
//           <img src="" alt=""  style={{backgroundColor:'gray', width:'300px', height:'300px'}} />
//         </Col>
//         <Col>
//           <Row>
//             <Col>
//               <img />
//             </Col>
//             <Col>
//               <h5>Pratik Dhere</h5>
//             </Col>
//             <Col>
//               <img />
//             </Col>
//           </Row>
//           <p>In the dynamic realm of real estate, the journey from a property
//               inquiry to a successful conversion demands a well- crafted
//               approach. At Osumare, we specialize in guiding potential buyers
//               through this journey seamlessly, maximizing
//               inquiries-turned-conversions with expert strategies.</p>
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Reviews;
import React from "react";
import { Row, Col } from "react-bootstrap";

const Reviews = () => {
  return (
    <div className="container my-5">
      <h3 className="text-center">What our pharma partner says</h3>
      <p className="text-center">Streamlined Strategies for Real Estate Success</p>

      <Row className="my-5 align-items-center">
        <Col md={6} className="text-center mb-4 mb-md-0">
          <img src="" alt="" style={{ backgroundColor: 'gray', width: '100%', maxWidth: '300px', height: '300px', objectFit: 'cover' }} />
        </Col>
        <Col md={6}>
          <Row className="align-items-center mb-3">
            <Col xs={2} className="text-center">
              <img src="" alt="" style={{ backgroundColor: 'gray', width: '50px', height: '50px', borderRadius: '50%' }} />
            </Col>
            <Col xs={8}>
              <h5>Pratik Dhere</h5>
            </Col>
           
          </Row>
          <p>In the dynamic realm of real estate, the journey from a property
            inquiry to a successful conversion demands a well-crafted
            approach. At Osumare, we specialize in guiding potential buyers
            through this journey seamlessly, maximizing
            inquiries-turned-conversions with expert strategies.</p>
        </Col>
      </Row>
    </div>
  );
};

export default Reviews;

