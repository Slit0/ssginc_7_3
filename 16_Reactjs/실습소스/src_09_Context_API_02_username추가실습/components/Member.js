
// Member.js
// 사용자 입력폼 처리
import {useRef, useContext} from 'react'
import MemberList from "./MemberList";
import UserContext from "../store/UserContext";
function Member(){

    // const userCtx = useContext(UserContext)
    const {handleUserAddEvent} = useContext(UserContext)

    const input_ref = useRef(null)

    function handleEvent(e){
        e.preventDefault();
        var username = input_ref.current.value;
        console.log(username)
        //userCtx.handleUserAddEvent(username)
        handleUserAddEvent(username)
    }
    return(
       <>
         <h2>Member 컴포넌트</h2>
         <h1>사용자 입력 화면</h1>
        <form onSubmit={handleEvent}>
            이름:<input type="text" name="username" ref={input_ref}/> <br></br>
            <button>저장</button>
        </form>
        <hr/>
        <MemberList />
       </> 
    );  
}

export default Member;