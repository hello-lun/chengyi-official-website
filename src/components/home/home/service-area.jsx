import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from "next/link";
import styles from './home.module.scss';
import http from '@/utils/http';
import { chunk } from 'lodash';
import { isMobile } from "@/utils/utils";

const baseUrl = 'http://192.168.0.58:8888/api/';

// slider setting
const setting = {
  // slidesPerView: 4,
  // spaceBetween: 30,
  // breakpoints: {
  //   1200: {
  //     slidesPerView: 4,
  //   },
  //   992: {
  //     slidesPerView: 3,
  //   },
  //   768: {
  //     slidesPerView: 2,
  //   },
  //   576: {
  //     slidesPerView: 1,
  //   },
  //   0: {
  //     slidesPerView: 1,
  //   },
  // },
  // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};


const ServiceArea = () => {
  const [isLoop, setIsLoop] = useState(false);
  const [goodsList, setGoodsList] = useState([]);
  useEffect(() => {
    setIsLoop(true);
    http({
      method: 'get',
      url: '/goods/get',
      data: {
        page: 1,
        size: 2
      },
    }).then(res => {
      setGoodsList(chunk(res?.list, isMobile() ? 4 : 8));
    });

  }, []);
  return (
    <>
      <section
        className="services-area pt-35 pb-90 grey-bg fix"
        style={{ backgroundImage: `url(/assets/img/shape/shape-bg-01.png)` }}
      >
        <div>
          <div className={`${styles["goods-ptitle"]} row align-items-center`}>
            <div className={`col-lg-8 col-md-8 col-12`}>
              <div className="tp-section">
                <span className="tp-section__sub-title left-line mb-20">
                  our Goods
                </span>
                <h3 className="tp-section__title mb-50">Goods Area</h3>
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
            <div className={styles["goods"]}>
              { goodsList.length > 0 && 
                <Swiper
                  {...setting}
                  loop={isLoop}
                  modules={[Navigation]}
                >
                  {goodsList.map((item, index) => (
                    <SwiperSlide key={index}>
                      <ul className={`services-item mb-30 ${styles.imgContent}`}>
                        {
                          item.map(ele => (
                            <li key={ele.id}>
                              <div>
                                <img src={baseUrl + ele.images} alt="" />
                              </div>
                              <div className={styles.content}>
                                <div className={styles.title}>{ele.title}</div>
                                <p className={styles.pText}>{ele.details}</p>
                              </div>
                            </li>
                          ))
                        }
                      </ul>
                      {/* <div className="services-item mb-30" style={{padding: 0}}>
                        <img src={item.img} width="100%" height="100%" />
                        <div className="services-item__content" style={{padding: "0 50px 10px 50px"}}>
                          <h4 className={`services-item__tp-title mb-20 ${styles["ellipsis-1"]}`}>
                            <Link href="/services-details">{item.title}</Link>
                          </h4>
                          <p style={{marginBottom: '10px'}} className={styles["ellipsis-3"]}>{item.des}</p>
                        </div>
                      </div> */}
                    </SwiperSlide>
                  ))}
                </Swiper>
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceArea;
