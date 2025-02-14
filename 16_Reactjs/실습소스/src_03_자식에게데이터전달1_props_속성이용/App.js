import logo from './logo.svg';
import './App.css';

//자식컴포넌트1- props 변수
function Home1(props){
  console.log(props)  // {username: '홍길동', userage: 20}
  const username = props.username;
  const age = props.userage;
  return(
     <>
      이름:{username}<br></br>
      나이:{age}<br></br>
     </>
  );
}

//자식컴포넌트2- 객체분해할당 ( destructuring)
function Home2(props){
  console.log(props)  // {username: '홍길동', userage: 20}
  const {username, userage} = props;

  return(
     <>
      이름:{username}<br></br>
      나이:{userage}<br></br>
     </>
  );
}

//자식컴포넌트3- 파라미터로 객체분해할당 지정 (*****************************)
function Home3({username, userage}){
 
  return(
     <>
      이름:{username}<br></br>
      나이:{userage}<br></br>
     </>
  );
}
//자식컴포넌트4- props 옵션 
function Home4({username, userage}){
  
    console.log(userage) //undefined
  return(
     <>
      이름:{username}<br></br>
      나이:{userage}<br></br>
     </>
  );
}
//자식컴포넌트5- props 옵션, 초기값 설정가능
function Home({username, userage=30}){
  console.log(userage) //30
return(
   <>
    이름:{username}<br></br>
    나이:{userage}<br></br>
   </>
);
}
// 부모 컴포넌트
function App() {

   const username="홍길동"
   const age = 20;

  return (
    <div className="App">
      <Home username="홍길동" userage={20}/>
      <Home username={username} userage={age}/>
      <Home username={username} />
    </div>
  );
}

export default App;
