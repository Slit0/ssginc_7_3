import logo from './logo.svg';
import './App.css';

import {useEffect, useState} from 'react'
import { fetchUserList } from './api/httpService';
import ResponseError from './components/ResponseError';
import UserList from './components/UserList';

function App() {

  // 에러를 저장하는 state 작성
  const [error, setError] = useState(null)

  // httpService.js와 연동해서 응답받은 userList 관리용 state 작성
  const [userData, setUserData] = useState([])

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

  return (
    <div className="App">
       {error && <ResponseError message={error}/>}
       <h2>App컴포넌트</h2>
       <hr/>
       <UserList data={userData} />
    </div>
  );
}

export default App;
