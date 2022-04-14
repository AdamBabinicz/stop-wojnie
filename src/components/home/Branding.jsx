import React from "react";

const Branding = () => {
  const data = [
    {
      id: "01",
      heading: "Kirył Petrenko",
      desc: "Rosyjski główny dyrygent Filharmonii Berlińskiej, w oświadczeniu wydanym 25 lutego ostro sprzeciwił się temu, co nazwał „podstępnym” atakiem Putina. Mówił o „nożu wbitym w plecy całemu pokojowemu światu” oraz o ataku na sztukę, która „łączy ponad wszelkimi granicami”.",
    },
    {
      id: "02",
      heading: "Oxxxymiron",
      desc: "Popularny raper odwołał w proteście koncert i na swoim koncie na Instagramie, które śledzi 2,2 mln osób, oświadczył, że jest przeciwny wojnie. „Bez względu na to, jak bardzo stara się tłumaczyć, że to nie jest agresja, ale obrona, Ukraina nie wtargnęła na terytorium Rosji. To Rosja bombarduje teraz suwerenne państwo” – napisał na Instagramie.",
    },
    {
      id: "03",
      heading: "Jelena Kowalska",
      desc: "Wieloletnia dyrektorka moskiewskiego Centrum im. Wsiewołoda Meyerholda oświadczyła z kolei, że prowadzony przez nią teatr jest teatrem państwowym, a ona „nie będzie pracować dla zbrodniczego państwa Putina”.",
    },
  ];

  return (
    <>
      <section className="branding">
        <div className="container grid">
          {data.map((value) => {
            return (
              <div className="box flex">
                <div className="text">
                  <h2>{value.id}</h2>
                </div>
                <div className="para">
                  <h3>{value.heading}</h3>
                  <p>{value.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Branding;
