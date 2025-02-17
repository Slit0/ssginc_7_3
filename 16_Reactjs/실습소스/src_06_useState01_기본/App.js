import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  //num 값을 저장할 state 작성
  const [num, setNum] = useState(0);

  function up(){
     // num = num + 1; 불가
    //  setNum(num+1);
     setNum(num=>num+1);
    }
  function down(){
      // setNum(num-1);      // 값
      // setNum(num=>num-1); // arrow 함수
      setNum(num>0?num-1:0); // 3항연산자
  }

  console.log("App");
  return (
    <div className="App">
      <h2>num 값 변경</h2>
      <p>num값:{num}</p>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
