import { useEffect, useState } from "react";

const TopBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const updateTime = () => setTime(new Date());

    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedDate = time.toLocaleDateString("en-GB");
  return (
    <div className="ts-top-bar">
      <div className="top-bar-angle">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4"></div>
            <div className="col-lg-4 col-md-5">
              <div className="top-bar-event ts-top">
                <i className="icon icon-clock"></i>
                <span>{"We'are Open: Sat - Thr 9:00 AM - 08:30 PM"}</span>
              </div>
            </div>
            <div className="col-lg-4 col-md-3 text-right">
              <div className="top-bar-social-icon ml-auto">
                {/* <ul>
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
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                </ul> */}
                <span className="text-white">
                  Today: {formattedDate} - Now: {time.toLocaleTimeString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
