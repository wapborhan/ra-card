const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-md-4 footer-box">
              <i className="icon icon-map-marker2"></i>
              <div className="footer-box-content">
                <h3>Birmingham, Alaska</h3>
                <p>1014 Retreat Avenue</p>
              </div>
            </div>
            <div className="col-md-4 footer-box">
              <i className="icon icon-phone3"></i>
              <div className="footer-box-content">
                <h3>+(91) 458 654 528</h3>
                <p>Give us a call</p>
              </div>
            </div>
            <div className="col-md-4 footer-box">
              <i className="icon icon-envelope"></i>
              <div className="footer-box-content">
                <h3>
                  <a
                    href="https://demo.themewinter.com/cdn-cgi/l/email-protection"
                    className="__cf_email__"
                    data-cfemail="1d74737b725d7972707c7473337e7270"
                  >
                    [email&#160;protected]
                  </a>
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
                A wonderful serenity taken possession into entire soul like to
                these sweet of tence this spot which was the main part created
                the bliss often souls like mine.
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
                <span>Our</span> Services
              </h3>
              <ul className="unstyled">
                <li>
                  <a href="#">Engine Diagnostics</a>
                </li>
                <li>
                  <a href="#">Lube, Oil and Filters</a>
                </li>
                <li>
                  <a href="#">Computer Diagnostics</a>
                </li>
                <li>
                  <a href="#">Anti-Lock Brake</a>
                </li>
                <li>
                  <a href="#">Air Conditioning Evac</a>
                </li>
                <li>
                  <a href="#">Performance Upgrades</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-widget">
              <h3 className="widget-title">
                <span>Service</span> Hours
              </h3>
              <ul className="unstyled service-time">
                <li>
                  <span>Saturday</span>
                  <span>7.00 - 16.10</span>
                </li>
                <li>
                  <span>SUnday</span>
                  <span>7.00 - 16.10</span>
                </li>
                <li>
                  <span>Monday</span>
                  <span>7.00 - 16.30</span>
                </li>
                <li>
                  <span>Tuesday</span>
                  <span>7.00 - 16.00</span>
                </li>
                <li>
                  <span>Wednesday</span>
                  <span>7.00 - 16.20</span>
                </li>
                <li>
                  <span>Thursday</span>
                  <span>7.00 - 16.00</span>
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
                  Copyright © 2009 - 2023 Rubel Auto. All Rights Reserved.
                </span>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="footer-menu text-right">
                Designed By{" "}
                <a href="#" className="text-white">
                  SR Dream Lab
                </a>{" "}
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
