
import './App.css';
import {useRef,  useState} from 'react'
import ResponseError from './components/ResponseError.js';
import { fetchFileUpload } from './api/httpService';

function App() {

  const theText = useRef(null);
  const theFile = useRef(null);

   //에러처리
    const [error, setError] = useState();
    const [selectedFile2, setSelectedFile2] = useState(null);


    async function handleSubmit(e){
    e.preventDefault();
    const text = theText.current.value;
    const selectedFile = theFile.current.files[0];
    setSelectedFile2(selectedFile)
    console.log("selectedFile: ", selectedFile)
    let formData = new FormData();
    formData.append("theFile", selectedFile);
    formData.append("theText", text);
     try {
            let response = await fetchFileUpload(formData);
            console.log("response: ", response);
    
      
          } catch (err) {
            console.log("App.fetchUserUpdate", err);
            setError({ message: "fetchUserUpdate 에러발생" });
          }


  }
  return (
    <div className="App">
      {error && <ResponseError message={error} />}
      {selectedFile2 && <img src={`http://localhost:8090/app/static/images/upload/${selectedFile2.name}`} alt=""  width={100} height={100}/>}
       <form onSubmit={handleSubmit}>
         text: <input type="text" name="theText" ref={theText}/>
         file: <input type="file" name="theFile" ref={theFile}/>
         <button>업로드</button>
       </form>
    </div>
  );
}

export default App;
