

// fetch 이용한 서버 연동
// https://reqres.in/api/users?page=2

export async function fetchUserList(n){

    const response = await fetch(`https://reqres.in/api/users?page=${n}`)

    //예외처리 (실패했을 때)
    if(!response.ok){  // !(response.status === 200)
        console.log("에러발생")
        throw new Error("fetchUserList 예외발생")
    }
    
    // (성공했을 때)
    // fetch 함수의 응답인 response에 있는 다양한 메서드 사용
    // response.blob(), response.bytes() , response.text()
    const response_json = await response.json();
    console.log("response_json", response_json)


     return response_json.data;
}//end fetchUserList

export async function fetchUserSave(user){
    const response = await fetch(`https://reqres.in/api/users`,{
         method:'POST',  // PUT
         headers:{ 'Content-Type':'application/json'},
         body:JSON.stringify(user)
    });

    console.log("response:", response)

    //예외처리 (실패했을 때)
    if(!(response.status === 201)){ 
        console.log("에러발생")
        throw new Error("fetchUserSave 예외발생")
    }

    // (성공했을 때)
    const response_json = await response.json();
    console.log("fetchUserSave.response_json", response_json)
    return response_json;
}