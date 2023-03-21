import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { useState } from 'react';
import { useEffect } from 'react';

const choice = {
  scissors : {
    name: "Scissors",
    img: "https://cdn.pixabay.com/photo/2017/02/01/10/46/avatar-2029577_960_720.png"
  },

  rock : {
    name: "Rock",
    img: "https://cdn.pixabay.com/photo/2014/03/24/17/13/fist-295159__340.png"
  },

  paper : {
    name: "Paper",
    img: "https://cdn.pixabay.com/photo/2017/09/01/11/56/the-palm-of-your-hand-2704015_960_720.jpg"
  }
}



function App() {

  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    console.log(userChoice,"선택됨!")
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    // randomChoice()함수를 실행 했을 때 결과값
    setComputerSelect(computerChoice);
    // 스테이트 변경 함수에 randomChoice()함수를 실행 했을 때 결과값을 넣어준다.
    setResult(judgment(choice[userChoice],computerChoice));
    // 1. 유저가 선택한 값
    // 2. 컴퓨터가 선택한 값을 넣어준다.
    // 두 값을 judgment함수에 매개변수로 보내준다.
  }
    const judgment = (user, computer) => {
      if(user.name === computer.name) {
        return "Tie"
      } else if(user.name == "Scissors") return (computer.name == "Rock" ? "Lose" : "Win");
        else if(user.name == "Rock") return (computer.name == "Paper" ? "Lose" : "Win");
        else if(user.name == "Paper") return (computer.name == "Rock" ? "Win" : "Lose" );
      }
    
      const randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random()*itemArray.length);
        
        let final = itemArray[randomItem];
        
        return choice[final];
      }
  
  return (
    <div className="App">
      <div className='boxList'>
        <Box title="You" item = {userSelect} result= {result}/>
        <Box title="Computer" item = {computerSelect} result= {result}/>
      </div>
      <div className='btnList'>
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
        {/* onClick 콜백함수로 적기(안 그러면 렌더링 되자마자 실행된다.)
            play함수한테 매개변수로 값을 전달한다.*/}
      </div>
    </div>
  );
}

export default App;
