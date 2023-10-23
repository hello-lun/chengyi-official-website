import Count from "@/common/count";
import Link from "next/link";
import React from "react";


// content
const content = {
  left_img: "assets/img/chengyi/about.jpg",
  experience_count: 9,
  experience_count_text: (
    <>
      Years of <br />
      Experience
    </>
  ),
  title: "About",
  section_title: "A professional component supplier",
  section_sub_title:
    "9 years of end-component equipment service experience.",
  section_des: (
    <>
      our company is a professional electric and electronic automation supplier exporting
Main product: PLCs, HMI, Inverter, Servo motor + drive +encoder, circuit breaker, contactor, relay, sensor, limit switch, and pneumatic components products.
Mainly deal with SIEMENS, DANFOSS, MITSUBISHI, OMRON, ALLEN BRADLEY,SCHNEIDER, ABB, YASGAWA, FESTO,SEW, B&R, DELTA ETC...
our products export to all over the world such as Southeast Asia,Europe,North Amerivca,
South America, the Middle East region and also Africa.
With flexible payment methods, and a variety of official courier cooperation to reduce customer costs, 
whith help create more benefits for our every customers.
This makes our products best-sold in foreign countries and by the majority of customers.
We sincerely welcome friends from all over the world to visit our comnpany and cooperate
with us on the basis of long-term mutual benefits.
    </>
  ),
  about_info_list: [
    {
      text: "Professional electric and electronic supplier",
    },
    {
      text: "Global export to various regions",
    },
    {
      text: "Flexible payment methods offered",
    },
  ],
};

const {
  left_img,
  experience_count,
  experience_count_text,
  title,
  section_title,
  section_sub_title,
  section_des,
  about_info_list,
} = content;

const About = () => {
  return (
    <>
      <section id="tp-about-scroll" className="about-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12">
              <div
                className="about__thumb mb-60 wow fadeInLeft"
                data-wow-delay=".4s"
              >
                <div className="about__img">
                  <img src={left_img} alt="about-bg-img" />
                  <div className="about__exprience">
                    <h3 className="counter">
                      <Count add_style={true} number={experience_count} />
                    </h3>
                    <i>{experience_count_text}</i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div
                className="tp-about__content pt-80 ml-60 mb-50 wow fadeInRight"
                data-wow-delay=".4s"
              >
                <div className="tp-section">
                  <span className="tp-section__sub-title left-line mb-25">
                    {title}
                  </span>
                  <h3 className="tp-section__title tp-ab-sm-title mb-25">
                    {section_title}
                  </h3>
                  <i style={{marginBottom: '20px'}}>{section_sub_title}</i>
                  <p className=" mr-20 mb-15">{section_des}</p>
                </div>
                <div className="tp-about__info-list mb-35">
                  <ul>
                    {about_info_list.map((list, i) => (
                      <li key={i}>
                        <i className="fa-solid fa-check"></i> {list.text}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* <div className="tp-about__btn">
                  <Link className="tp-btn" href="/about">
                    Our HIstory
                  </Link>
                  <Link className="tp-btn-second ml-25" href="/about">
                    About us
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
