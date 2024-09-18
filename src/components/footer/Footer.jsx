import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <i className="icon icon-map-marker2"></i>
              <div className="footer-box-content">
                <h3>Bheramara, Kushtia, Khulna.</h3>
                <p>Head Office</p>
              </div>
            </div>
            <div className="col-md-4 footer-box">
              <i className="icon icon-phone3"></i>
              <div className="footer-box-content">
                <h3>+(880) 1719 033 880</h3>
                <p>Give us a call</p>
              </div>
            </div>
            <div className="col-md-4 footer-box">
              <i className="icon icon-envelope"></i>
              <div className="footer-box-content">
                <h3>
                  <Link
                    to="mailto:mail.rubelauto@gmail.com"
                    className="__cf_email__"
                  >
                    mail.rubelauto@gmail.com
                  </Link>
                </h3>
                <p>24/7 online support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 footer-widget footer-about">
              <div className="footer-logo">
                <a href="index.html">
                  <img
                    className="img-fluid"
                    src="images/logo/footer_logo.png"
                    alt=""
                  />
                </a>
              </div>
              <p>
                Rubel Auto started its journey in 2009 as a dealer of Runner
                Automobiles PLC, then in 2012, dealing in all types of
                motorcycle, easybike parts business for a long time with
                honesty, integrity and reputation. It also has its own service
                center.
              </p>
              <div className="footer-social">
                <ul className="unstyled">
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 footer-widget widget-service">
              <h3 className="widget-title">
                <span>Our</span> Showroom
              </h3>
              <ul className="unstyled">
                <li>
                  <Link to="/">Bheramara Showroom</Link>
                </li>
                <li>
                  <Link to="/">Dashuria Showroom</Link>
                </li>
                <li>
                  <Link to="/">Meherpur Shoowroom</Link>
                </li>
                <li>
                  <Link to="/">Motorcycle Parts</Link>
                </li>{" "}
                <li>
                  <Link to="/">Auto Parts</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-widget">
              <h3 className="widget-title">
                <span>Office</span> Time
              </h3>
              <ul className="unstyled service-time">
                <li>
                  <span>Saturday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
                <li>
                  <span>Sunday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
                <li>
                  <span>Monday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
                <li>
                  <span>Tuesday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
                <li>
                  <span>Wednesday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
                <li>
                  <span>Thursday</span>
                  <span>09.00 AM - 08.30 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="copyright-info">
                <span>
                  Copyright © 2009 - {new Date().getFullYear()} Rubel Auto. All
                  Rights Reserved.
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-menu text-right">
                Developed By{" "}
                <Link
                  to="https://www.srdreamlab.com"
                  target="__BLANK"
                  className="text-white"
                >
                  SR Dream Lab
                </Link>{" "}
              </div>
              {/* <div className="footer-menu">
                <ul className="nav unstyled">
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#">Terms</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
        <div
          className="back-to-top"
          id="back-to-top"
          data-spy="affix"
          data-offset-top="10"
          // style="display: block;"
        >
          <button className="back-btn" title="Back to Top">
            <i className="fa fa-angle-double-up"></i>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
