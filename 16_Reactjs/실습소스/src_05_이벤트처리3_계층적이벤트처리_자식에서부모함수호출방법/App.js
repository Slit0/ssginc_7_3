import logo from './logo.svg';
import './App.css';
import Home from './components/Home';

// 부모 컴포넌트
function App() {

  //부모가 아닌 자식에서 호출
  function handleEvent(n){
    console.log("handleEvent", n)
  }

  return (
    <div className="App">
      {/* 부모에서 자식에게 부모의 이벤트함수를 props로 전달함 */}
      <Home onHandleEvent={handleEvent}/>
    </div>
  );
}

export default App;
