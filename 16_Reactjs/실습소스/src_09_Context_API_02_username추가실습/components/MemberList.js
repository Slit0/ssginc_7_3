
// MemberList.js
// 사용자 목록보여주기
import {useContext} from 'react'
import UserContext from "../store/UserContext";
function MemberList(){

   // const userCtx = useContext(UserContext)
   const {memberAdd} = useContext(UserContext)
    return(
       <>
         <h2>MemberList 컴포넌트</h2>
         {memberAdd.map((ele,idx)=>{
         return <div key={idx}>{ele}</div>
      })}
       </> 
    );  
}

export default MemberList;