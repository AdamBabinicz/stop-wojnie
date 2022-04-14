import React, { useState } from "react";
import Modal from "../Portal/Modal";

const Skill = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const Progress = ({ done, title }) => {
    return (
      <div className="progress">
        <div
          className="progress-done"
          style={{
            opacity: 1,
            width: `${done}%`,
          }}
        >
          <h4> {title}</h4>
          <h4> {done}%</h4>
        </div>
      </div>
    );
  };

  const data = [
    {
      title:
        "Poparcie Rosjan dla Putina znacząco wzrosło w porównaniu z sytuacją sprzed wojny w Ukrainie",
      para: "Wiele Rosjan publicznie deklaruje swoje poparcie dla 'specjalnej operacji wojskowej'. Symbolem całego ruchu na rzecz poparcia Putina przez Rosjan stała się litera 'Z'. Ten znak często eksponowany jest w mediach społecznościowych, możemy go zobaczyć na rosyjskich samochodach czy koszulkach.",
      para1:
        "Nawet dwie trzecie Rosjan popiera 'specjalną operację wojskową' – wynika z sondażów Wszechrosyjskiego Ośrodka Badania Opinii Publicznej (WCIOM) i Funduszu Opinii Publicznej (FOM). O podobnych wynikach badań mówią przedstawiciele Centrum Lewady, jednego z nielicznych niezależnych ośrodków w Rosji, uznanego przez Kreml za zachodnią agenturę.",
    },
  ];
  return (
    <>
      <section className="skill">
        <div className="container">
          <div className="heading">
            <h3>
              Według WCIOM <span>(dane na 09.04.2022')</span>
            </h3>
            <h2>&nbsp;Co sądzą Rosjanie o wojnie Putina? &nbsp;</h2>
          </div>

          <div className="content flex">
            <div className="left topMarign">
              <Progress done="76.2" title="Poparcie dla Putina przed inwazją" />
              <Progress
                done="24.4"
                title="Głosy negatywne przed wojną w Ukrainie"
              />
              <Progress done="81.6" title="Zaufanie do Putina po inwazji" />
              <Progress
                done="12.9"
                title="Oceny negatywne dla Putina po inwazji"
              />
            </div>
            <div className="right mtop">
              {data.map((val) => {
                return (
                  <>
                    <h2>{val.title}</h2>
                    <p>{val.para}</p>
                    <p>{val.para1}</p>
                    <button className="primary-btn" onClick={() => Toggle()}>
                      Czytaj
                    </button>
                    <Modal
                      show={modal}
                      close={Toggle}
                      title="„Za Rosję! Za świat bez nazizmu!”"
                    >
                      <p>
                        „Wszystkich niezadowolonych wywiozłabym z Rosji. Jedźcie
                        do tych, którym współczujecie”, „Wszystko będzie dobrze!
                        Nie warto panikować! Już napisali, że od maja rodzinom z
                        dziećmi dadzą dodatkowe pieniądze, a my emeryci
                        zaciągniemy pasa i przeczekamy. To wszystko robi się dla
                        nas i dla naszych dzieci!”.
                      </p>
                      <br />
                      <p>
                        <em>
                          oko.press/czy-to-pana-syn-zginal-w-ukrainie-co-rosjanie-mysla-o-wojnie
                        </em>
                      </p>
                    </Modal>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skill;
