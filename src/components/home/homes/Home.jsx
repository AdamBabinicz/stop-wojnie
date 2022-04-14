import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import Modal from "../../Portal/Modal";

const Home = () => {
  const [modal, setModal] = useState(false);
  const Toggle = () => setModal(!modal);

  return (
    <>
      <section className="home">
        <div className="container flex">
          <div className="left">
            <div className="img">
              <img src="/assets/7.jfif" alt="..." />
            </div>
          </div>
          <div className="right topMargin">
            <h1>Światowe protesty przeciw wojnie w&nbsp;Ukrainie</h1>
            <div className="socialIcon">
              <a
                href="//www.facebook.com/groups/366739828076335"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="facebook" />
              </a>
              <a
                href="//twitter.com/search?q=%23Bucza"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="twitter" />
              </a>
              <a
                href="//www.youtube.com/watch?v=b0O89XvGSSc"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="youtube" />
              </a>
              <a
                href="//pl.pinterest.com/pin/601371356505165247"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPinterestP className="pinterest" />
              </a>
            </div>
            <p>
              <strong>
                "To jest bandytyzm. Nasz prezydent po pierwsze, jest szalony. Po
                drugie, jest faszystą. Po trzecie, całe państwo zamienił
                w&nbsp;faszystowskie"
              </strong>
              - mówiła 84-letnia uczestniczka protestów w&nbsp;Petersburgu.
              Przeciw napaści na Ukrainę protestują rosyjscy naukowcy, studenci,
              kolektywy feministyczne i&nbsp;queerowe. Ich głos jest słaby, ale
              warto go usłyszeć.
            </p>
            <p>
              Od 24 lutego Rosjanie protestują w&nbsp;spontanicznych,
              nieskoordynowanych demonstracjach i&nbsp;marszach. Tylko do 6
              marca policja i&nbsp;OMON zatrzymały prawie <b>14 000</b> osób
              w&nbsp;przynajmniej 147 miastach Federacji, a&nbsp;ta liczba stale
              rośnie. To rekord zatrzymań, licząc od rozpadu Związku
              Radzieckiego.
            </p>
            <button className="primary-btn" onClick={() => Toggle()}>
              Więcej
            </button>
          </div>
          <Modal
            show={modal}
            close={Toggle}
            title="Madryt odebrał Putinowi złote klucze do miasta"
          >
            <p>
              Rada Miejska Madrytu na zgromadzeniu plenarnym odebrała glosami
              większości ugrupowań politycznych "złote klucze" Władimirowi
              Putinowi — wyróżnienie przyznane prezydentowi Rosji w 2006 r.
              podczas wizyty oficjalnej w Hiszpanii za poparcie, jakiego
              udzielił Hiszpanom podczas zamachów terrorystycznych w Madrycie 11
              marca 2004 r. — poinformowały w środę media krajowe.
            </p>
            <br />
            <p>
              <em>
                www.onet.pl/turystyka/onetpodroze/hiszpania-madryt-odebral-putinowi-zlote-klucze-do-miasta/fsszkyd,07640b54
              </em>
            </p>
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Home;

// https://www.deutschland.de/pl/news/setki-tysiecy-ludzi-demonstruja-przeciwko-wojnie
