import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {

  //배열관리 state
 const [memberData, setMemberData] = useState([])
 //이름,나이,주소 관리 state
 const [inputs, setInputs] = useState({username:'',age:'',address:''})

  function handleEvent(e){
    e.preventDefault();
    // 불변객체로 배열 수정
    var new_memberData = [...memberData, inputs] // [{username:'홍길동',age:'20',address:'부산'}]
    setMemberData(new_memberData)
  }
  function handleChange(e){
    // 불변객체로 JSON 수정
    var new_inputs = {...inputs, [e.target.name]:e.target.value}
    setInputs(new_inputs)
  }

  return (
    <div className="App">
      <h1>사용자 입력 화면</h1>
      <form onSubmit={handleEvent}>
        이름:<input type="text" name="username" value={inputs.username} onChange={handleChange}/> <br></br>
        나이:<input type="text" name="age" value={inputs.age} onChange={handleChange}/> <br></br>
        주소:<input type="text" name="address" value={inputs.address} onChange={handleChange}/> <br></br>
        <button>저장</button>
      </form>
      <hr/>
      {memberData.map((ele,idx)=>{
         return <div key={idx}>{ele.username},{ele.age},{ele.address}</div>
      })}
    </div>
  );
}

export default App;
