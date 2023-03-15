import React from 'react'
import "../Header/Header.css";


const Header = () => {
  return (
    <header>
        <nav>
          <h1 className="logo">
            <a href="../App.js">
            <img src={process.env.PUBLIC_URL + './무지개애플.png'} alt='Logo'/>
            </a>
          </h1>

          <h2 className="visuallyHidden">메뉴</h2>
          <ul className="gnbList">
            <li className="gnbItem">
              <a href="">menu1</a>
            </li>
            <li className="gnbItem">
              <a href="">menu2</a>
            </li>
            <li className="gnbItem">
              <a href="">menu3</a>
            </li>
          </ul>
        </nav>
      </header>
  )
}

export default Header