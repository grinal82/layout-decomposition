// App.js
import React from "react";
import NewsBlock from "./components/NewsBlock";
import SearchInput from "./components/SearchInput";
import Logo from "./components/Logo";
import Banner from "./components/Banner";
import InfoBlock from "./components/InfoBlock";
import "./App.css";
import {News} from  "./News";
import { CardsData } from "./CardsData";


let image = require('./assets/yandex_logo.png')
let banner = require('./assets/banner.png')

function App(data) {

  const news = News
  const cards = CardsData
  return (
    <>
    <div className="wrapper">
      <NewsBlock data={news} />
      <Logo image={image}/>
      <SearchInput placeholder = "Поиск Яндекса" />
      <Banner banner={banner}/>
      <InfoBlock 
        cardsData={cards}
      />
    </div>
    </>
  );
}

export default App;
