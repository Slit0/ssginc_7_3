

// axios 이용한 서버 연동
import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://reqres.in/api',
    timeout: 1000,
    headers: {'Content-Type':'application/json'}
  });

  instance.interceptors.request.use(function (config) {
   console.log("요청 interceptors: ", config)

   // 요청시 url 변경 작업 가능
   config.url="/users?page=1"

   return config;
}, function (error) {
    
    return Promise.reject(error);
});

// 응답 인터셉터 추가하기
instance.interceptors.response.use(function (response) {
    console.log("응답 interceptors: ", response)

    // 응답 결과 필터링 작업 가능
    var result = response.data.data.filter((row,idx)=>idx%2===0)
    response.data.data = result;
    
    return response;
  }, function (error) {

    return Promise.reject(error);
  });






export async function fetchUserList(n){

    // const response = await axios(`https://reqres.in/api/users?page=${n}`)
    // const response = await axios(`https://reqres.in/api/users`,{ params:{page:`${n}`}})
    // const response = await axios.get(`https://reqres.in/api/users?page=${n}`)
    const response = await instance({methdo:'get', url:`/users?page=${n}`})
    
    console.log("fetchUserList.response:", response)
    //예외처리 (실패했을 때)
    if(!(response.status === 200)){ 
        console.log("에러발생")
        throw new Error("fetchUserList 예외발생")
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

    const response = await instance.post(`/users`,user);

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

   const response = await instance.delete(`/users/2`);

    //예외처리 (실패했을 때)
    if(!(response.status === 204)){ 
        console.log("에러발생")
        throw new Error("fetchUserDelete 예외발생")
    }
   console.log("fetchUserDelete.response:", response)

    return response;
}