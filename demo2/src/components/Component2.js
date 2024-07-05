import React, { useState } from 'react';

const Component2 = () => {
  
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div class="card rounded-5 bg-dark text-white row">
        <img
          src="./Frame 65.svg"
          class="card-img img-fluid col-12"
          alt="..."
          style={{ maxWidth: "100%", height: "auto", maxHeight: "900px" }}
        />
        <div class="card-img-overlay">
          <div class="d-flex bd-highlight mt-5 row">
            <div
              class=" p-5 display-1 fw-semibold col-6"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              My Services
            </div>

            <div class="p-5 fs-3 col-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              lacus nunc, posuere in justo vulputate, bibendum sodales{" "}
            </div>
          </div>
          <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators " style={{top:'500px'}}>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active rounded-circle" aria-current="true" aria-label="Slide 1" style={{width:'25px',height:'25px'}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" class="active rounded-circle" aria-current="true" aria-label="Slide 2" style={{width:'25px',height:'25px'}}></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" class="active rounded-circle" aria-current="true" aria-label="Slide 3" style={{width:'25px',height:'25px'}}></button>
  </div>
  <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="d-flex justify-content-center">
                <div class="card-group ">
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60.png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(1).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(2).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
          </div>
                  
                  
                </div>
              </div>
              <div className="carousel-item ">
                <div className="d-flex justify-content-center">
                <div class="card-group ">
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60.png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(1).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(2).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
          </div>
                  
                  
                </div>
              </div>
              <div className="carousel-item ">
                <div className="d-flex justify-content-center">
                <div class="card-group ">
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60.png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(1).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
            <div class="card rounded-5 bg-transparent border border-light mx-5 " style={{ border: "none",maxWidth: "400px", height: "auto"  }}>
            <div className="position-relative">
        <img src="./bFrame 60(2).png" className="card-img-top" alt="Main" style={{ maxWidth: "400px", height: "auto" }}/>
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
          style={{ width: "100px", height: "100px" }}
        />
      ) : (
        <img
          src="./down right.png"
          className="rounded-circle bg-danger position-absolute img-fluid bottom-0 end-0 "
          alt=""
          style={{ width: "90px", height: "90px" }}
        />
      )}
    </div>
        
        
      </div>
              
            </div>
          </div>
                  
                  
                </div>
              </div>
            </div> 
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div></div></div>
  );
};

export default Component2;
