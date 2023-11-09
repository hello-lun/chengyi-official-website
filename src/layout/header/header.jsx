import Link from "next/link";
import React, { useState } from "react";
import NavMenu from "./nav-menu";
import useSticky from "hooks/use-sticky";
import Sidebar from "@/common/sidebar";
import styles from './heder.module.scss';
import { WhatsAppOutlined, WechatOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';


const Header = () => {
  const { sticky } = useSticky();
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div
        id="header-mob-sticky"
        className={`tp-mobile-header-area pt-15 pb-15 d-xl-none ${
          sticky ? "header-sticky" : ""
        } `}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 col-10">
              <div className="tp-mob-logo">
                <Link href="/">
                  <img src="/assets/img/logo/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-md-8 col-2">
              <div className="tp-mobile-bar d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner d-none d-md-block d-xl-none mr-30">
                  <a className="tp-bt-btn" href="tel:+8613610307032">
                    <svg
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                      <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                      <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                    </svg>
                    <span>Tel/Wechat/Whatsapp:</span>+8613610307032
                  </a>
                </div>
                <button
                  onClick={() => setIsActive(true)}
                  className="tp-menu-toggle"
                >
                  <i className="far fa-bars"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="d-none d-xl-block">
        <div
          className={`${
            sticky ? "header-sticky" : ""
          }`}
          id="header-sticky"
        >
          <div className="container-fluid">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-7 col-lg-6">
                <div className="main-menu">
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              
              <div className="col-xxl-2 tp-bt-btn-banner  mr-30">
                  <a className="tp-bt-btn" target="_blank" href="https://wa.me/+8613725293855?text=Hello" rel="noreferrer">
                    <span style={{marginRight: '10px'}}>
                      <svg
                        width="14"
                        height="19"
                        viewBox="0 0 14 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="2" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="12" cy="12" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="12" r="2" fill="#0E63FF" />
                        <circle cx="7" cy="17" r="2" fill="#0E63FF" />
                        <circle cx="2" cy="7" r="2" fill="#0E63FF" />
                        <circle cx="2" cy="12" r="2" fill="#0E63FF" />
                      </svg>
                    </span>
                    Contact Us
                  </a>
                </div>
              {/* <div className="col-xxl-3 col-lg-3 d-flex align-items-center justify-content-end">
                <div className="tp-bt-btn-banner">
                  <a className="tp-bt-btn" style={{padding: '10px 10px'}} href="tel:123456">
                    <div>Alissa Ding</div>
                    <PhoneOutlined className={styles.contactPhone} />
                    <WhatsAppOutlined className={styles.contactPhone} />
                    <WechatOutlined className={styles.contactPhone} />
                    <span>+8613725293855</span>  
                  </a>
                  <a className="tp-bt-btn" style={{padding: '10px 10px'}}>
                    <MailOutlined className={styles.contactPhone} />
                    <span>alissa@chengyiauto.cn</span>  
                  </a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </header>

      {/* side bar start */}
      <Sidebar isActive={isActive} setIsActive={setIsActive} />
      {/* side bar end */}
    </>
  );
};

export default Header;
