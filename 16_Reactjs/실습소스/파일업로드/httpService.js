import axios from 'axios';


const instance = axios.create({
    baseURL: 'http://localhost:8090/app',
    timeout: 2000
 
  });


export async function fetchFileUpload(formData) {
   
     
    const response = await instance.post("/upload" , formData,
        {
            headers: {
              "Content-Type": "multipart/form-data",
            }
        }
    );  // user는  JSON 형식임

      if (!response === 200) {  // 무조건 200 이 아님. 서버에서 응답하는 statsu 확인 필요.
             throw new Error('Failed to insert user data.');
      }
      
        
      var  resData = await response.data;
           console.log("resData:" , resData)
      return resData;
}
