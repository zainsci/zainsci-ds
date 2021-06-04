import React from "react";

const Hero = () => {
  return (
    <>
      <div className="container">
        <div className="py-20 grid g-md">
          <div className="p-4 col-4">
            <h1>Design System</h1>
            <p>
              An experimental Design System with modern design principles and
              techniques for you to build a fully responsive and cross-browser
              compatible applications.
            </p>
            <button className="btn btn-blue">Documentation</button>
          </div>
          <div className="p-4 col-8">
            <img src="/assets/svgs/main.svg" alt="responsive web" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
