import React, { useState } from 'react';

const Component4 = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div class="card rounded-5 bg-secondary-subtle ">
      <div class="container d-flex p-5">
        <div class="flex-shrink-0">
          {/* <img src="./Frame 75.png" alt="" /> */}
          <div
      className="position-relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {!isHovered ? (
        <img src="./Frame 75.png" alt="" />
      ) : (
        <img src="./Variant2.png" alt="" />
      )}
    </div>
        </div>
        <div class="flex-grow-1 ms-3">
          <p
            class=" display-3 my-5 fw-semibold"
            style={{ fontFamily: "Urbanist, sans-serif" }}
          >
            Why Hire me?
          </p>
          <p class="text-muted my-5 fs-5">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Duis
            lacus nunc, posuere in justo <br /> vulputate, bibendum sodales{" "}
          </p>
          <div class="d-flex bd-highlight">
            <div class="p-2 w-50 bd-highlight">
              <p
                class=" display-5 my-1 fw-semibold"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                450 +
              </p>
              <p class="text-muted my-2 fs-5">Project Completed </p>
            </div>
            <div class="p-2 flex-shrink-1 bd-highlight">
              <p
                class=" display-5 my-1 fw-semibold"
                style={{ fontFamily: "Urbanist, sans-serif" }}
              >
                450 +
              </p>
              <p class="text-muted my-2 fs-5">Project Completed </p>
            </div>
          </div>
          <div class="card rounded-pill border-dark my-3 w-25">
            <div class="card-body text-dark text-center  ">
              <h5 class="card-title">Hire me</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Component4;