import Article from "./components/Article";
import React from "react";
import style from './style.module.scss'
import shopping from './assets/image/shopping.jpg'

function App() {
  return (
    <div className={style.app}>
      <div className={style.picture}>
        <img  src = {shopping} alt = 'изображение'/>
      </div>
      <Article />
    </div>
  );
}

export default App;
