import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

const Banner = () => {
  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      loop={true}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="ts-slider-area owl-carousel"
      navigation={true}
      modules={[Navigation]}
    >
      <SwiperSlide
        className="slider-items slider-overlay"
        style={{ background: "url(images/slider/slider-1.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="slider-content">
                <h1>
                  <small>We give you</small>
                  Quality <span>Auto Parts</span>
                </h1>
                <p className="slider-desc">
                  At our shop, {"you'll"} find top-quality motorcycle and
                  electric rickshaw parts of all kinds. We guarantee
                  high-quality products at affordable prices. Visit us today for
                  fast and reliable delivery services!
                </p>
                <a href="#" className="btn btn-primary">
                  Get Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="slider-items slider-overlay"
        style={{ background: "url(images/slider/slider-2.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="slider-content">
                <h1>
                  <small>The Best</small>
                  Repair <span>& Maintenance</span>
                </h1>
                <p className="slider-desc">
                  Auto Painting &amp; Collision Repair Shop. We help you turn
                  the car you drive back into the car you love!
                </p>
                <a href="#" className="btn btn-primary">
                  Get Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide
        className="slider-items slider-overlay"
        style={{ background: "url(images/slider/slider-3.jpg)" }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-12">
              <div className="slider-content">
                <h1>
                  <small>We Ensure</small>
                  Commitment <span>to Quality</span>
                </h1>
                <p className="slider-desc">
                  Auto Painting &amp; Collision Repair Shop. We help you turn
                  the car you drive back into the car you love!
                </p>
                <a href="#" className="btn btn-primary">
                  Get Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
