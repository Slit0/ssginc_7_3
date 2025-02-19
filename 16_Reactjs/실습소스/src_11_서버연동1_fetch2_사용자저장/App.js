import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react'
import { fetchUserList,fetchUserSave } from './api/httpService';
import ResponseError from './components/ResponseError';
import UserList from './components/UserList';

function App() {

  // 에러를 저장하는 state 작성
  const [error, setError] = useState(null)

  // httpService.js와 연동해서 응답받은 userList 관리용 state 작성
  const [userData, setUserData] = useState([])

  //사용자 정보 관리용 state 작성
  const [inputs, setInputs] = useState({
    id:'',
    email:'',
    first_name:'',
    last_name:'',
    avatar:'https://reqres.in/img/faces/7-image.jpg'
  })

  useEffect(()=>{

    // 함수안에서 httpService.js의 fetchUserList(n) 호출해야 됨.
    async function xxx(){
      try{
        var userList  = await fetchUserList(2);
        setUserData(userList)
      }catch(error1){
        console.log("Error:", error1.name, error1.message)
        setError({mesg: error1.message})
      }
    }
    xxx();
  },[]);

  async function handleSubmit(e){
    /* 서버연동 
      -  원래는 inputs를 전달해야 되는데, 서버가 우리가 만든것이 아니기 때문에 다음과 같은 JSON을 요청해야 된다.
    요청:
      {
        "name": "morpheus",
        "job": "leader"
      }
    
    응답: status: 201
        {
          "name": "morpheus",
          "job": "leader",
          "id": "903",
          "createdAt": "2025-02-19T04:18:04.123Z"
       }
    */
      e.preventDefault();
      console.log("inputs: " , inputs);

       var dummy={
        "name": "morpheus",
        "job": "leader"
      };

      //httpService.js 에서 fetchUserSave 호출
      const response = await fetchUserSave(dummy);
      console.log("App.respose:", response)

      //로컬 저장 ( 실제로는 구현 안함. )
      var new_userData = [...userData, inputs]
      setUserData(new_userData)
  }


  function handleChange(e){
    var new_inputs={...inputs, [e.target.name]:e.target.value}
    setInputs(new_inputs)
  }

  return (
    <div className="App">
       {error && <ResponseError message={error}/>}
       <h2>App컴포넌트</h2>
       <hr/>
       <UserList data={userData} />
       <hr/>
       <form onSubmit={handleSubmit}>
         아이디:<input type="text" name="id" value={inputs.id} onChange={handleChange}/><br></br>
         이메일:<input type="text" name="email" value={inputs.email} onChange={handleChange}/><br></br>
         first:<input type="text" name="first_name" value={inputs.first_name} onChange={handleChange}/><br></br>
         last:<input type="text" name="last_name" value={inputs.last_name} onChange={handleChange}/><br></br>
         <button>저장</button>
       </form>
    </div>
  );
}

export default App;
