const AboutUs = () => {
  return (
    <section id="ts-about" className="ts-about">
      <div className="container-fluid no-padding">
        <div className="row">
          <div className="col-lg-7 col-md-12">
            <div className="box-skew-hidden-left">
              <div className="box-skew-left">
                <div className="box-skew-img">
                  <img
                    className="img-fluid"
                    src="/images/about/about-img1.jpg"
                    alt=""
                  />
                </div>
                <div className="box-content-wrapper">
                  <h2 className="column-title">
                    <small>Come before 21st Feb</small>
                    <span>Get</span> Upto 30% Rewards
                  </h2>
                  <p>
                    Auto Painting & Collision Repair Shop. We help you turn the
                    car you drive back into the car you love!
                  </p>
                  <a href="#" className="btn btn-primary">
                    Claim Reward
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12">
            <div className="box-skew-right bg-red">
              <div className="box-content-wrapper">
                <h2 className="column-title">
                  <span>About</span> Rubel Auto
                </h2>
                <p>
                  Most of the vehicles get damaged just because of maintenance
                  neglect you take. get damaged
                </p>
                <ul className="unstyled list-round">
                  <li>
                    Back in 2000, Runner Automobiles PLC, the pioneer of
                    {"Motorcycle Manufacturer and Exporter"} initiated its
                    journey in Bangladesh. For 20 years,
                  </li>
                  <li>The Big Oxmox advised her not to do vehicles</li>
                  <li>The Little Blind Text didn’t listen herself</li>
                  <li>Alphabet Village and the subline of </li>
                </ul>
              </div>
              <img src="/images/about/about_img.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
