import { Link, useNavigate, useParams } from "react-router-dom";

function CartDetail(){
   
    const {id} = useParams();
    return(
        <>
           <div>CartDetail 컴포넌트입니다.</div>
           <p>Cart 아이디:{id}</p>
           <h3>relative:route|path</h3>
           <p>
            <Link to=".." relative="route">뒤로(route)</Link>
           </p>
           <p>
            <Link to=".." relative="path">뒤로(path)</Link>
           </p>
        </>
    )
}
export default CartDetail;