import { Link, useLocation } from "react-router-dom";


function Login(){
    const {state} = useLocation();
    console.log(state)
    if(state !== null) console.log(state.age)
    return(
        <>
           <div>Login 컴포넌트입니다.</div>
        </>
    )
}
export default Login;