import { Form, useLocation, redirect, useActionData} from "react-router-dom";
import { fetchUserSave } from "../api/httpService";

function Signup(){

   // return response 된 데이터 참조
   const data = useActionData();
   console.log("useActionData.data", data);

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

export // action 함수
async function users_add_action({params, request}){
  let formData = await request.formData();
  console.log("formData>>", formData)

  // 실제로 전달할 데이터임.
   const user1={
    id: formData.get("id"),
    email: formData.get("email"),
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),

   }

  // reqres.in에 전달한 데이터
   const user={
    "name": "morpheus",
    "job": "leader"
}
   const response = await fetchUserSave(user);
   console.log(">>>>>>>>users_add_action.response:" , response)

  //리턴되는 json을 현재컴포넌트인 Signup에서 useActionData()로 참조가능하다.
  if(true){
    return response;  // response 대신 {key:value} 수정가능
  }

  //최종적으로 리다이렉트
  return redirect("/users")
}

export default Signup;