import { Swiper, SwiperSlide } from "swiper/react";

const Partner = () => {
  return (
    <section id="ts-pertner" className="ts-pertner solid-bg">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Swiper
              spaceBetween={50}
              slidesPerView={4}
              // loop={true}
              autoplay
              loop
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              className="partner-carousel owl-carousel"
            >
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img1.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img2.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img3.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img4.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img5.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
              <SwiperSlide className="partner-item partner-logo">
                <a href="#">
                  <img
                    className="img-fluid"
                    src="images/clients/client-img1.png"
                    alt=""
                  />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
