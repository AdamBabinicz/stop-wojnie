import React from "react";
import "./App.css";
import Header from "./components/home/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePages from "./components/pages/HomePages";
import Footer from "./components/home/Footer";
import Blog from "./components/home/blog/Blog";
import About from "./components/home/about/About";
import Services from "./components/home/servicess/Services";
import Skill from "./components/home/Skill";
import Work from "./components/home/work/Work";
import ScrollToTop from "./ScrollToTop";
import CookieConsent from "react-cookie-consent";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Switch>
          <Route path="/" exact component={HomePages} />
          <Route path="/protesty" exact component={About} />
          <Route path="/doniesienia" exact component={Blog} />
          <Route path="/reakcja" exact component={Services} />
          <Route path="/opinie" exact component={Skill} />
          <Route path="/karykatury" exact component={Work} />
        </Switch>
        <Footer />
        <CookieConsent
          debug={true}
          location="bottom"
          style={{
            background: "#333",
            textAlign: "left",
            paddingBottom: "1rem",
            fontSize: "16px",
            fontFamily: "Gideon Roman",
          }}
          buttonStyle={{
            color: "#333",
            background: "#fff",
            fontSize: "18px",
            fontFamily: "Gideon Roman",
            marginRight: "1rem",
          }}
          buttonText="OK, rozumiem"
          expires={365}
        >
          "W ramach naszej witryny stosujemy pliki cookies w celu świadczenia
          Państwu usług na najwyższym poziomie, w tym w sposób dostosowany do
          indywidualnych potrzeb. Korzystanie z witryny bez zmiany ustawień
          dotyczących cookies oznacza, że będą one zamieszczane w Państwa
          urządzeniu końcowym. Możecie Państwo dokonać w każdym czasie zmiany
          ustawień dotyczących cookies."
        </CookieConsent>
      </Router>
    </>
  );
}

export default App;
