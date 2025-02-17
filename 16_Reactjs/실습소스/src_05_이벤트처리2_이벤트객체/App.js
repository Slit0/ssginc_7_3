import logo from './logo.svg';
import './App.css';


function App() {

  // 콜백은 자동으로 이벤트 객체 전달
   function handleEvent(e){
    console.log("handleEvent", e)
   }
   // arrow 는 자동으로 이벤트 객체 전달 안되기 때문에 명시적으로 전달해야됨.
   function handleEvent2(e, n){
    console.log("handleEvent2", e, n)
   }
  return (
    <div className="App">
      <h2>1. 콜백 형식</h2>
       <button onClick={handleEvent}>OK1</button>

      <h2>2. arrow 형식</h2>
       <button onClick={(e)=>handleEvent(e)}>OK2</button>
       <button onClick={(e)=>handleEvent2(e, 100)}>OK3</button>
    </div>
  );
}

export default App;
