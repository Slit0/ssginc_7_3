import logo from './logo.svg';
import './App.css';

// useReducer
import {useReducer} from 'react'
import MemberList from './components/MemberList.js'
function App() {

  // useReducer 생성
 const [state, dispatch] = useReducer(reducer,{
  memberData:[],
  username:'',
  age:'',
  address:''
 })

  function handleEvent(e){
    e.preventDefault();
    dispatch({type:'SUBMIT'})
  }
  function handleChange(e){
    dispatch({type:'CHANGE', payload:e})
  }

  function handleDelete(idx){
    console.log("handleDelete", idx)
    dispatch({type:'DELETE', payload:idx})
  }

  function reducer(state, action){

      if(action.type === 'SUBMIT'){
       
        //사용자 입력데이터 얻기
        var user ={
          username:state.username,  // 이순신
          age:state.age,
          address:state.address
        }
         // { memberData:[{username:'홍길동'}],username:'',age:'',address:'',
         //   memberData:[...membarData, user]}
          var new_state = {...state, memberData:[...state.memberData, user]} 
          return new_state;
      }
      if(action.type === 'CHANGE'){
        var new_inputs = {...state, [action.payload.target.name]:action.payload.target.value}
        return new_inputs
      }
      if(action.type === 'DELETE'){
        var new_memberData = state.memberData.filter((ele,i)=> i !== action.payload);
        //불변객체로 작성해서 반환
        var new_state = {...state, memberData:new_memberData} 
        // { memberData:[],username:'',age:'',address:'', memberData:new_memberData}
        return new_state;
      }
  }

  return (
    <div className="App">
      <h1>사용자 입력 화면</h1>
      <form onSubmit={handleEvent}>
        이름:<input type="text" name="username" value={state.username} onChange={handleChange}/> <br></br>
        나이:<input type="text" name="age" value={state.age} onChange={handleChange}/> <br></br>
        주소:<input type="text" name="address" value={state.address} onChange={handleChange}/> <br></br>
        <button>저장</button>
      </form>
      <hr/>
      <MemberList data={state.memberData} 
        onDelete={handleDelete} />
    </div>
  );
}

export default App;
