import React, { useState } from "react";

const Component5 = () => {
  const [isHovered1, setIsHovered1] = useState(false); 
  const [isHovered2, setIsHovered2] = useState(false); 

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  return (
    <div>
      <div class="container-fluid">
        <div class="mx-5 px-5">
          <div class="d-flex bd-highlight">
            <div class="p-2 py-5 w-90 bd-highlight">
              <p
                class=" display-3 mt-5 fw-semibold"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Lets have a look at <br /> my Portfolio
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
          
            <div
              id="carouselExampleCaptions"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div class="carousel-indicators"style={{top:'400px'}}>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active rounded-circle bg-dark" aria-current="true" aria-label="Slide 1" style={{width:'25px',height:'25px' }}></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"class="active rounded-circle bg-dark" aria-current="true" aria-label="Slide 2" style={{ width:'25px',height:'25px' }}></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" class="active rounded-circle bg-dark" aria-current="true" aria-label="Slide 3" style={{ width:'25px',height:'25px' }}></button>
  </div>
              <div class="carousel-inner m-5 ">
                <div class="carousel-item active ">
                <div className="row">
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered1 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="./Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="./Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered2 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="./Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="./Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
                </div>
                <div class="carousel-item ">
                <div className="row">
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered1 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered2 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
                </div>
                <div class="carousel-item  ">
                <div className="row">
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered1 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter1}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="col">
        <div className="position-relative" style={{ width: '700px', border: 'none' }}>
          {isHovered2 ? (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseLeave={handleMouseLeave2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Hovered Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <div className="card text-white"
                     style={{
                       position: 'relative',
                       backdropFilter: 'blur(8px)',
                       backgroundColor: 'rgba(255, 255, 255, 0.2)',
                       border: 'none',
                     }}>
                  <div className="card-body">
                    <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                    <p className="card-text text-dark">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
                  </div>
                </div>
                <img src="./Frame 5701.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          ) : (
            <div
              className="card rounded-5 bg-dark text-white position-relative"
              onMouseEnter={handleMouseEnter2}
              style={{ width: '100%', height: '100%', border: 'none' }}
            >
              <img src="/Frame 26(1).png" className="card-img" alt="Default Card" />
              <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title fs-1 fw-semibold">Lirante</h5>
                <img src="./Frame 11(2)1.png" alt="Logo" className="img-fluid m-2"
                     style={{ position: 'absolute', top: '0', right: '0', width: '70px', height: 'auto' }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
                </div>
              </div>
            </div>

            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  Landing Page
                </span>
              </li>
              <li class="list-inline-item">
                <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  Product Design
                </span>
              </li>
              <li class="list-inline-item">
                <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  Animation
                </span>
              </li>
              <li class="list-inline-item">
                <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  Glassmorphism
                </span>
              </li>
              <li class="list-inline-item">
                <span class="btn btn-lg rounded-pill bg-secondary-subtle text-dark">
                  Cards
                </span>
              </li>
            </ul>
            <div class="d-flex align-items-center justify-content-center">
              <p
                class=" display-4 mt-5 fw-semibold text-center"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                Lirante - Food Delivery Solution
              </p>{" "}
              <img src="./Frame 10.png" alt="" class="mt-4 ps-3" />
            </div>
            <p
              class="text-center fs-4"
              style={{ fontFamily: "Urbanist, sans-serif" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              congue interdum <br /> ligula a dignissim. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Sed <br />
              lobortis orci elementum egestas lobortis.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default Component5;
