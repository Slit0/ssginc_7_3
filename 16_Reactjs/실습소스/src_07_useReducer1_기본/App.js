import logo from './logo.svg';
import './App.css';

import {useReducer} from 'react';

//useReducer 이용

function App() {

  //useReducer 생성
  const [state, dispatch] = useReducer(reducer,0);

  function up(){
       dispatch({type:'UP'}) // 자동으로 reducer함수가 호출됨
    }
  function down(){
       dispatch({type:'DOWN', payload:100})
  }

  function reducer(state, action){
     console.log(state, action)
     if(action.type === 'UP'){
        return state + 1
     } 
      if(action.type === 'DOWN'){
        return state>0?state-1:0
     } 
  }
  console.log("App");
  return (
    <div className="App">
      <h2>state 값 변경</h2>
      <p>state값:{state}</p>
      <button onClick={up}>+</button>
      <button onClick={down}>-</button>
    </div>
  );
}

export default App;
