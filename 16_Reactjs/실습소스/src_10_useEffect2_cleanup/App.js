import logo from './logo.svg';
import './App.css';

import {useState, useEffect} from 'react'

function App() {

  const [num, setNum] = useState(0)
  const [name, setName] = useState('')

  //부수효과

  useEffect(()=>{
     console.log("실제 부수효과 작업")
     //....
     return ()=>{console.log("clean up") }
  },[num])

  function up(){
     setNum(num=>num+1)
    // setName("홍길동")
  }

  console.log("App")
  return (
    <div className="App">
      <p> num:{num} </p>
      <button onClick={up}>+</button>
    </div>
  );
}

export default App;
