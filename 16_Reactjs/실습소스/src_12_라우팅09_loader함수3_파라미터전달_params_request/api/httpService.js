

// axios 이용한 서버 연동
import axios from 'axios'

export async function fetchUserList(n){

    // const response = await axios(`https://reqres.in/api/users?page=${n}`)
    // const response = await axios(`https://reqres.in/api/users`,{ params:{page:`${n}`}})
    // const response = await axios.get(`https://reqres.in/api/users?page=${n}`)
    const response = await axios({methdo:'get', url:`https://reqres.in/api/users?page=${n}`})
    
    console.log("fetchUserList.response:", response)
    //예외처리 (실패했을 때)
    if(!(response.status === 200)){ 
        console.log("에러발생")
        // throw new Error("fetchUserList 예외발생")
        throw new Response("fetchUserList 예외발생", {status:500})
    }

     return response.data.data;
}//end fetchUserList

export async function fetchUserSave(user){
    // const response = await axios({
    //      method:'POST',  // PUT
    //      url:`https://reqres.in/api/users`,
    //      headers:{ 'Content-Type':'application/json'},
    //      data:user
    // });

    const response = await axios.post(`https://reqres.in/api/users`,
                                      user, 
                                      {headers:{ 'Content-Type':'application/json'}});

    console.log("response:", response)
    //예외처리 (실패했을 때)
    if(!(response.status === 201)){ 
        console.log("에러발생")
        throw new Error("fetchUserSave 예외발생")
    }
    return response.data;
}
//삭제하기
export async function fetchUserDelete(del_id){

//     const response = await axios({
//         method:'DELETE',
//         url:`https://reqres.in/api/users/2`
//    });

   const response = await axios.delete(`https://reqres.in/api/users/2`);

    //예외처리 (실패했을 때)
    if(!(response.status === 204)){ 
        console.log("에러발생")
        throw new Error("fetchUserDelete 예외발생")
    }
   console.log("fetchUserDelete.response:", response)

    return response;
}