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
    <div class="footer" id="footer">
      <div class="container">
        <div class="row">
          <div class="social mt-5">
            <ul>
              <li>
                <a class="link" href="https://www.facebook.com/wapborhan">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a class="link" href="https://www.twitter.com/wapborhan">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a class="link" href="https://www.instagram.com/wapborhan">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a class="link" href="https://www.github.com/wapborhan">
                  <FaGithub />
                </a>
              </li>
              <li>
                <a class="link" href="https://www.linkedin.com/in/wapborhan">
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-12 col-sm-12 col-xs-12">
            <p class="copyright">
              Copyright © {d.getFullYear()} RA Card | Developed By{" "}
              <a class="link" href="https://www.srdreamlab.com">
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
