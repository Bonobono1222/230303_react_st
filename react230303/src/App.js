/* eslint-disable */
// 경고창 안 뜨게 해줌
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import Header from "./component/Header/Header";
// import Main from "./component/Main/Main";
// import MainPostCard from "./component/Main/MainPostCard";
// import Footer from "./component/Footer/Footer";
// import Blog from "./component/Blog/Blog";
import { Routes, Route, Link } from "react-router-dom";
import About from "./component/Router/About";
import Home from "./component/Router/Home";
import Products from "./component/Router/Products";
import ProductsDetail from "./component/Router/ProductsDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        {/* Route 안에는 속성 값아 두 개가 들어간다. path / element
          1. path: 페이지의 주소 URL
          2. element: path 주소로 이동했을 때 보여줄 페이지
          / -> 기본경로 */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>}>
        <Route path="member" element={<h1>자식입니다</h1>}/>
        <Route path="location" element={<h1>로케이션</h1>}/>
        </Route>
        
        <Route path="/products" element={<Products />}/>
        <Route path="/products/:id" element={<ProductsDetail />}/>
      </Routes>
      
    </div>
  );
}

export default App;
