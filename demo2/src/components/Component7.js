import React from 'react';

const Component7 = () => {
  return (
    <div>
      <div class="container pb-5 mt-5">
        <p
          class=" display-3 mt-5 fw-semibold text-center py-3"
          style={{ fontFamily: "Urbanist, sans-serif" }}
        >
          Have an Awesome Project
          <br /> Idea? Let’s Discuss
        </p>
        <div className="d-flex justify-content-center align-items-center">
      <div className="card rounded-pill" style={{ width: '60%' }}>
        <div className="d-flex bd-highlight">
          <div className="p-2 bd-highlight">
            <div className="d-flex align-items-center justify-content-center">
              <div className="flex-shrink-0">
                <img src="./Frame 325.png" alt="..." />
              </div>
              <input
        type="email"
        placeholder="Enter Email Address"
        style={{
          flex: 1,
          border: 'none',
          outline: 'none'
        }}
      />
            </div>
          </div>
          <div className="m-1 flex-grow-1  bd-highlight d-flex justify-content-end align-items-end">
            <div className="btn rounded-pill bg-danger">
              
                <p className="card-title fs-3 text-light text-center">Send</p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
    
        <div class="d-flex bd-highlight px-5 align-items-center justify-content-center">
          <div class="pe-5 bd-highlight">
            <img src="./Frame 58.png" alt="" />
          </div>
          <div class="pe-5 bd-highlight">
            <img src="./Frame 571.png" alt="" />
          </div>
          <div class="pe-5 bd-highlight">
            <img src="./Frame 12(1).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component7;