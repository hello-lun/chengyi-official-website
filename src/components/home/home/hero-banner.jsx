// external
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useCommonState } from "@/store/commom";
import { getImgURL } from "@/utils/utils.js";

const baseImgUrl = getImgURL();

// content
const content = {
  sub_title: "Welcoome to CHENGYI",
  title: (
    <>
      A professional component supplier
    </>
  ),
  des: (
    <>
      offers high-quality industrial automation and electrical components
      <br />
      including PLC, HMI, inverters, servo motors, and more, backed by exceptional after-sales service
    </>
  ),
  btn_text1: "Appointment",
  btn_text2: "About us",
};
const { sub_title, title, des, btn_text1, btn_text2 } = content;

// hero_box
const hero_box = [
  {
    id: 1,
    icon: "flaticon-premium-badge",
    des: "100% High-quality Products and After-sales Service.",
    color: "green-icon",
    border: "green-border",
  },
  {
    id: 2,
    icon: "flaticon-rating",
    des: "100% Customer Satisfaction",
    color: "",
  },
  {
    id: 3,
    icon: "flaticon-target",
    des: "Help and Acess is Our Mission",
    color: "pink-icon",
    border: "pink-border",
  },
];


// slider setting
const setting = {
  slidesPerView: 1,
  spaceBetween: 30,
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
  // // Navigation arrows
  navigation: {
    nextEl: ".services-n",
    prevEl: ".services-p",
  },
};

const HeroBanner = ({ bannersList = [] }) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const commonData = useCommonState.getState().data;

  return (
    <>
      <section className="banner-area p-relative">
        <div className="">
          <div style={{position: 'relative'}}>
            <Swiper
              {...setting}
              loop={true}
              navigation
              modules={[Navigation]}
            >
              {commonData.bannerList?.map((item) => (
                <SwiperSlide key={item.img}>
                  <div className="" style={{width: '100%', height: 'auto'}}>
                    <img src={baseImgUrl + item.img} width="100%" height="auto" alt={item.details} />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="banner__box-item">
            <div className="row">
              {hero_box.map((item) => (
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-6">
                  <div
                    className={`banner__item d-flex ${item.border} align-items-center mb-30 wow fadeInUp`}
                    data-wow-delay=".2s"
                  >
                    <div className={`banner__item-icon ${item.color}`}>
                      <i className={item.icon}></i>
                    </div>
                    <div className="banner__item-content">
                      <span>{item.des}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>  
        {/* <div className="bannerscroll d-none d-xl-block">
          <div className="banner-scroll-btn">
            <a className="bannerscroll-icon" href="#tp-about-scroll">
              <i className="fa-light fa-computer-mouse"></i>
              <span>Scrool Down</span>
            </a>
          </div>
        </div> */}
        {/* <div className="banner__shape d-none d-lg-block">
          <img src="/assets/img/chengyi/banner-logo.jpg" alt="banner-img" />
          <div className="banner__video-btn">
            <button
              onClick={() => setIsVideoOpen(true)}
              className="banner__video-icon popup-video"
            >
              <i className="fa-solid fa-play"></i>
            </button>
          </div>
        </div> */}
      </section>
      {/* video modal start */}
      {/* <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"d8w5SICzzxc"}
      /> */}
      {/* video modal end */}
    </>
  );
};

export default HeroBanner;
