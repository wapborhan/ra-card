import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

const Services = () => {
  return (
    <section id="ts-service" className="ts-service pb-0">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h2 className="section-title">
              <span>Services </span> We Provide
            </h2>
          </div>
        </div>
        <div className="row">
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            loop={true}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 80 },
              480: { slidesPerView: 1, spaceBetween: 150 },
              768: { slidesPerView: 2, spaceBetween: 50 },
              1024: { slidesPerView: 3, spaceBetween: 150 },
            }}
            // navigation={true}
            autoplay={true}
            // modules={[Navigation]}
            className="service-carousel owl-carousel"
          >
            <SwiperSlide className="col-md-12s">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img1.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="icon-engine"></i>
                  </div>
                  <h3>
                    <a href="#">Engine Diagnostics</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-md-12s">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img2.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="icon-oil"></i>
                  </div>
                  <h3>
                    <a href="#">Lube, Oil and Filters</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-md-12s">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img3.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="icon-air_conditioning"></i>
                  </div>
                  <h3>
                    <a href="#">Air Conditioning Evac</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-md-12">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img1.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa fa-home"></i>
                  </div>
                  <h3>
                    <a href="#">Engine Diagnostics</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-md-12">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img2.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa fa-home"></i>
                  </div>
                  <h3>
                    <a href="#">Lube, Oil and Filters</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="col-md-12">
              <div className="ts-service-wrapper">
                <span className="service-img">
                  <img
                    className="img-fluid"
                    src="images/service/service_img3.jpg"
                    alt=""
                  />
                </span>
                <div className="service-content">
                  <div className="service-icon">
                    <i className="fa fa-home"></i>
                  </div>
                  <h3>
                    <a href="#">Air Conditioning Evac</a>
                  </h3>
                  <p>
                    Most of the vehicles get damaged just because of maintenance
                    neglect. If you take care of your.
                  </p>
                  <a href="#" className="readmore">
                    Read more<i className="fa fa-angle-double-right"></i>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Services;
