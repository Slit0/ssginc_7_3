import { Form, useLocation } from "react-router-dom";


function Signup(){

    const {state} =  useLocation();
    if(state !== null) console.log(state.username)
        
    return(
        <>
        <div>Signup 컴포넌트입니다.</div>
        <Form method="post">
          id:<input type="text" name="id" /><br></br>
          email:<input type="text" name="email" /><br></br>
          first_name:<input type="text" name="first_name" /><br></br>
          last_name:<input type="text" name="last_name" /><br></br>
          <button>저장</button>
        </Form>
        </>
    )
}
export default Signup;