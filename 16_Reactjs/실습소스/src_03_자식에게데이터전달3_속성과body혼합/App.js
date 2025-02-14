import logo from './logo.svg';
import './App.css';
import daum from './assets/daum.png'

// 자식컴포넌트1 - props 파라미터로 처리
const Home1 =(props)=>{
  console.log(props) //{username: '홍길동', userage: 20, children: {…}}
  return(
    <>
        <h1>Home</h1>
        <hr/>
        이름:{props.username}<br></br>
        나이:{props.userage}<br></br>
        사진:{props.children}
    </>
  );
}

// 자식컴포넌트2 - 객체분해할당
const Home2 =(props)=>{
  console.log(props) //{username: '홍길동', userage: 20, children: {…}}
  const {username, userage, children} = props;
  return(
    <>
        <h1>Home</h1>
        <hr/>
        이름:{username}<br></br>
        나이:{userage}<br></br>
        사진:{children}
    </>
  );
}
// 자식컴포넌트3 - 파라미터에서 객체분해할당
const Home =({username, userage, children})=>{

  return(
    <>
        <h1>Home</h1>
        <hr/>
        이름:{username}<br></br>
        나이:{userage}<br></br>
        사진:{children}
    </>
  );
}

// 부모 컴포넌트
function App() {
  const username="홍길동";
  const userage = 20;
  return (
    <div className="App">
        <Home username={username} userage={userage} >
           <div>
              <img src={daum} width="100" height="100" />
           </div>
        </Home>
    </div>
  );
}

export default App;
