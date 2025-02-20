import { useLoaderData } from "react-router-dom";
import UserList from "./UserList";

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
export default Users;