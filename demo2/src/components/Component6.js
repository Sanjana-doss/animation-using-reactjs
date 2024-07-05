import React, { useEffect, useRef } from 'react';

const Component6 = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const nextButton = carouselRef.current.querySelector('.carousel-control-next');
        nextButton.click();
      }
    }, 5000); 
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div class=" card rounded-5 bg-dark text-white style={{ width: '10rem' }} ">
          <img src="./Frame 651.png" class="card-img" alt="..." style={{ height: '900px', backgroundSize: 'cover', backgroundPosition: 'center' }}/>
          <div class="card-img-overlay">
            <div
              class=" p-5 display-1 fw-semibold text-center"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Testimonials That <br />
              Speak to My Results
            </div>
            <p
              class="text-center fs-3"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum <br /> ligula a dignissim. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed <br />
              lobortis orci elementum egestas lobortis.
            </p>
            <div id="carouselExampleIndicator" class="carousel slide" data-bs-ride="carousel">
            <div id="carouselExampleIndicators" className="carousel slide" ref={carouselRef} data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="row overflow-hidden py-5 my-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className=" text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.  </p>
            </div>
          </div>
        </div>
          </div>
    </div>
    <div class="carousel-item">
    <div className="row overflow-hidden py-5 my-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className=" text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.  </p>
            </div>
          </div>
        </div>
          </div>
    </div>
    <div class="carousel-item">
    <div className="row overflow-hidden py-5 my-5">
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className=" text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis. </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card h-100 shadow-sm bg-transparent">
            <div className="card-body text-light">
              <div className="d-flex align-items-center mb-3">
                <img src="./Frame 323.png" alt="Jayesh Patil" className="rounded-circle me-3" style={{width: '50px', height: '50px'}} />
                <div>
                  <h5 className="card-title mb-0">Jayesh Patil</h5>
                  <p className="card-text"><small className="text-light">CEO, Lirante</small></p>
                </div>
              </div>
              <div className="d-flex align-items-center mb-3">
              <img src="./Frame 11(2).png" alt=""/>
              </div>
              <p className="card-text">
              consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.Sed lobortis orci elementum egestas lobortis.  </p>
            </div>
          </div>
        </div>
          </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="prev">
    
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicator" data-bs-slide="next">
    
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
            
          </div>
        </div>
    </div>
  );
};

export default Component6;