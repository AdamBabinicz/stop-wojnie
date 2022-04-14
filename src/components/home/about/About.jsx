import React, { useState } from "react";
import Modal from "../../Portal/Modal";

const About = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  const data = [
    {
      title:
        "Wojna Rosja-Ukraina. Protesty na całym świecie. 'Rosja, precz z Ukrainy!'",
      desc1:
        "Cały świat przygląda się sytuacji na Ukrainie i wojnie, jaką Rosja zainicjowała. Na świecie odbyły się liczne protesty z tysiącami manifestantów, protestujących przeciw działaniom Władimira Putina. Ludzie wyszli na ulice między innymi w Niemczech, Hiszpanii, Australii, Tajlandii, Chile, czy w samej Rosji.",
      desc2:
        "Protesty przeciwko rosyjskiej agresji na Ukrainie odbywają się również w Australii. Na zdjęciu protestujący trzymają plakaty i flagi. Manifestacja odbywa się w Sydney w Nowej Południowej Walii w Australii.",
      desc3:
        "Więcej niż sto tysięcy osób wyszło na ulice stolicy Niemiec, by zademonstrować przeciwko wojnie na Ukrainie. Uczestników demonstracji na ulicach Berlina między Bramą Brandenburską a Kolumną Zwycięstwa cały czas przybywało, dlatego – z uwagi na pandemię koronawirusa – poszerzono teren demonstracji aż do stacji kolejki miejskiej Tiergarten i o inne ulice wokół Kolumny Zwycięstwa ...",
      desc4:
        "To dość oczywiste, że Ukraina nie stanowi zagrożenia dla bezpieczeństwa naszego kraju. Rozpętanie wojny w imię geopolitycznych ambicji, napędzanych wątpliwymi fantazjami historiozoficznymi, jest cyniczną zdradą pamięci naszych przodków. Rosja skazała siebie na międzynarodową izolację (…), a prowadzenie badań jest nie do pomyślenia bez pełnej współpracy z kolegami z innych krajów – napisali w liście otwartym rosyjscy naukowcy.",
      desc5:
        "W sobotę (09.04.2022') na całym świecie odbyły się protesty Rosjan przeciw wojnie w Ukrainie i zbrodniom rosyjskiej armii. W Warszawie protestujący spotkali się o godz. 14. na pl. Zamkowym w Warszawie, skąd ruszyli marszem „przez miejsca pamięci”, w Krakowie protestowano pod rosyjskim konsulatem. Demonstracje pod biało-niebiesko-białą flagą (symbolem sprzeciwu Rosjan wobec inwazji na Ukrainę) odbywają się na całym świecie. W Pradze aktywiści w ramach happeningu ułożyli się na pomalowanej czerwoną farbą jezdni w pozach, w jakich znaleziono cywilne ofiary masakry dokonanej przez wojska rosyjskie w Buczy na Ukrainie.",
    },
  ];

  return (
    <>
      <section className="about topMargin">
        <div className="container flex">
          {data.map((val) => {
            return (
              <>
                <div className="left mtop">
                  <div className="heading">
                    <h3>Protesty</h3>
                    <h2>&nbsp;{val.title} &nbsp;</h2>
                  </div>
                  <p>{val.desc1}</p>
                  <p>{val.desc2}</p>
                  <p>{val.desc3}</p>
                  <p>{val.desc4}</p>
                  <p>{val.desc5}</p>
                  <button className="primary-btn" onClick={() => Toggle()}>
                    Czytaj
                  </button>
                </div>
                <Modal
                  show={modal}
                  close={Toggle}
                  title="Auchan, Decathlon i Leroy Merlin z mniejszym ruchem"
                >
                  <p>
                    68,9 proc. Polaków twierdzi, że rezygnuje z kupowania
                    produktów i usług firm, które pozostają na rosyjskim rynku.
                  </p>
                  <p>
                    "Bojkot sieci handlowych, które nie wycofały się z Rosji, to
                    więcej niż tylko hasła w mediach społecznościowych. Dane o
                    płatnościach kartami PKO BP pokazują, że sieci, które
                    pozostały aktywne w Rosji, mają niższą dynamikę obrotów niż
                    konkurencja" — napisali analitycy PKO BP.
                  </p>
                  <br />
                  <p>
                    <em>
                      businessinsider.com.pl/firmy/auchan-decathlon-i-leroy-merlin-z-mniejszym-ruchem-nowe-dane/yzbcdlp
                    </em>
                  </p>
                </Modal>
                <div className="right">
                  <div className="img">
                    <img src="/assets/4.webp" alt="..." />
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default About;
