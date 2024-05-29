import  Navbar  from "./Components/Navbar/Navbar";

import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home"


import './App.css';

import Form from "./Components/Form";
import { Expertise } from "./Components/Expertise";
import Inquires  from "./Components/Inquires";
import { Property } from "./Components/Property";
import Services from "./Components/services";
import { Real } from "./Components/Real";
import Peace from "./Components/peace";
import FAQS from "./Components/FAQS";
import Expert from "./Components/Expert";
import Reviews from "./Components/Reviews";

function App() {
  return (
    <div className="App">
    <Navbar/>
   
    <Home/>
    <Real/>
    <Property/>
    <Expert/>
    <Form/>
    <Services/>
    <Inquires/>
    <Peace/>
    <FAQS/>

    
   <Reviews/>
    <Expertise/>
    <Footer/>


    </div>
  );
}

export default App;
