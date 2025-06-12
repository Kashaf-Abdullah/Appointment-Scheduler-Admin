import React, { useEffect } from 'react'
import Container from "react-bootstrap/Container";
import user from '../assets/Bilder website/IMG_9497.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css';
const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <Container>
      <div className="row" style={{marginTop:"1rem"}}>
        <div id="about" className="col-lg-6 col-md-12 col-sm-12" >
            <h3 className='heading'    style={{margin:"0rem 0 0 0",fontSize:"2.6rem",textAlign:"left",padding:"4.5rem 0 0 0"}}> Lorem ipsum dolor sit. </h3>
            <p className='text' style={{margin:"1.5rem 0"}}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero reprehenderit sint nam iure? Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia modi assumenda velit. <br />
            <br />Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam libero sunt aliquid quis voluptas dolores facere in voluptatem ea eligendi.</p>
        </div>
        <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center align-items-center">
    <img className='user_img' src={user} alt="" style={{ zIndex:"-99",position:"relative",top:"62px", padding: "0rem"}} data-aos="fade-in"/>
</div>

      </div>
    </Container>
  )
}

export default About;
