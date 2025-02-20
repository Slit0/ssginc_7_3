
import {createBrowserRouter,redirect,RouterProvider} from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import Users from "./pages/Users";
import { fetchUserList, fetchUserSave } from "./api/httpService";
//loader 외부함수
async function users_loader(){
  const resonse = await fetchUserList(2);
  console.log("response>>>>>>>>>>>>>>>:", resonse)
  return resonse;
}

// action 함수
async function users_add_action({params, request}){
  let formData = await request.formData();
  console.log("formData>>", formData)

  // 실제로 전달할 데이터임.
   const user1={
    id: formData.get("id"),
    email: formData.get("email"),
    first_name: formData.get("first_name"),
    last_name: formData.get("last_name"),

   }

  // reqres.in에 전달한 데이터
   const user={
    "name": "morpheus",
    "job": "leader"
}
   const response = await fetchUserSave(user);
   console.log(">>>>>>>>response:" , response)

  //최종적으로 리다이렉트
  return redirect("/users")
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
        action:users_add_action
      },
      {
        path: "/users", // http://localhost:3000/signup
        element: <Users />,
        loader:users_loader
      },
    ]
  }
]);

function Main() {
  return (
    <RouterProvider router={router} />
  );
}

export default Main;
