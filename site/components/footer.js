import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 p-20 mt-auto">
      <div>© Design System • {new Date().getFullYear()}</div>
    </footer>
  );
};

export default Footer;
