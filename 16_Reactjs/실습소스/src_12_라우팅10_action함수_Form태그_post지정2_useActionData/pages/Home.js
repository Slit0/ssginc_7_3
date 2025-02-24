import { Link } from "react-router-dom";


function Home(){
    return(
        <>
           <div>Home 컴포넌트입니다.</div>
           <p>
             <a href="/signup">signup요청(a태그)</a>
           </p>
           <p>
             <Link to="/signup" state={{username:'홍길동'}}>signup요청(Link 태그)</Link>
           </p>
        </>
    )
}
export default Home;