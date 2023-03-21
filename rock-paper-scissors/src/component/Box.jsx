/* eslint-disable */
// 경고창 안 뜨게 해줌
import React from 'react';

const styles = {
  img: {
    width: '300px',
    height: '300px',
    objectFit: 'cover'
  }
}

const Box = (props) => {

  let result;
  if(props.title === "Computer" && props.result !== "Tie" && props.result !== "" ) {
    // props.title이 Computer이고 props.result가 Tie가 아니고 props.result가 빈 문자열이 아닐 때
      result = props.result === "Win" ? "Lose" : "Win";
    // props.result가 Win면 result에 Lose를 반환하고 아니면 Win을 반환해라
  } else {
      result = props.result;
  }

  return (
      <div className={`box ${result}`}>
      {/* result값이 Win이냐 Lose냐에 따라 그 이름의 클래스가 추가된다. */}
      <h1>{props.title}</h1>
      <h2>{props.item && props.item.name}</h2>
      {/* props.item에 값이 있을 때 props.item.name을 렌더링 해라 */}
      <img style={styles.img} src={props.item && props.item.img}></img>
      {/* props.item에 값이 있을 때 props.item.img을 렌더링 해라 */}
      <h2>{result}</h2>
      </div>
  )
}


export default Box;