import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {

  //json 관리용 state 작성
  const [user, setUser] = useState({username:'', age: 0})

  //배열 관리용 state 작성
  const [num, setNum] = useState([])
  
  function handleArrayEvent(){
      // num 배열에 정수값 10을 계속 저장하자.
      var new_num = [...num, 10]
      console.log(num,  new_num)
      setNum(new_num)

      // setNum([...num, 10])
  }

  function handleJSONEvent(){
     // user에 {username:'홍길동', age: 20} 저장하자.

     //  var new_user ={...user} 
     // {username:'', age: 0, username:'홍길동', age: 20}=> {username:'홍길동', age: 20} 
     var new_user ={...user, username:'홍길동', age: 20} 
     console.log(user,  new_user, user === new_user)
     setUser(new_user)
     
    //  setUser({...user, username:'홍길동', age: 20})

  }

  return (
    <div className="App">

      <h2>1. JSON </h2>
      이름:{user.username}<br></br>
      나이:{user.age}<br></br>
      <button onClick={handleJSONEvent}>JSON 수정</button>


      <h2>2. 배열 </h2>
       배열값:{num}<br></br>
      <button onClick={handleArrayEvent}>배열 수정</button>

    </div>
  );
}

export default App;
