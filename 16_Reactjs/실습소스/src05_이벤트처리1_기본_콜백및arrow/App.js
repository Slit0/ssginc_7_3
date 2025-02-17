import logo from './logo.svg';
import './App.css';


function App() {

   function handleEvent(){
    console.log("handleEvent", e)
   }
   function handleEvent2(n){
    console.log("handleEvent2", n)
   }
  return (
    <div className="App">
      <h2>1. 콜백 형식</h2>
       <button onClick={handleEvent}>OK1</button>

      <h2>2. arrow 형식</h2>
       <button onClick={()=>handleEvent()}>OK2</button>
       <button onClick={()=>handleEvent2(100)}>OK3</button>
    </div>
  );
}

export default App;
