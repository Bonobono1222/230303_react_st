import React from 'react'
import "../Footer/Footer.css";

const Footer = () => {
  return (
    <footer>
        <div className="globalFooter">
          <h3>Contact</h3>
          <ul className="footerList">
            <li className="footerItem">
            <a href="mailto:ririririri6@naver.com">메일</a>
            </li>
            <li className="footerItem">
              <a href="tel:01075776758">전화</a>
            </li>
            <li className="footerItem">
              <a href="http://www.youtube.com" target='_blank'>유튜브</a>
            </li>
          </ul>
        </div>
      </footer>
  )
}

export default Footer