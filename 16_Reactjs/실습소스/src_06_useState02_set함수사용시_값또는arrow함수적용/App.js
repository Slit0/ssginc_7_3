import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  //num 값을 저장할 state 작성
  const [num, setNum] = useState(0);

  function up(){
    // 값 지정: 배치로 실행됨. 따라서 num값은 한번만 변경됨
     setNum(num+1);
     setNum(num+1);
    }
  function down(){
    // arrow 함수 지정 :  매번 실행됨. 따라서 num값은 두번 변경됨
      setNum(num=>num-1); // arrow 함수
      setNum(num=>num-1); // arrow 함수
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
