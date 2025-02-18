
import './App.css';
import {forwardRef, useRef} from 'react'

const Home = forwardRef(function(props, ref){
  console.log("props: ", props)
  console.log("ref: ", ref)
  return(
    <>
     <h2>Home 컴포넌트</h2>
     아이디:<input type="text" name="userid" ref={ref}/>
    </>
  )
});

function App() {
  const home_ref = useRef(null)
  function handleEvent(){
    console.log(home_ref.current.value)
  }
  return (
    <div className="App">
    <button onClick={handleEvent}>자식의 input값 출력</button>
     <Home ref={home_ref} mesg="hello"/>
    </div>
  );
}

export default App;
