import React from "react";
import "../Main/Main.css";
import MainPostCard from "../Main/MainPostCard";

const Main = () => {
  return (
    <main>
      <Ipsum layout='background' name='frontTxt'/>
      <Ipsum layout='top' name='secondTxt'/>
    </main>
  )
}

function Ipsum(props) {
  const showBtn = props.name === 'frontTxt'? true : false;
  // props.name이 'frontTxt'가 맞으면 true를 반환하고 아니면 false를 반환해라
  return (
    <section className={props.layout}>
      <div className={props.name}>
        <h2>Lorem ipsum dolor sit.</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi sint aperiam tempora ratione sunt beatae alias nulla<br/>
          unde expedita suscipit quisquam natus dolores aliquam, placeat ea iusto, nesciunt, incidunt minima.
        </p>
        {showBtn && <button className='frontBtn' type="button" onClick={() => alert("안녕하세요!")}>버튼</button>}
        {/* showBtn이 true일 때만 button을 렌더링,
          이벤트 핸들러에 함수가 아닌 표현식이나 값을 바로 전달할 경우 컴포넌트가 재렌더링 될 때 마다 해당 값이 즉시 실행된다.*/}
      </div>
    </section>
  )
}

export default Main
