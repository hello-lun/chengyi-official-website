import React from "react";
import Count from "./count";

//  counter_text;
const counter_text = [
  {
    id: 1,
    color: "blue-hard",
    counter: 1002,
    text: "Equipment supplier",
  },
  {
    id: 2,
    color: "pink-hard",
    counter: 21899,
    text: "Current serviced customers",
  },
  {
    id: 3,
    color: "sky-hard",
    counter: 7807,
    text: "Equipment product quantity",
  },
  {
    id: 4,
    color: "green-hard",
    counter: 125,
    text: "Countries collaborated with globally",
  },
];

const Counter = ({ cls = "pt-40 pb-60"  }) => {
  return (
    <>
      <section className={`counter-area ${cls}`}>
        <div className="container">
          <div className="row">
            {counter_text.map((item) => (
              <div key={item.id} className="col-6 col-lg-3">
                <div
                  className="counter__item blue-border mb-30 wow fadeInUp"
                  data-wow-delay=".2s"
                >
                  <div className={`counter__icon ${item.color} mb-15`}>
                    <i></i>
                  </div>
                  <div className="counter__content">
                    <h4 className="counter__title">
                      <span className="counter">
                        <Count number={item.counter} />
                      </span>
                    </h4>
                    <p className="two-line-ellipsis">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
