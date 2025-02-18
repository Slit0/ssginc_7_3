

function MemberList({data,onDelete}){
    return(
        <>
        {data.map((ele,idx)=>{
         return <div key={idx}>
                  {ele.username},{ele.age},{ele.address}
                  <button onClick={()=>onDelete(idx)}>삭제</button>
               </div>
      })}   
        </>
    );
}

export default MemberList;