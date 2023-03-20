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
import Modal2 from "./component/Modal2";
import { useEffect } from "react";


function App() {
  
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('useEffect1');
  },[]);
  // ,[] 넣어줘서 한 번만 콘솔 창에 찍히게

  useEffect(() => {
    console.log('useEffect2', count);
  },[count]);
  // useEffect -> 렌더링 될 때 함수가 제대로 호출 되는지 확인 할 수 있게 해줌
  // Array에 state 값을 넣으면 리액트가 그 값을 주시하고 있다가
  // 업데이트 되면 render state가 업데이트 되었다고 알려준다.

  return (
    <div className="App">
      {console.log('render')}
      <h2>{count}</h2>
      <button onClick={() => {
        setCount(count + 1)}}>더하기 +1</button>
      <Routes>
        {/* Route 안에는 속성 값아 두 개가 들어간다. path / element
          1. path: 페이지의 주소 URL
          2. element: path 주소로 이동했을 때 보여줄 페이지
          / -> 기본경로 */}
        <Route path="/" element={<Home/>}/>
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

