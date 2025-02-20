import { Link, useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate()

  function handleEvent(){
    navigate("/login", { state: { age: "20" } })
  }
    return(
        <>
           <div>Home 컴포넌트입니다.</div>
           <p>
             <a href="/signup">signup요청(a태그)</a>
           </p>
           <p>
             <Link to="/signup" state={{username:'홍길동'}}>signup요청(Link 태그)</Link>
           </p>
           <hr/>
           <button onClick={handleEvent}>login 요청(프로그래밍이용)</button>
        </>
    )
}
export default Home;