import React from "react";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaGithub,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  const d = new Date();
  return (
    <div className="footer mt-5" id="footer">
      <div className="copyrights text-white text-center p-3">
        Copyright © {d.getFullYear()} RA Card | Developed By{" "}
        <a className="link text-danger" href="https://www.srdreamlab.com">
          SR Dream Lab
        </a>
        .
      </div>
    </div>
  );
};

export default Footer;
