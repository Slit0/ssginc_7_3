import { useLocation } from "react-router-dom";


function Signup(){

    const {state} =  useLocation();
    if(state !== null) console.log(state.username)
        
    return(
        <>
        <div>Signup 컴포넌트입니다.</div>
        </>
    )
}
export default Signup;