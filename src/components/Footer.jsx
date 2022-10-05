import React from "react";
import "../assets/stylesheet/social.css";
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
    <div className="footer" id="footer">
      <div className="container">
        <div className="row">
          <div className="social mt-5">
            <ul>
              <li>
                <a className="link" href="https://www.facebook.com/wapborhan">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a className="link" href="https://www.twitter.com/wapborhan">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a className="link" href="https://www.instagram.com/wapborhan">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a className="link" href="https://www.github.com/wapborhan">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  className="link"
                  href="https://www.linkedin.com/in/wapborhan"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12 col-sm-12 col-xs-12">
            <p className="copyright">
              Copyright © {d.getFullYear()} RA Card | Developed By{" "}
              <a className="link" href="https://www.srdreamlab.com">
                SR Dream Lab
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
