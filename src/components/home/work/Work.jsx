import React from "react";
import Data from "./Data";
import { BsFullscreen } from "react-icons/bs";
import { MdIosShare } from "react-icons/md";

const Work = () => {
  return (
    <>
      <section className="work">
        <div className="heading">
          <h3>Wojna w karykaturze</h3>
          <h2> &nbsp;Karykaturzyci wypowiedzieli wojnę Putinowi &nbsp; </h2>
        </div>

        <div className="content">
          {Data.map((val) => {
            return (
              <div className="box">
                <div className="img">
                  <img src={val.cover} alt="..." />
                </div>
                <div className="overlay">
                  <div className="text">
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                  <div className="icon">
                    <BsFullscreen className="iconWork" />
                    <MdIosShare className="iconWork" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Work;
