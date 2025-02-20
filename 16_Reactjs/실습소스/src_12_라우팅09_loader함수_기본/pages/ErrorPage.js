import { useRouteError,Link } from "react-router-dom";
import MenuNavigation from "../components/MenuNavigation";
function ErrorPage(){
    const error = useRouteError();
    console.error(error);
  
    return (
      <div id="error-page">
          <MenuNavigation />
        <hr/>
        <h1>404에러</h1>
        <p>요청한 경로는 존재하지 않는 url경로입니다. 확인하세요</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </div>
    );
}
export default ErrorPage;