// src/UserContext.js

import { createContext, useState } from 'react';

const UserContext = createContext({
    memberAdd:[],    //  MemberList 컴포넌트가 사용
    handleUserAddEvent:(username)=>{}   // Member  컴포넌트가 사용
})

export function  UserContextProvider({children}){
   
    //createContext에서 생성된 JSON 데이터관리
    const [memberAdd, setMemberAdd] = useState([])

    //createContext에서 생성된 함수 구현
    function handleUserAddEvent(username){
        //불변객체
        setMemberAdd([...memberAdd, username])
        console.log(memberAdd)
    }
      //최종적으로 JSON데이터와 함수를 저장
    const userCtx = {
        memberAdd:memberAdd,
        handleUserAddEvent:handleUserAddEvent

    }	
    return <UserContext.Provider value={userCtx}>
            {children}
            </UserContext.Provider> 
}

export default UserContext;