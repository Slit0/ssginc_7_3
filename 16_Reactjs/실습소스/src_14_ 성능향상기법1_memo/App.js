
import './App.css';
import Home from './components/Home';
import {useState} from 'react'
import Home2 from './components/Home2';

function App() {

  const [num, setNum] = useState(0);

  function handleUp(){
    setNum(num=>num+1)
  }

  console.log("App");
  return (
    <div className="App">
       <p>num:{num}</p>
       <button onClick={handleUp}>+</button>
       <hr/>
       <Home data={num} />
       <Home2 data={10} />
    </div>
  );
}

export default App;
