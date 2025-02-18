
import './App.css';
import {forwardRef, useRef, useImperativeHandle} from 'react'

const Home = forwardRef(function(props, ref){

  //부모인 App에서 호출한 함수
  function open(){
    console.log("open")
  }
  function close(){
    console.log("close")
  }
  function input_ref_value(){
    return input_ref.current.value;
  }
  // input 접근가능한 ref 작성
  const input_ref = useRef(null)
  // open과 close 등록
  useImperativeHandle(ref,()=>({open,close,input_ref_value}));
  return(
    <>
     <h2>Home 컴포넌트</h2>
     아이디:<input type="text" name="userid" ref={input_ref}/>
    </>
  )
});

function App() {
  const home_ref = useRef(null)
  function handleEvent(){
    //자식 open함수와 close호출
    home_ref.current.open();
    home_ref.current.close();
    console.log(home_ref.current.input_ref_value())

  }
  return (
    <div className="App">
    <button onClick={handleEvent}>자식의 input값 출력</button>
     <Home ref={home_ref} mesg="hello"/>
    </div>
  );
}

export default App;
