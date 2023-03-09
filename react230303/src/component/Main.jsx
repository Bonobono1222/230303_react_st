import React from 'react'
import "../component/Main.css";
import MainPostBox from "../component/MainPostBox";

const Main = () => {
  return (
    <main>
        <div className="mainWrapper">
          <section className="background">
            <div className="frontTxt">
              <h2 className="frontTitle">Lorem ipsum dolor sit.</h2>
              <p className="frontContent">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi eum possimus.<br></br>Nam iure aperiam quisquam ad rem, architecto modi soluta consectetur accusamus sunt exercitationem pariatur veniam nemo libero! A.
              </p>
              <button className="frontBtn" type="button" onClick={() => alert("안녕하세요!")}>버튼</button>
            </div>
          </section>

          <section className="top">
            <div className="secondTxt">
              <h2>Lorem ipsum dolor sit.</h2>
              <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi eum possimus. Nam iure aperiam quisquam ad rem, architecto modi soluta consectetur accusamus sunt exercitationem pariatur veniam nemo libero! A.
              </p>
            </div>
          </section>

          <section className="postBox">
            <MainPostBox></MainPostBox>
            <MainPostBox></MainPostBox>
            <MainPostBox></MainPostBox>
          </section>
        </div>
      </main>
  )
}

export default Main