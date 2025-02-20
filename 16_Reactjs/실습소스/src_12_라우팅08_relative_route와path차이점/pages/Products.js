import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

function Products(){
    let [searchParams, setSearchParams] = useSearchParams();
    console.log(searchParams)
    var userid = searchParams.get("userid")
    return(
        <>
           <div>Products 컴포넌트입니다.</div>
           파라미터값: {userid}
        </>
    )
}
export default Products;