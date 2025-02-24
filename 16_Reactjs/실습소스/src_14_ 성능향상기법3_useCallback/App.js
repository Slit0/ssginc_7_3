import logo from './logo.svg';
import './App.css';

import {useCallback, useState} from 'react';


const set = new Set(); // 중복안됨

function App() {

  //num 값을 저장할 state 작성
  const [num, setNum] = useState(0);

  const up =useCallback(()=>{
    console.log("up")
    setNum(num=>num+1);
  },[]);
   
  const down= ()=>{
    console.log("down")
      //setNum(num>0?num-1:0); // 3항연산자
      setNum(num-1)
  };

  // up 또는 down 함수
  // set.add(up)  // set에 하나의 up함수만 저장됨.
  set.add(down)    // set에 매번 새롭게 생성된 down함수가 저장됨.   
  console.log(set)


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
