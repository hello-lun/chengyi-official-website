import React, { useEffect, useState, useContext } from "react";
import team_data from "../data/team.js";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link.js";
import { Navigation } from "swiper";
import { MyContext } from '@/store';

// slider setting
const setting = {
  //   loop: true,
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 4500,
    disableOnInteraction: true,
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    992: {
      slidesPerView: 2,
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
    nextEl: ".team-n",
    prevEl: ".team-p",
  },
};

const Team = () => {
  const { storeData, setStoreData } = useContext(MyContext);
  const [isLoop, setIsLoop] = useState(false);
  useEffect(() => {
    setIsLoop(true);
  }, []);

  const linkClick = (e, data) => {
    e.stopPropagation();
    if (data.name === 'email') {
      setStoreData({
        ...storeData,
        messageOpen: true,
        email: data.value,
      });
    }
  }

  return (
    <>
      <section
        className="team-area grey-bg pt-120 pb-80"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8 col-md-8 col-12">
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-25">
                  Our Team
                </span>
                <h3 className="tp-section__title mb-75">Meet Specialist</h3>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-12">
              <div className="tp-team-arrow d-flex align-items-center">
                <div className="team-p">
                  <i className="fa-regular fa-arrow-left"></i>
                </div>
                <div className="team-n">
                  <i className="fa-regular fa-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div
            className="swiper-container team-active wow fadeInUp"
            data-wow-delay=".3s"
          >
            <Swiper {...setting} loop={isLoop} modules={[Navigation]}>
              {team_data.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="swiper-slide">
                    <div className="tp-team mb-50">
                      <div className="tp-team__thumb fix">
                        <a href="#">
                          <img src={item.img} alt="team-thumb" />
                        </a>
                      </div>
                      <div className="tp-team__content">
                        <h4 className="tp-team__title mb-15">
                          <Link href="/team-details">{item.name}</Link>
                        </h4>
                        <span className="tp-team__position mb-30">
                          {item.title}
                        </span>
                        <p>{item.des}</p>
                        <div className="tp-team__social">
                          {item.social_links.map((l, i) => (
                            <span
                              style={{fontSize: '20px', cursor: 'pointer', margin: '0 10px', color: 'var(--tp-theme-secondary)'}}
                              key={i}
                              className={l.color}
                              onClick={(e) => linkClick(e, l)}>{l.icon}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
