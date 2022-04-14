import React from "react";
import { Link } from "react-router-dom";

const Wrapper = () => {
  const data = [
    {
      title: "Teatr Groteska",
      heading:
        "Obudzić z letargu sumienia i budować wspólnotę sprzeciwu wobec rosyjskiego bestialstwa",
      desc: "'O wolność walcz, Ukraino! Ty w bólu nie jesteś sama. Nie rzuci tyran nas na kolana. Niech skończy się już czas zabijania'",
    },
  ];

  return (
    <>
      <section className="branding wrapper">
        <div className="container">
          {data.map((val) => {
            return (
              <div className="box">
                <h3>{val.title}</h3>
                <h2>{val.heading}</h2>
                <p>{val.desc}</p>

                <Link
                  to="//www.youtube.com/watch?v=nX5WQAdEoI8&t=9s"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="primary-btn">Posłuchaj</button>
                </Link>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Wrapper;

// https://www.youtube.com/watch?v=nX5WQAdEoI8&t=9s
