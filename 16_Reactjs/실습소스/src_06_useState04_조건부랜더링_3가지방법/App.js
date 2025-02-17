import logo from './logo.svg';
import './App.css';

import {useState} from 'react'

function App() {
  
  // 버튼 클릭 여부 저장하는 state 생성
  const [isShow, setIsShow] = useState(true)
  
  function handleEvent(){
    //  setIsShow(!isShow) // OLD 방법
      setIsShow(isShow=>!isShow); // 논리값 수정은 arrow 함수 권장함.
  }

  //방법1 - if문
  let mesg = ""
  if(isShow){
     mesg = <><Home/></>
  }
  return (
    <div className="App">
      <h2>state 이용한 조건부 랜더링1-if문</h2>
       {mesg}
       <button onClick={handleEvent}>{isShow?'감추기':'보여주기'}</button>

      <h2>state 이용한 조건부 랜더링2- 3항연산자</h2>
      {/* 방법2 - 3항연산자 */}
      {isShow?<><Home/></>:""}
      <button onClick={handleEvent}>{isShow?'감추기':'보여주기'}</button>

      <h2>state 이용한 조건부 랜더링3- && 연산자 이용(권장방법)</h2>
      {isShow && <><Home/></> }
      <button onClick={handleEvent}>{isShow?'감추기':'보여주기'}</button>
    </div>
  );
}


/*
    조건에 따라서 보여줄 컴포넌트(JSX)는 <Home />이다.
*/
function Home(){
  return (
    <div>Home</div>
  );
}


export default App;
