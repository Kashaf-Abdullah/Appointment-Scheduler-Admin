import React, { useEffect, useState } from 'react';
import user from '../assets/Bilder website/IMG_2980.JPG';
import Container from 'react-bootstrap/Container';

const Speaking = () => {
  const imgStyle = {
    width: '100%',
    height: '40%',
    display: 'block',
    margin: '0',
    position:"relative",
    // bottom:"5rem"
  };

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 744);
    };

    handleResize(); // Call it initially
    window.addEventListener('resize', handleResize); // Add event listener to update on resize

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up
    };
  }, []);

  return (
    <>
      <Container fluid  style={{ backgroundColor: 'var(--skin)', marginTop:'3.75rem' }}>
        <Container fluid  id="speaking">
          <div className="row speaking-sec" 
            
          >
            <div
            
              className="col-lg-8 col-md-8 col-sm-12" 
              style={isMobile ? { margin: '2rem 0rem' } : { margin: '-3.3rem 7rem -0.4rem 7rem' }}
            >
              <h4  className='sub-heading' style={{padding:"20px 0 0 0"}}>
                Lorem, ipsum dolor.
              </h4>
              <p className='text'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam magnam iste? Architecto nesciunt sed ex cupiditate animi, voluptate, temporibus ipsa dolore vel quo similique.
              </p>
            </div>
          </div>
        </Container>
      </Container>

      <img src={user} alt="" style={imgStyle} />
    </>
  );
};

export default Speaking;
