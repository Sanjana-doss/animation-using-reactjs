import React, { useState } from 'react';

const Component9 = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    
    <div class="container-fluid py-5">
        <div class="container">
          <div class="d-flex bd-highlight">
            <div class="p-2 w-90 bd-highlight">
              <p
                class=" display-3 mt-5 fw-semibold"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                From my <br />
                blog post
              </p>
            </div>
            <div class="p-2 flex-grow-1 display-1 bd-highlight my-5 d-flex justify-content-end align-items-end">
              <div class="card rounded-pill bg-danger ">
                <div class="card-body">
                  <h5 class="card-title fs-3 text-light text-center">
                    See All
                  </h5>
                </div>
              </div>
            </div>
          </div>
          <div class="card-group">
            <div class="card" style={{ border: "none" }}>
            <div className="position-relative">
        <img src="./aFrame 60.png" className="card-img-top" alt="Main" />
        <div
      className="position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img
          src="./aFrame 57.png"
          className="rounded-5 position-absolute img-fluid bottom-0 end-0 p-2"
          alt="Overlay"
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "105px", height: "105px" }}
        />
      )}
    </div>
        
        
      </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                    UI/ UX Design
                  </span>
                </h5>
                <p class="card-text">
                  <div className="d-flex justify-content-between align-items-center py-3 pe-5">
                    <div className="d-flex align-items-center">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                        }}
                      ></span>
                      <span class="fs-4">Jayesh Patil</span>
                    </div>
                    <div className="d-flex align-items-center ">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                          display: "inline-block",
                        }}
                      ></span>
                      <span class="fs-4">10 Nov, 2023</span>
                    </div>
                  </div>
                </p>
                <p class="card-text">
                  <p
                    class=" fs-3"
                    style={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    Design Unraveled: Behind <br />
                    the Scenes of UI/UX Magic
                  </p>
                </p>
              </div>
            </div>
            <div class="card mx-5" style={{ border: "none" }}>
            <div className="position-relative">
        <img src="./aFrame 60(1).png" className="card-img-top" alt="Main" />
        <div
      className="position-relative"
      onMouseEnter={() => setIsHovered1(true)}
      onMouseLeave={() => setIsHovered1(false)}
    >
      {!isHovered1 ? (
        <img
          src="./aFrame 57.png"
          className="rounded-5 position-absolute img-fluid bottom-0 end-0 p-2"
          alt="Overlay"
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "105px", height: "105px" }}
        />
      )}
    </div>
      </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  App Design
                  </span>
                </h5>
                <p class="card-text">
                  <div className="d-flex justify-content-between align-items-center py-3 pe-5">
                    <div className="d-flex align-items-center">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                        }}
                      ></span>
                      <span class="fs-4">Jayesh Patil</span>
                    </div>
                    <div className="d-flex align-items-center ">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                          display: "inline-block",
                        }}
                      ></span>
                      <span class="fs-4">09 Oct, 2023</span>
                    </div>
                  </div>
                </p>
                <p class="card-text">
                  <p
                    class=" fs-3"
                    style={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                   Sugee: Loan Management System for Rural Sector.
                  </p>
                </p>
              </div>
            </div>
            <div class="card" style={{ border: "none" }}>
            <div className="position-relative">
        <img src="./aFrame 60(3).png" className="card-img-top" alt="Main" />
        <div
      className="position-relative"
      onMouseEnter={() => setIsHovered2(true)}
      onMouseLeave={() => setIsHovered2(false)}
    >
      {!isHovered2 ? (
        <img
          src="./aFrame 57.png"
          className="rounded-5 position-absolute img-fluid bottom-0 end-0 p-2"
          alt="Overlay"
          style={{ width: "120px", height: "120px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "105px", height: "105px" }}
        />
      )}
    </div>
      </div>
              <div class="card-body">
                <h5 class="card-title">
                  <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  App Design
                  </span>
                </h5>
                <p class="card-text">
                  <div className="d-flex justify-content-between align-items-center py-3 pe-5">
                    <div className="d-flex align-items-center">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                        }}
                      ></span>
                      <span class="fs-4">Jayesh Patil</span>
                    </div>
                    <div className="d-flex align-items-center ">
                      <span
                        className="rounded-circle me-2"
                        style={{
                          width: "8px",
                          height: "8px",
                          backgroundColor: "orange",
                          display: "inline-block",
                        }}
                      ></span>
                      <span class="fs-4">13 Aug, 2023</span>
                    </div>
                  </div>
                </p>
                <p class="card-text">
                  <p
                    class=" fs-3"
                    style={{ fontFamily: "Urbanist, sans-serif" }}
                  >
                    Cinetrade: Innovative way to invest in Digital Media
                  </p>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Component9;
