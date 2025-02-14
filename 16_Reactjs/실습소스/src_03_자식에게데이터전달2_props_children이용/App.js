import logo from './logo.svg';
import './App.css';
import daum from './assets/daum.png'
// 자식컴포넌트1 - props 파라미터사용
function Home1(props){
  console.log(props) // {children:값}
  const xxx = props.children;
  return(
    <>
        <h1>Home</h1>
        <hr/>
        {xxx}
    </>
  );
}
// 자식컴포넌트2 - 객체분해할당
function Home2(props){
  console.log(props) // {children:값}
  const {children} = props;
  return(
    <>
        <h1>Home</h1>
        <hr/>
        {children}
    </>
  );
}
// 자식컴포넌트3 - 파라미터에서 객체분해할당 (***************)
function Home3({children}){
  return(
    <>
        <h1>Home</h1>
        <hr/>
        {children}
    </>
  );
}

// 자식컴포넌트4 - 파라미터에서 객체분해할당 + arrow (***************)
const Home =({children})=>{
  return(
    <>
        <h1>Home</h1>
        <hr/>
        {children}
    </>
  );
}
// 부모 컴포넌트
function App() {
  return (
    <div className="App">
        <Home>
           <div>
              <img src={daum} width="100" height="100" />
           </div>
        </Home>
    </div>
  );
}

export default App;
