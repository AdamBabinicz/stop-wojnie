import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";
import { AiOutlinePhone } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BsEnvelope } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="foot">
        <div className="container grid1">
          <div className="box">
            <img src="/assets/2.png" alt="..." />
            <p>
              Na ulicach wielu polskich miast pojawiły się niebiesko-żółte flagi
              i rozbrzmiewał hymn Ukrainy. W ten sposób Polacy i mieszkający tu
              Ukraińcy pokazali swoją solidarność z sąsiadami i potępienie dla
              rosyjskiej agresji.
            </p>
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
          </div>
          <div className="box">
            <h3>Linki</h3>
            <ul>
              <li>
                <Link to="/">Start</Link>
              </li>
              <li>
                <Link to="/protesty">Protesty</Link>
              </li>
              <li>
                <Link to="/reakcja">Reakcja</Link>
              </li>
              <li>
                <Link to="/opinie">Opinie</Link>
              </li>
              <li>
                <Link to="/karykatury">Karykatury</Link>
              </li>
              <li>
                <Link to="/doniesienia">Doniesienia</Link>
              </li>
            </ul>
          </div>
          <div className="box">
            <h3>Artykuły</h3>
            <div className="text">
              <a
                href="//www.dw.com/pl/wojna-rosji-przeciwko-ukrainie-i-malej%C4%85cy-presti%C5%BC-niemiec/a-61419115"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Blamaż Niemiec</p>
              </a>
              <span>08 kwietnia 2022'</span>
            </div>
            <div className="text">
              <a
                href="//www.polsatnews.pl/wiadomosc/2022-03-15/wojna-w-ukrainie-za-protest-przeciwko-wojnie-na-ukrainie-sad-skazal-dziennikarke-na-grzywne"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Kara dla dziennikarki</p>
              </a>
              <span>15 marca 2022'</span>
            </div>
            <div className="text">
              <a
                href="//businessinsider.com.pl/wiadomosci/wojna-w-ukrainie-dzieci-rosyjskich-miliarderow-przeciwne-konfliktowi/vvjh3wn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Dzieci rosyjskich oligarchów</p>
              </a>
              <span>13 marca 2022'</span>
            </div>
          </div>
          <div className="box">
            <h3>Kontakt</h3>
            <p>WALKA UKRAIŃCÓW O WOLNOŚĆ JEST WALKĄ NAS WSZYSTKICH!</p>
            <div className="icon">
              <GoLocation />
              <label htmlFor="">Location: Polska</label>
            </div>
            {/* <div className="icon">
              <AiOutlinePhone />
              <label htmlFor="">Phone: +14578 526 4789</label>
            </div> */}
            <div className="icon">
              <BsEnvelope />
              <label htmlFor="">Email: puaro@vp.pl</label>
            </div>
          </div>
        </div>
        <div className="legal container">
          <p>Radom</p>
          <label htmlFor="">
            2022 - <span>{new Date().getFullYear()}.</span>
          </label>
        </div>
      </footer>
    </>
  );
};

export default Footer;
