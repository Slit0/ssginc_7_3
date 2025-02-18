import logo from './logo.svg';
import './App.css';

import {useRef} from 'react';

function App() {

  const input_userid = useRef(null) // 초기화 필수
  const input_passwd = useRef(null) // 초기화 필수

  function handleEvent(e){
      e.preventDefault(); // 서브밋 방지
      var userid = input_userid.current.value;
      var passwd = input_passwd.current.value;

      console.log("userid:", userid)
      console.log("passwd:", passwd)
  }
  return (
    <div className="App">
      <h1>사용자 입력 화면</h1>
      <form onSubmit={handleEvent}>
        아이디:<input type="text" name="userid" ref={input_userid} /> <br></br>
        비번:<input type="text" name="passwd"   ref={input_passwd} /> <br></br>
        <button>로그인</button>
      </form>


    </div>
  );
}

export default App;
