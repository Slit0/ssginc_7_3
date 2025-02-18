// store/UserContext


import { createContext, useState } from 'react';

//1. 저장소 설정 ( 첫글자는 반드시 대문자, <컨텍스트명 /> 태그 형식으로 사용됨)
const UserContext = createContext({
    username:'',
    sayEcho:()=>{}
})

// 2. UserContextProvider 작성
export function UserContextProvider({children}){

    // username 과 sayEcho 관리
    const [username, setUsername] = useState('홍길동')

    function sayEcho(){
        console.log("sayEcho")
    }

    //username 과 sayEcho 저장
    const userCtx = {
        username:username,
        sayEcho:sayEcho
    }
    return <UserContext.Provider value={userCtx}>
            {children}
           </UserContext.Provider>
}


export default UserContext;


