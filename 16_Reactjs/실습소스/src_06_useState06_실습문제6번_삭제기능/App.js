import logo from './logo.svg';
import './App.css';

import {useState} from 'react'
import MemberList from './components/MemberList.js'
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

  // 삭제
  function handleDelete(idx){
    console.log("handleDelete", idx)
    /*
    배열에서 일치하는 데이터를 삭제하는 코드구현은
    filter 함수이용해서 일치하지 않는 요소를 반환해서 구현한다.
    */
    var new_memberData = 
    memberData.filter((ele,i)=> i !== idx);

    setMemberData(new_memberData);
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
      <MemberList data={memberData} 
        onDelete={handleDelete} />
    </div>
  );
}

export default App;
