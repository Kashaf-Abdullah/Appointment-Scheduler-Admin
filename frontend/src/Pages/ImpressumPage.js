import React from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../components/Footer';

const ImpressumPage = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container style={{ flex: "1" }}>
        <h3 className="heading" style={{ margin: "7rem 0 3rem 0" }}>
          Lorem, ipsum dolor.
        </h3>
        <div className="row justify-content-center" style={{ marginTop: "4rem" }}>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}> Lorem ipsum dolor sit.</h4>
              <p>
                Lorem ipsum dolor sit. <br />
                Lorem, ipsum dolor. <br />
                Lorem, ipsum.
                 <br />
               Lorem.
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}> Lorem, ipsum dolor.</h4>
              <p>
               Lorem ipsum dolor sit.
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}>lorem</h4>
              <p>
                info@abc-admin.com
              </p>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 d-flex justify-content-center">
            <div style={{ width: "15rem" }}>
              <h4 style={{ margin: "1rem 0" }}> Lorem ipsum dolor sit.</h4>
              <p>00-3344-554545</p>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default ImpressumPage;
