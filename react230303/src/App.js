/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import MainPostCard from "./component/Main/MainPostCard";
import Footer from "./component/Footer/Footer";
import Blog from "./component/Blog/Blog";
// 연결 경로 확인****

function App() {
  return (
    <div className="App">
      {/*<img src={process.env.PUBLIC_URL + './Hamster.jpg'}/>*/}
      <div className="wrapper">
       <Blog/>
      </div>
    </div>
  );
}

export default App;
