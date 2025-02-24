import { useLoaderData } from "react-router-dom";
import UserList from "./UserList";
import { fetchUserList } from "../api/httpService";
function Users(){

    const userList  = useLoaderData();
    console.log("Users:", userList)

    return(
        <>
        <div>Users 컴포넌트입니다.</div>
        <UserList data={userList} />
        </>
    )
}

//loader 외부함수
export async function users_loader(){
    const resonse = await fetchUserList(2);
    console.log("response>>>>>>>>>>>>>>>:", resonse)
    return resonse;
  }

export default Users;