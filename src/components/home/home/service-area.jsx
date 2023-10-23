import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";

// slider setting
const setting = {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    1200: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

// slider_content
const slider_content = [
  {
    id: 1,
    icon: "flaticon-hemoglobin-test-meter",
    title: "PLC modules",
    des: "PLC (Programmable Logic Controller) modules execute user-defined control functions, crucial for automation and operational efficiency in industrial settings",
    color_icon: "",
    color: "",
    img: '/assets/img/chengyi/goods01.png',
  },
  {
    id: 2,
    icon: "flaticon-blood-test",
    title: "CPU modules",
    des: "CPU (Central Processing Unit) modules execute software instructions, facilitating data processing and operations essential for electronic device functionality",
    color_icon: "pink-icon",
    color: "pink-hexa",
    img: '/assets/img/chengyi/goods02.png',
  },
  {
    id: 3,
    icon: "flaticon-biochemistry",
    title: "frequency converters",
    des: "Frequency converters adjust power frequency and voltage, controlling AC motor speed, enhancing operational efficiency in industrial applications",
    color_icon: "green-icon",
    color: "green-hexa",
    img: '/assets/img/chengyi/goods03.png',
  },
  {
    id: 4,
    icon: "flaticon-dna-1",
    title: "Motor Control",
    des: "Motor Control refers to the processes and systems that manage and regulate the performance and operation of electric motors, ensuring precise movement",
    color_icon: "sky-icon",
    color: "sky-hexa",
    img: '/assets/img/chengyi/goods04.png',
  },
  {
    id: 5,
    icon: "flaticon-dna-1",
    title: "Communication card",
    des: "Communication cards facilitate data transmission between devices in a network, enabling seamless interaction and connectivity for enhanced operational efficiency",
    color_icon: "sky-icon",
    color: "sky-hexa",
    img: '/assets/img/chengyi/goods05.png',
  },
];

const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);
  return (
    <>
      <section
        className="services-area pt-35 pb-90 grey-bg mt-30 fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Services
                </span>
                <h3 className="tp-section__title mb-50">Components Area</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-services d-flex align-items-center">
                <div className="services-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="services-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="services-slider  wow fadeInUp" data-wow-delay=".3s">
            <div>
              <Swiper
                {...setting}
                loop={isLoop}
                modules={[Navigation]}
                className="service-active"
              >
                {slider_content.map((item) => (
                  <SwiperSlide key={item.id}>
                    <div className="services-item mb-30" style={{padding: 0}}>
                      <img src={item.img} width="100%" height="100%" />
                      <div className="services-item__content" style={{padding: "0 50px 10px 50px"}}>
                        <h4 className="services-item__tp-title mb-20">
                          <Link href="/services-details">{item.title}</Link>
                        </h4>
                        <p style={{marginBottom: '10px'}}>{item.des}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
