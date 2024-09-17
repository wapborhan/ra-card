import { Link, NavLink } from "react-router-dom";
import TopBar from "./TopBar";

const Header = () => {
  return (
    <div>
      <TopBar />
      <header className="ts-header header-default">
        <div className="ts-logo-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-4 col-sm-4">
                <a className="ts-logo" href="index.html">
                  <img src="/images/logo/logo.png" alt="logo" />
                </a>
              </div>
              <div className="col-md-8 col-sm-8 float-right">
                <ul className="top-contact-info">
                  <li>
                    <span>
                      <i className="icon icon-phone3"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">Call us</p>
                      <p className="info-subtitle">+880 1719 033 0880</p>
                    </div>
                  </li>
                  <li>
                    <span>
                      <i className="icon icon-envelope"></i>
                    </span>
                    <div className="info-wrapper">
                      <p className="info-title">Send us mail</p>
                      <p className="info-subtitle">
                        <Link
                          href="mailto:mail.rubelauto@gmail.com"
                          className="__cf_email__"
                        >
                          mail.rubelauto@gmail.com
                        </Link>
                      </p>
                    </div>
                  </li>
                  <li>
                    <Link href="#" className="btn btn-primary">
                      contact us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="header-angle">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse justify-content-end ts-navbar"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav">
                  <li className="nav-item active">
                    <NavLink
                      className="nav-link active"
                      href="#"
                      data-toggle="dropdown"
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Services
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#" data-toggle="dropdown">
                      Blog
                    </a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="contact.html">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>

              <div className="header-cart">
                <div className="cart-link">
                  <form action="#">
                    <button type="button">
                      <i className="icon icon-search show"></i>
                    </button>
                    <button>
                      <i className="icon icon-cross"></i>
                    </button>
                    <div className="search-box">
                      <input
                        type="search"
                        name="search"
                        id="search"
                        placeholder="Type here and Search..."
                      />
                    </div>
                  </form>
                  <a href="#">
                    <i className="icon icon-cart2"></i>
                    <sup>2</sup>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
