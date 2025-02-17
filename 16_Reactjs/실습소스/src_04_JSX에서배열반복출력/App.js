import logo from './logo.svg';
import './App.css';

// 반복할 배열 (원래는 서버에서 가져온 데이터임)
const userList = [{username:"홍길동1",age:20},
  {username:"홍길동2",age:30},
  {username:"홍길동3",age:40}
];

/////////////////////////////////////////
//1. 일반 JS에서 배열 반복처리 (map 함수)
var result = userList.map(function(ele, idx){
  console.log(ele, idx); // {username:"홍길동"} 0
  return ele;
});

var result = userList.map((ele, idx)=>ele);
console.log("result:", result);

/////////////////////////////////////////

function App() {
  return (
    <div className="App">
      {/*
          2. JSX에서 배열 반복처리 (map 함수)
          - JSX에서는 {json객체} 출력 불가
          - 반복처리시 개별적인 JSX태그를 구별하기 위한 unique 값을 설정해야 됨.
            key="unique값"
            이유는 React는 화면랜더링할 때 매번 똑같은 화면을 랜더링하지 않고
            수정된 항목만 랜더링한다. 이때 비교하기 위한 unique한 값이 필요함.
      */}

      {userList.map((ele,idx)=>{
        return <div key={idx}> {ele.username}, {ele.age}</div>
      })}
    </div>
  );
}

export default App;
