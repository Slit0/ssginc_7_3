import logo from './logo.svg';
import './App.css';
import {useMemo, useState} from 'react'

function App() {

  const [num, setNum] = useState(0);

  function handleUp(){
    console.log("handleUp")
    setNum(num=>num+1)
  }
  // 복잡한 연산작업을 하는 함수(실행결과는 고정된값)
  // complext_fun는 함수임. 따라서 complext_fun() 호출해야됨.
  const complext_fun= ()=>{
    console.log("complext_fun")
    return 3456*2456*4.2;
  }
  // complext_fun2 는 함수가 아니고 리턴값임.
  const complext_fun2= useMemo( ()=>{
    console.log("complext_fun2")
    return 3456*2456*4.2;
  },[]); 

  console.log("App")
  return (
    <div className="App">
    <p>num:{num}</p>
    <button onClick={handleUp}>+</button>
    <hr/>
    useMemo 적용안한 복잡한연산값:{complext_fun()}
    <hr/>
    useMemo 적용한 복잡한연산값:{complext_fun2}
    </div>
  );
}

export default App;
