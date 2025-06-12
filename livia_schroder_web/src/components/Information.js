
import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import InfoCard from "./cards/InfoCard";
import i1 from "../assets/Bilder website/Neuronetix.png";
import i2 from "../assets/Bilder website/speaker.png";
import i3 from "../assets/Bilder website/consulting.png";
import { Link } from "react-router-dom";
const Information = () => {
  const [expanded, setExpanded] = useState(false);
 
  const handleNavLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const navbarHeight = document.querySelector("nav").offsetHeight;
      window.scrollTo({
        top: section.offsetTop - navbarHeight,
        behavior: "smooth",
      });
      setExpanded(false); // Close the navbar after scrolling
    }
  };
  return (
    <Container id="about py-2">
      <h3 className="heading">Lorem ipsum dolor sit amet.</h3>
      <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i1} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>Lorem, ipsum dolor.</h4>
        <p className="text" style={{color:"#182C47"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos id voluptatem ipsam rem quibusdam nihil totam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur? </p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <a href="https://neuronetix.ch/" target='_blank' style={{textDecoration:"none"}}> Lorem.</a>

       </button>
      </div>
    </div>








    <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i3} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>Lorem, ipsum dolor.</h4>
        <p className="text" style={{color:"#182C47"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, hic temporibus exercitationem assumenda sapiente iure culpa maxime pariatur animi. </p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <Link as={Link} to="/?section=consulting" onClick={() => handleNavLinkClick("consulting")} style={{textDecoration:"none"}} >Lorem ipsum dolor sit.</Link>
       </button>
      </div>
    </div>















    <div className="row" style={{ margin: "5rem 1rem 0 0" }}>
    <div className="col-lg-6 col-md-6 col-sm-6 d-flex align-items-center justify-content-center" data-aos="fade-in">

        <img src={i2} alt="" className="info-card-img" />
      </div>

      <div className="col-lg-6 col-md-6 col-sm-6">
        <h4>lorem</h4>
        <p className="text" style={{color:"#182C47"}}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequuntur aliquam debitis impedit nulla provident laudantium, architecto quam iste!</p>
        <button className="in-btn" role="button"  data-aos="fade-in">
      
        <Link as={Link} to="/?section=speaking" onClick={() => handleNavLinkClick("speaking")} style={{textDecoration:"none"}} >Lorem, ipsum dolor.</Link>

       </button>
      </div>
    </div>
    </Container>
  );
};

export default Information;
