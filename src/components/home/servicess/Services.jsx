import React from "react";
import ServicesData from "./ServicesData";

const Services = () => {
  return (
    <>
      <section className="services topMargin">
        <div className="container">
          <div className="heading">
            <h3>Reakcja</h3>
            <h2>
              &nbsp;Reakcja świata na rosyjską agresję na Ukrainę&nbsp;&nbsp;
            </h2>
          </div>
          <div className="contain grid topMargin">
            {ServicesData.map((val) => {
              return (
                <>
                  <div className="box">
                    <div className="img">
                      <img src={val.cover} alt="..." />
                    </div>
                    <div className="text">
                      <h2>{val.title}</h2>
                      <p>{val.desc}</p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
