import logo from './logo.svg';
import './App.css';


// 1. 단하나의 root 태그가 존재해야 된다.
// 2. 반드시 종료태그가 존재해야 된다.
function Home1(){
  return(
    <>
          <p>A</p>
          <hr></hr>
          <p>B</p>
    </>
  );
}
// 3. JSX에서 변수 출력
function Home2(){
 
  const name ="홍길동";
  let age = 20;
  var address = "서울";
 
  return(
    <>
      <p>
       이름:{age}
      </p>
      <p>
       나이:{name}
      </p>
      <p>
       주소:{address}
      </p>
    </>
  );
}

// 4. {변수값} 에서 산술연산, 비교연산자, 논리 연산자, 3항연산자 등 모둑 가능
// 단, 논리값(true/false), null, undefiend 는 {변수값} 사용시 출력안됨.
function Home3(){
 
  const name ="홍길동";
  let age = 20;
  var address = "서울";
  var email = null;
 
  return(
    <>
      <p>
       내년나이:{age+1}
      </p>
      <p>
       30보다 크냐:{age > 30}
      </p>
      <p>
       30보다 크고 40보다 작냐: {age > 30 && age < 40}
      </p>
      <p>
       30보다 크면 '크다' 작으면 '작다' 출력: {age > 30 ? '크다':'작다'}
      </p>
      <p>
         email:{email}
      </p>
    </>
  );
}
  // 5.  JSX에서 CSS 적용하는 방법 2가지
  // a. className 속성
  // b. style 속성
  // JSX 의 CSS 는 카멜표기법 ( 예> fontSize: 40px ) 사용한다.
  function Home4(){

    const app = {color:'yellow'}

    return(
      <>
            <p className="home">A</p>
            <hr></hr>
            <p style={{color:'blue', fontSize:'50px', backgroundColor:'green'}}>B</p>
            <hr></hr>
            <p style={app}>C</p>
      </>
    );
  }
   // 6. 조건부 랜더링
   function Menu(){
    return(
       <>
         Menu 컴포넌트
       </>
    );
   }
   function Home5(){
    const flag = true;
   return(
     <>
       <h1>Home</h1>
       <hr></hr>
        { flag  && <Menu />}  
     </>
   );
 }


  // 7. spread 연산자
  function Home6(){
    
    const attr = {href:"http://google.com", target:"_blank"}

    return(
      <>
        <h1>Home</h1>
         <p>
          원본코드: <a href="http://www.daum.net" target="_blank">다음사이트</a>
         </p>
         <p>
          Spread 코드 적용: <a {...attr}>구글사이트</a>
         </p>
      </>
    );
  }

  // 8. JSX에서 이벤트처리시 이벤트 핸들러 속성은 반드시 카멜표기법을 사용해야된다.
  function Home(){
    
    // 이벤트 처리하는 콜백함수는 컴포턴트 안에서 정의한다.
    function handleEvent(){
      alert("OK")
    }
    const  handleEvent2 = function (){
      alert("OK2")
    }
    const  handleEvent3 = ()=>{
      alert("OK3")
    }
    return(
      <>
        {/* <h1>Home</h1> */}
        {/* JSX 주석입니다.  */}
        <button onClick={handleEvent}>OK</button>
        <button onClick={handleEvent2}>OK2</button>
        <button onClick={handleEvent3}>OK3</button>
      </>
    );
  }
function App() {
  return (
    <div className="App">
       <Home />
    </div>
  );
}

export default App;
