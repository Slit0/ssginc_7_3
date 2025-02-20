import { useRouteError,Link } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
function ErrorPage(){
    const error = useRouteError();
    console.error(error); //ErrorResponseImpl {status: 500, statusText: '', internal: false, data: 'fetchUserList 예외발생'}
  
    let message = "의도하지 에러";
    let status = 404;

    if(error.status === 404){
      status = 404;
      message = error.data;
    }

    if(error.status === 500){
      status = 500;
      message = error.data;
    }
    if(error.status === 400){
      status = 400;
      message = error.data;
    }

    return (
      <div id="error-page">
          <MenuNavigation />
        <hr/>
        <h1>{status}에러</h1>
        <p>{message}</p>
      </div>
    );
}
export default ErrorPage;