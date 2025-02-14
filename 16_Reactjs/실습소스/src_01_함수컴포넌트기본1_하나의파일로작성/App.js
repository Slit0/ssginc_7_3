import logo from './logo.svg';
import './App.css';

// 하나의 App.js에서 여러 화면 작성
function Menu(){
  return(
    <div>
       menu 화면입니다.
    </div>
  );
}
function Bottom(){
  return(
    <div>
       bottom 화면입니다.
    </div>
  );
}
function App() {
  return (
    <div className="App">
      <Menu />
      <hr/>
       Hello World
       <hr/>
       <Bottom />
    </div>
  );
}

export default App;
