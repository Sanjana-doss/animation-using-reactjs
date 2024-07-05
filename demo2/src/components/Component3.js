import React from 'react';

const Component3 = () => {
  return (
    <div>
      <div class="container-fluid">
      <p class="text-center display-3 mt-5 fw-semibold" style={{ fontFamily: "Urbanist, sans-serif" }}>My Work Experience</p>
      </div>
      <div class="container">
      <div className="row align-items-center  d-flex justify-content-center my-5 py-5">
        
        <div className="col-4  text-md-start mb-4 mb-md-0">
          <div className="f fs-2">Cognizant, Mumbai</div>
          <p class="text-muted ms-1 fs-5">Sep 2016- July 2020 </p> <br /> <br /> <br /> <br />
          <div className="f fs-2">Sugee Pvt limited, Mumbai</div>
          <p class="text-muted ms-1 fs-5">Sep 2020- July 2023 </p><br /><br /> <br /><br />
          <div className="f fs-2">Cinetstox, Mumbai</div>
          <p class="text-muted ms-1 fs-5">Sep 2023</p>
        </div>
        
       
        <div className="col-4 text-center mb-5 mb-md-0">
          <img src="./Frame 111.png" alt=" " className="img-fluid " style={{ maxWidth: '150px' }} />
        </div>

       
        <div className="col-4 text-center text-md-start">
        <div className="f fs-2">Experince Designer</div>
          <p class="text-muted ms-1 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p> <br /> <br /> 
          <div className="f fs-2">UI/UX Designer</div>
          <p class="text-muted ms-1 fs-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales </p><br />
          <div className="f fs-2">Lead UX Designer</div>
          
        </div>
      </div>
      </div>
    </div>
  );
};

export default Component3;