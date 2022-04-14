import React from "react";
import Blogdata from "./Blogdata";
import { MdOutlineDoubleArrow } from "react-icons/md";

const Blog = () => {
  return (
    <>
      <div className="blog services">
        <div className="container topMargin">
          <div className="heading">
            <h3>Doniesienia</h3>
            <h2>&nbsp;To się wydarzyło &nbsp;</h2>
          </div>
          <div className="contain grid topMargin">
            {Blogdata.map((val) => {
              return (
                <div className="box">
                  <div className="img">
                    <img src={val.cover} alt="..." />
                  </div>
                  <div className="text">
                    <span>{val.date}</span>
                    <h4>{val.title}</h4>
                    <p>{val.desc}</p>
                    <a
                      href={val.category}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Czytaj
                      <MdOutlineDoubleArrow className="icon" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
