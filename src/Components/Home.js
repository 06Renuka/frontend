import React from 'react'
import Homeimage from "../Assets/Homeimage.png"
import Row from 'react-bootstrap/esm/Row'


const Home = () => {
  return (
    <div div className="container">
    
    <h2 className="text-center my-4">Evaluate Real Estate success with <br/>Osumare's Digital Expertise</h2>
   
    
    <p className="text-center">Evaluate Real Estate success with Osumare's Digital Expertise</p>
    <div className="text-center mb-4">
    <button type="button" class="btn btn-primary " style={{ color: 'white', backgroundColor: '#007bff', borderColor: '#007bff'}}>Get started</button>
    </div>


   
     <Row className="justify-content-center">
     <img
          src={Homeimage}
          alt=""
          style={{ width: '796px', height: '538px', top: '659px', left: '322px' }}
        />

    </Row>
    </div>
  )
}

export default Home;