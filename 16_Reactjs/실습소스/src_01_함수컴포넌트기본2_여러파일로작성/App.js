import logo from './logo.svg';
import './App.css';

//  App.js아닌 외부 파일로 화면 작성
import { Menu } from './components/Menu';
import Bottom from './components/Bottom';

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
