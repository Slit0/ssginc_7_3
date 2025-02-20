import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";

function Cart(){
    
    //서버에서 가져온 cart 목록이라고 가정
    const CARTS=[{id:'P1',name:"핸드폰",price:2000},
        {id:'P2',name:"노트북",price:12000},
        {id:'P3',name:"이어폰",price:200}            
    ];



    return(
        <>
           <div>Cart 컴포넌트입니다.</div>
           {CARTS.map((row,idx)=>
               <p key={idx}>
                  <p>
                   <Link to={`/cart/${row.id}`}>
                       이름:{row.name}
                   </Link> 
                  </p>
                </p>
            )}
        </>
    )
}
export default Cart;