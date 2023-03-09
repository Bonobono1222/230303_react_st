import logo from './logo.svg';
import './App.css';
// import { useState } from "react";
import Header from "./component/Header";
import Main from "./component/Main";
import Footer from "./component/Footer";

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