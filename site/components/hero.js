import React from "react";

const Hero = () => {
  return (
    <>
      <div className="p-20 grid">
        <div className="p-4 col-1">
          <h1>Design System</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            similique laborum asperiores quaerat iure voluptates eos possimus
            totam dolorum harum, perspiciatis veritatis corporis suscipit fugit
            quidem, iusto officia recusandae magnam doloribus explicabo et!
            Veritatis pariatur eos qui odio dicta, ut ipsam maxime corrupti
            debitis vel, ducimus, cupiditate porro! Aliquid, repellendus!
          </p>
          <button className="btn btn-blue">Documentation</button>
        </div>
        <div className="p-4 col-1">
          <img src="/assets/svgs/main.svg" alt="responsive web" />
        </div>
      </div>
    </>
  );
};

export default Hero;
