import React from "react";

function Footer() {
  return (
    <div className="d-flex justify-content-center">
      <footer className="text-center my-5">
        Copyright © {new Date().getFullYear()} Nice Shoes <i className="fas fa-heart text-blue"></i>
        <div>All rights reserved</div>
      </footer>
    </div>
  );
}

export default Footer;
