import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-20 mt-auto">
      <div className="container">
        <div>© Design System • {new Date().getFullYear()}</div>
      </div>
    </footer>
  );
};

export default Footer;
