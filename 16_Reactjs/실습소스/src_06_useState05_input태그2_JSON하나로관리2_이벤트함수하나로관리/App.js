import logo from './logo.svg';
import './App.css';

import {useState} from 'react';

function App() {

  //userid 와 passwd 관리할 state 작성
  const [user, setUser] = useState({userid:'',passwd:''})

  function handleEvent(e){
     e.preventDefault();

     console.log("user:", user);
  }
  function handleChange(e){
    // JSON객체이기 때문에 불변객체로 만들어서 수정해야 됨.
     var new_user = {...user, [e.target.name]:e.target.value } 
     setUser(new_user)
  }

  return (
    <div className="App">
      <h1>사용자 입력 화면</h1>
      <form onSubmit={handleEvent}>
        아이디:<input type="text" name="userid" value={user.userid} onChange={handleChange}/> <br></br>
        비번:<input type="text" name="passwd" value={user.passwd} onChange={handleChange}/> <br></br>
        <button>로그인</button>
      </form>
    </div>
  );
}

export default App;
