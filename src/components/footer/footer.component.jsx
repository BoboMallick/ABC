import React from "react";
import "./footer.style.css";

const FooterPanel = () => {
  return (
    <div>
      <p className="py-2 text-center footer-style"> <small>© Katha Mallick &nbsp; {new Date().getFullYear()}</small></p>
    </div>
  );
};

export default FooterPanel;
