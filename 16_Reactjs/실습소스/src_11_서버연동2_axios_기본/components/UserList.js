
function UserList({data, onRemoveConfirm}){
    return(
       <>
         <table border={1}>
            <thead>
               <tr> 
                <th>아이디</th>
                <th>이메일</th>
                <th>first</th>
                <th>last</th>
                <th>사진</th>
                <th>삭제</th>
                </tr>
            </thead>
            <tbody>
              {data.map((row, idx)=>
                <tr key={idx}>
                   <td>{row.id}</td> 
                   <td>{row.email}</td> 
                   <td>{row.first_name}</td> 
                   <td>{row.last_name}</td> 
                   <td><img src={row.avatar} width={100} height={100} /></td> 
                   <td><button 
                   onClick={()=>onRemoveConfirm(row.id)}>삭제</button></td> 
                </tr>
              )}   
            </tbody>
         </table>
       </> 
    );
}

export default UserList;