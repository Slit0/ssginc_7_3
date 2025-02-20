
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import { fetchUserList } from "./api/httpService";
//loader 외부함수
async function users_loader(){
  const resonse = await fetchUserList(2);
  console.log("response>>>>>>>>>>>>>>>:", resonse)
  return resonse;
}

// /usersParam/2 요청시 2값이 params 파라미터로 전달됨
async function users_loader2({params}){
  console.log("users_loader2:", params) // {id: '1'}
  const resonse = await fetchUserList(params.id);

  return resonse;
}
// usersQueryString?id=2 요청시 2값이 request 파라미터로 전달됨
async function users_loader3({request}){
  console.log("users_loader3:", request) //
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  const resonse = await fetchUserList(id);

  return resonse;
}
const router = createBrowserRouter([
  {
    path:"/",
    element:<RootLayout/>,
    errorElement:<ErrorPage />,
    children:[
      {
        path: "/",  // http://localhost:3000/
        element: <Home />
        
      },
      {
        path: "/signup", // http://localhost:3000/signup
        element: <Signup />,
      },
      {
        path: "/users", // http://localhost:3000/signup
        element: <Users />,
        loader:users_loader
      },
      {
        path: "/usersParam/:id", // http://localhost:3000/signup
        element: <Users />,
        loader:users_loader2
      },
      {
        path: "/usersQueryString", // http://localhost:3000/signup
        element: <Users />,
        loader:users_loader3
      }
    ]
  }
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
