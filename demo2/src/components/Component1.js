
import React, { useState } from 'react';
const Component1 = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
       <nav className="card rounded-pill bg-dark mt-3 container d-flex justify-content-center align-items-center text-center">
            <div className="card-body text-light fs-3">
                <div className="d-flex flex-wrap justify-content-center">
                    <div className="py-4 mx-4 bd-highlight  "><button type="button" class="card bg-danger text-center rounded-pill text-light px-4 py-2">Home</button></div>
                    <div className="py-4 mx-4 bd-highlight">About</div>
                    <div className="py-4 mx-4 bd-highlight">Service</div>
                    <div className="py-2 bd-highlight">
                        <img src="./Frame 14.svg" alt="" className="img-fluid" />
                    </div>
                    <div className="py-4 mx-4 bd-highlight">Resume</div>
                    <div className="py-4 mx-4 bd-highlight">Product</div>
                    <div className="py-4 ms-4 bd-highlight">Contact</div>
                </div>
            </div>
        </nav>
        <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!isHovered ? (
        <div className="container mt-5" style={{ height: '850px', position: 'relative', maxWidth: '100%', overflow: 'hidden' }}>
          <img src="./Group 3.png" alt="" className="d-block mx-auto" />
          <p className="display-1 fw-semibold text-center" style={{ fontFamily: "Urbanist, sans-serif" }}>
            I'm Jenny <br /> <img src="./Vector 2.png" alt="" className="mt-5" />{" "}
            Product Designer
          </p>
          <img src="./Frame 57.png" alt="" className="img-fluid frame-item" />
          <img
            src="./Frame 56.svg"
            alt=""
            className="position-absolute bottom-0 start-50 translate-middle-x img-fluid ms-5"
            style={{ zIndex: 1, width: "25%", height: "20%" }}
          />

          <div className="row">
            <div className="col-md-4 mt-5">
              <div className="custom-container">
                <div className="col-12 ms-5 mt-5 ps-5">
                  <img src="./quote-up.svg" alt="" className="mb-3" />
                  <p className="fs-5 fw-bold">
                    Jenny’s Exceptional product design <br /> ensure our website’s
                    success. <br />
                    Highly Recommended
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-5 text-center">
              <div className="row">
                <div className="col text-center">
                  <div className="position-relative"></div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-md-start mt-5">
              <div className="custom-container1 mt-5 ms-5 ps-5">
                <div className="row">
                  <div className="col">
                    <div className="text-end">
                      <img src="./Frame 4.png" alt="Description" className="img-fluid mb-3" />
                      <div
                        style={{ fontFamily: "Urbanist, sans-serif" }}
                        className="display-6 fw-bold"
                      >
                        10 Years
                      </div>
                      <p className="fs-5">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="container-fluid mt-5">
          <div className="row">
            <div className="col-md-3 mt-5">
              <div className="container custom-container">
                <div className="col-12 ms-5 mt-5 ps-5">
                  <img src="./quote-up.svg" alt="" className="mb-3" />
                  <p className="fs-5 fw-bold">
                    Jenny’s Exceptional product design <br /> ensure our website’s
                    success. <br />
                    Highly Recommended
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 text-center">
              <div className="container row pt-5 mt-5">
                <div className="col text-center">
                  <div className="position-relative">
                    <img
                      src="./cFrame 68.png"
                      alt="Background"
                      className="img-fluid position-absolute top-0 start-50 translate-middle"
                      id="background-image"
                      style={{ paddingTop: '850px', width: '2000px' }}
                    />
                    <img
                      src="./Frame 57.png"
                      alt=""
                      className="img-fluid min-width-300 min-height-200" style={{opacity:'1'}}
                    />
                    {/* <div className="image-stack-container position-relative">
      <img src="./cEllipse 2.png" className="img-fluid image-stack min-width-300 min-height-200" alt="" />
      <img src="./cFrame 68.png" className="img-fluid image-stack" alt="" />
      <img src="./cyoung-pretty-woman-looking-happy-goofy-with-broad-fun-loony-smile-eyes-wide-open-against-white-wall 2.png" className="img-fluid image-stack min-width-300 min-height-200" alt="" />
    </div> */}
                    <img
                      src="./Frame 56.svg"
                      alt=""
                      className="position-absolute bottom-0 start-50 translate-middle-x img-fluid min-width-20px"
                      style={{ zIndex: 1, marginBottom: "50px" }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 text-md-start mt-5">
              <div className="custom-container1 mt-5 ms-5 ps-5">
                <div className="row">
                  <div className="col">
                    <div className="text-end">
                      <img src="./Frame 4.png" alt="Description" className="img-fluid mb-3" />
                      <div
                        style={{ fontFamily: "Urbanist, sans-serif" }}
                        className="display-6 fw-bold"
                      >
                        10 Years
                      </div>
                      <p className="fs-5">Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Component1;