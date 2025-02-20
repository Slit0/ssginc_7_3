import { Link, useNavigate, useParams } from "react-router-dom";

function Users(){
 
    const xxx = useParams(); // {id: '1'}
    const {id} = useParams(); // 
    console.log(xxx);
    return(
        <>
           <div>Users 컴포넌트입니다.</div>
            파라미터값:{id}
        </>
    )
}
export default Users;