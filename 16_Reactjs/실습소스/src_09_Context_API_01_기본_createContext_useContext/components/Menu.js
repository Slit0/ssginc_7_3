// Menu.js

import { useContext } from "react";
import UserContext from "../store/UserContext";
function Menu(){

    // username과 sayEcho 접근하기
    const userCtx = useContext(UserContext)
    console.log("Menu.userCtx:", userCtx)
    return(
        <>
        <h2>Menu컴포넌트</h2>
        username:{userCtx.username}
        <button onClick={userCtx.sayEcho}>sayEcho 호출</button>
        </>
    );
}
export default Menu;