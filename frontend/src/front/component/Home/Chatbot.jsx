import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../NavBar/Navbar';
import Slides from '../Carousel/Slides';
import Footer from '../Footer/Footer';

function Chatbot() {
  return (
    <> 
      <div  style={{ backgroundColor: '#2a4766'/* '#cecbdb' */}}>
        <Navbar />
        <Slides/>
      </div>
    </>
  );
}
export default Chatbot;
