import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./component/Header/Header";
import Main from "./component/Main/Main";
import Footer from "./component/Footer/Footer";
// 연결 경로 확인****

function App() {
  return (
    <div className="App">
      {/*<img src={process.env.PUBLIC_URL + './Hamster.jpg'}/>*/}
      <div className="wrapper">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
