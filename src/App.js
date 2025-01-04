import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import Image from "./components/Image";
import GoodsGallery from "./components/GoodsGallery";
import './components/style.css';

const App = () => {
  return (
    <div>
      <div className="container">
        <Header />
        <Content />
        <Image />
      </div>
      <h1>Галерея товарів</h1>
      <GoodsGallery />
    </div>
  );
};

export default App;