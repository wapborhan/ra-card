const WhyUs = () => {
  return (
    <section id="ts-feature" className="ts-feature pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">
              <span>Why</span> Choose Us
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row">
              <div className="col-md-6">
                <div className="ts-feature-wrapper">
                  <div className="feature-single">
                    <span className="feature-icon">
                      <i className="icon-mechanic"></i>
                    </span>
                    <div className="feature-content">
                      <h3>
                        <span>Authentic</span> Products Guarantee
                      </h3>
                      <p>
                        We only stock original and high-quality parts from
                        trusted manufacturers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ts-feature-wrapper">
                  <div className="feature-single">
                    <span className="feature-icon">
                      <i className="icon-price"></i>
                    </span>
                    <div className="feature-content">
                      <h3>
                        <span>Reasonable</span> Price
                      </h3>
                      <p>
                        We offer competitive prices to ensure you get the best
                        value for your purchase.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="gap-35"></div>
            <div className="row">
              <div className="col-md-6">
                <div className="ts-feature-wrapper">
                  <div className="feature-single">
                    <span className="feature-icon">
                      <i className="icon-client"></i>
                    </span>
                    <div className="feature-content">
                      <h3>
                        <span>Trusted</span> by Clients
                      </h3>
                      <p>
                        With years of experience, we have earned the trust of
                        our customers for providing reliable and honest service.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="ts-feature-wrapper">
                  <div className="feature-single">
                    <span className="feature-icon">
                      <i className="icon-fast"></i>
                    </span>
                    <div className="feature-content">
                      <h3>
                        <span>Fast</span> feature Delivery
                      </h3>
                      <p>
                        We ensure fast delivery, so you receive your products
                        quickly and on time.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="feature-img">
        <img className="img-fluid" src="images/why_choose_us_img.png" alt="" />
      </div>
    </section>
  );
};

export default WhyUs;
