import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  //userid 와 passwd 관리할 state 작성
  const [userid, setUserid] = useState('')
  const [passwd, setPasswd] = useState('')

  function handleEvent(e){
      e.preventDefault(); // 서브밋 방지
      console.log("userid:", userid)
      console.log("passwd:", passwd)
  }

  function handleChange(e){
    // value값과 state 동기화
    console.log(e.target.value)
    setUserid(e.target.value)
  }
  function handleChange2(e){
    // value값과 state 동기화
    console.log(e.target.value)
    setPasswd(e.target.value)
  }
  return (
    <div className="App">
      <h1>사용자 입력 화면</h1>
      <form onSubmit={handleEvent}>
        아이디:<input type="text" name="userid" value={userid} onChange={handleChange}/> <br></br>
        비번:<input type="text" name="passwd" value={passwd} onChange={handleChange2}/> <br></br>
        <button>로그인</button>
      </form>


    </div>
  );
}

export default App;
