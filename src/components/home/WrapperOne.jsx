import React from "react";

const WrapperOne = () => {
  const data = [
    {
      num: "3 lata więzienia za 3 minuty protestu",
      text: "Hasło “Niet wojnie” na plakatach i na śniegu.",
    },
    {
      num: "16 marca w Tomsku skazano na grzywnę 45 tysięcy rubli (ok. 390 euro) mężczyznę",
      text: "Zdaniem policji milcząc okazywał poparcie protestującym przeciwko wojnie.",
    },
    {
      num: "W metrze zmuszają ludzi do zdejmowania maseczek, grożą mandatem",
      text: "Mówi się, że ma to ułatwić rozpoznawanie twarzy uczestników protestów. Cała stolica jest usiana kamerami.",
    },
    {
      num: "Putin lubuje się w metaforyce seksualnej",
      text: "Protestujący przeciwko wojnie są więc według prezydenta Rosji prostytutkami, które sprzedają się Zachodowi i dają się wykorzystywać.",
    },
  ];

  return (
    <>
      <section className="branding wrapperOne">
        <div className="container grid1">
          {data.map((val) => {
            return (
              <>
                <div className="box">
                  <h3>{val.num}</h3>
                  <p>{val.text}</p>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default WrapperOne;
